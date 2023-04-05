import {HttpException, HttpStatus, Inject, Injectable} from '@nestjs/common';
import {EntityPoint} from "./entity-point.model";
import {CreateEntityPointDto} from "./dto/create-entity-point.dto";
import {JwtService} from "@nestjs/jwt";
import {UserService} from "../user/user.service";
import {User} from "../user/user.model";

@Injectable()
export class EntityPointService {

    constructor(@Inject("ENTITY_POINT_REPOSITORY") private entityRepository: typeof EntityPoint,
                private jwtService: JwtService,
                private userService: UserService) {}

    async create (entityDto: CreateEntityPointDto, authToken: string) {
        try {
            const [_, token] = authToken.split(' ');
            const userData = this.jwtService.decode(token) as { id: number };
            const entity = await this.entityRepository.create({...entityDto, authorId: userData.id, parentId: entityDto.parentId ?? 0})

            if (entityDto.parentId) {
                const parent = await this.entityRepository.findByPk(entityDto.parentId);
                if (parent) {
                    parent.pointsIds.push(entity.id);
                    await parent.update("pointsIds", parent.pointsIds);
                }
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
            const [_, token] = authToken.split(' ');
            const userData = this.jwtService.decode(token) as { id: number };
            const entity = await this.entityRepository.findByPk(id);

            if (entity && (entity.authorId === userData.id)) {
                if (entity.parentId) {
                    const parent = await this.entityRepository.findByPk(entity.parentId);
                    await parent.update('pointsIds', parent.pointsIds.filter((id) => id !== entity.id))
                }

                if (entity.pointsIds) {
                    await Promise.all(entity.pointsIds.map(async (id) => {
                        const child = await this.entityRepository.findByPk(id);
                        await child.update('parentId', 0);
                    }))
                }

                await entity.destroy();
                return true;
            }

            throw new HttpException('Неверные данные', HttpStatus.BAD_REQUEST);
        }
        catch (e) {
            throw new HttpException('Неверные данные', HttpStatus.BAD_REQUEST);
        }
    }

    async getAll () {
        try {
            return await this.entityRepository.findAll({
                attributes: ['id', 'title', 'text', 'pointsIds'],
                include: [
                    { model: User, attributes: ['id', 'login'] },
                    { model: EntityPoint, attributes: ['id', 'title']}
                ]
            })
        }
        catch (e) {
            throw new HttpException('Ошибка сервера', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async getById(id: number) {
        return await this.entityRepository.findOne({
            where: {id},
            attributes: ['id', 'title', 'text', 'pointsIds'],
            include: [
                { model: User, attributes: ['login'] },
                { model: EntityPoint, attributes: ['id', 'title', 'text', 'pointsIds'] }
            ]
        })
    }

    /**
     * TODO: Доделать
     * @param id
     * @param tree
     */
    async getTreeById(id: number, tree: any = {}) {
        const entity = await this.getById(id);

        tree.data = entity;
        //tree.points = await Promise.all(entity.points.map((point) => this.getTreeById(point.id)))

        return tree;
    }

}
