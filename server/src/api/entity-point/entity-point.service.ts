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
                private jwtService: JwtService,
                private userService: UserService) {}

    async create (entityDto: CreateEntityPointDto, authToken: string) {
        try {
            const [_, token] = authToken.split(' ');
            const { id: author_id, login } = this.jwtService.decode(token) as { id: number, login: string };

            const entity = await this.entityRepository.create({ ...entityDto, author_id });

            return {
                ...entity.dataValues, author: login
            }
        }
        catch (e) {
            throw new HttpException('Неверные данные', HttpStatus.BAD_REQUEST);
        }
    }

    async delete (id: number, authToken: string) {
        try {
            const [_, token] = authToken.split(' ');
            const { id: author_id, login } = this.jwtService.decode(token) as { id: number, login: string };

            const entity = await this.entityRepository.findByPk(id);

            if (entity && entity.author_id === author_id) {
                await entity.destroy();
                return true;
            }
        }
        catch (e) {
            throw new HttpException('Неверные данные', HttpStatus.BAD_REQUEST);
        }
    }

    async update (id: number, dto: CreateEntityPointDto, authToken: string) {
        try {
            const [_, token] = authToken.split(' ');
            const { id: author_id, login } = this.jwtService.decode(token) as { id: number, login: string };

            const entity = await this.entityRepository.findByPk(id);

            if (entity && entity.author_id === author_id) {
                entity.set('title', dto.title);
                entity.set('text', dto.text);
                await entity.save();
                return true;
            }
        }
        catch (e) {
            throw new HttpException('Неверные данные', HttpStatus.BAD_REQUEST);
        }
    }

    async getAll () {
        try {
            return this.entityRepository.findAll({ attributes: [] });
        }
        catch (e) {
            throw new HttpException('Ошибка сервера', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async getById(id: number) {
        return id;
    }

    async getByIds (ids: number[]) {
        try {
            return this.entityRepository.findAll(({ where: { id: ids }, include: [{ model: User, attributes: ['id', 'login'] }] }))
        }
        catch (e) {
            throw new HttpException('Неверные данные', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
