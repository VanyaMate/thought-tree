import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import {CreateUserDto} from "../user/dto/create-user.dto";
import {UserService} from "../user/user.service";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';
import {User} from "../user/user.model";

@Injectable()
export class AuthService {

    constructor(private userService: UserService,
                private jwtService: JwtService) {}

    async registration (userDto: CreateUserDto) {
        const candidate = await this.userService.getByLogin(userDto.login);
        if (candidate) {
            throw new HttpException('Пользователь с таким login уже существует', HttpStatus.BAD_REQUEST);
        }

        const hashPassword = await bcrypt.hash(userDto.password, 5);
        const user = await this.userService.create({...userDto, password: hashPassword});
        return this._generateToken(user);
    }

    async login (userDto: CreateUserDto) {
        const candidate = await this.userService.getByLogin(userDto.login);
        if (candidate && bcrypt.compareSync(userDto.password, candidate.password)) {
            return this._generateToken(candidate);
        }

        throw new HttpException('Неправильные данные', HttpStatus.BAD_REQUEST);
    }

    private _generateToken (user: User): { token: string } {
        const payload = {login: user.login};
        return {
            token: this.jwtService.sign(payload)
        }
    }

}