import {HttpException, HttpStatus, Inject, Injectable} from '@nestjs/common';
import {User} from "./user.model";
import {CreateUserDto} from "./dto/create-user.dto";
import {Tree} from "../tree/tree.model";
import {EntityPoint} from "../entity-point/entity-point.model";
import {MINIMAL_ENTITY_DATA} from "../entity-point/entity-point.options";
import {MINIMAL_TREE_DATA} from "../tree/tree.options";

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

    async getByLogin (login: string, tree: number = 0, entities: number = 0) {
        try {
            const includes = this._getIncludes(tree, entities);

            const user = await this.userRepository.findOne({
                where: { login },
                attributes: ['id', 'login'],
                include: includes
            });

            return user;
        }
        catch (e) {
            console.log(e);
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

    async _getByLoginFull (login: string) {
        try {
            const user = await this.userRepository.findOne({ where: { login } });
            return user;
        }
        catch (e) {
            throw new HttpException('Неверные данные', HttpStatus.BAD_REQUEST);
        }
    }

    private _getIncludes (tree: number, entities: number) {
        const includes = [];

        tree && includes.push({ model: Tree, ...MINIMAL_TREE_DATA(tree) });
        entities && includes.push({ model: EntityPoint, ...MINIMAL_ENTITY_DATA(entities) });

        return includes;
    }

}
