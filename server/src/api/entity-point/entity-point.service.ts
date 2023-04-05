import {HttpException, HttpStatus, Inject, Injectable} from '@nestjs/common';
import {EntityPoint} from "./entity-point.model";
import {CreateEntityPointDto} from "./dto/create-entity-point.dto";
import {JwtService} from "@nestjs/jwt";
import {UserService} from "../user/user.service";
import {User} from "../user/user.model";
import {EntityToEntity} from "./entity-to-entity.model";

@Injectable()
export class EntityPointService {

    constructor(@Inject("ENTITY_POINT_REPOSITORY") private entityRepository: typeof EntityPoint,
                @Inject("ENTITY_TO_ENTITY_REPOSITORY") private entityToEntityRepo: typeof EntityToEntity,
                private jwtService: JwtService,
                private userService: UserService) {}

    async create (entityDto: CreateEntityPointDto, authToken: string) {
        try {
            const [_, token] = authToken.split(' ');
            const {parent_id, ...other} = entityDto;
            const entity = await this.entityRepository.create(other);

            if (parent_id) {
                await this.entityToEntityRepo.create({ parent_id, child_id: entity.id })
            }

            return entity;
        }
        catch (e) {
            console.log(e);
            throw new HttpException('Неверные данные', HttpStatus.BAD_REQUEST);
        }
    }

    async delete (id: number, authToken: string) {
        try {

        }
        catch (e) {
            throw new HttpException('Неверные данные', HttpStatus.BAD_REQUEST);
        }
    }

    async getAll () {
        try {
            return this.entityRepository.findAll({
                attributes: ['id', 'title', 'text'],
                include: [
                    { model: User, attributes: [ 'login' ] },
                    { model: EntityPoint, attributes: ['id', 'title', 'text'], as: 'children', nested: true },
                    { model: EntityPoint, attributes: ['id', 'title', 'text'], as: 'parent' }
                ]
            })
        }
        catch (e) {
            console.log(e);
            throw new HttpException('Ошибка сервера', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async getById(id: number) {

    }

    async getTreeById(id: number, tree: any = {}) {

    }

}
