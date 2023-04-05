import {HttpException, HttpStatus, Inject, Injectable} from '@nestjs/common';
import {User} from "./user.model";
import {CreateUserDto} from "./dto/create-user.dto";

@Injectable()
export class UserService {

    constructor(@Inject("USER_REPOSITORY") private userRepository: typeof User) {}

    async create (dto: CreateUserDto) {
        try {
            const user = await this.userRepository.create(dto);
            return user;
        }
        catch (e) {
            throw new HttpException('Неверные данные', HttpStatus.BAD_REQUEST);
        }
    }

    async getByLogin (login: string) {
        try {
            const user = await this.userRepository.findOne({ where: {login} });
            return user;
        }
        catch (e) {
            throw new HttpException('Неверные данные', HttpStatus.BAD_REQUEST);
        }
    }

    async getAll () {
        try {
            const users = await this.userRepository.findAll({ include: { all: true }});
            return users;
        } catch (e) {
            throw new HttpException('Неверные данные', HttpStatus.BAD_REQUEST);
        }
    }

}
