import {Inject, Injectable} from '@nestjs/common';
import {User} from "./user.model";
import {CreateUserDto} from "./dto/create-user.dto";

@Injectable()
export class UserService {

    constructor(@Inject("USER_REPOSITORY") private userRepository: typeof User) {}

    async create (dto: CreateUserDto) {
        const user = await this.userRepository.create(dto);
        return user;
    }

    async getByLogin (login: string) {
        const user = await this.userRepository.findOne({ where: {login}});
        return user;
    }

    async getAll () {
        const users = await this.userRepository.findAll();
        return users;
    }

}
