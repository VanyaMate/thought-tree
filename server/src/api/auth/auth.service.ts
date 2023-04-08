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
        try {
            if (!userDto.login || !userDto.password) {
                throw new HttpException('Неправильные данные', HttpStatus.BAD_REQUEST);
            }

            const candidate = await this.userService.getByLogin(userDto.login);
            if (candidate) {
                throw new HttpException('Пользователь с таким login уже существует', HttpStatus.BAD_REQUEST);
            }

            const hashPassword = await bcrypt.hash(userDto.password, 5);
            const user = await this.userService.create({...userDto, password: hashPassword});
            /**
             * TODO: Добавить еще постоянный токен в базу
             */
            return this._getUserData(user);
        }
        catch (e) {
            throw new HttpException('Неверные данные', HttpStatus.BAD_REQUEST);
        }
    }

    async login (userDto: CreateUserDto) {
        try {
            const candidate = await this.userService._getByLoginFull(userDto.login);
            if (candidate && bcrypt.compareSync(userDto.password, candidate.password)) {
                return this._getUserData(candidate);
            }

            throw new HttpException('Неправильные данные', HttpStatus.BAD_REQUEST);
        }
        catch (e) {
            throw new HttpException('Неправильные данные', HttpStatus.BAD_REQUEST);
        }
    }

    async validate (authToken: string) {
        try {
            const token = (authToken || '').split(' ')[1];
            const { login } = this.jwtService.decode(token) as { login: string };
            const user = await this.userService._getByLoginFull(login);

            return {...this._getUserData(user), token};
        }
        catch (e) {
            throw new HttpException('Неправильные данные', HttpStatus.BAD_REQUEST);
        }
    }

    private _getUserData (user: User) {
        return {
            token: this._generateToken(user),
            login: user.login,
            trees: user.trees,
            entities: user.entities,
        }
    }

    private _generateToken (user: User): string {
        const payload = {login: user.login, id: user.id};
        return this.jwtService.sign(payload);
    }

}