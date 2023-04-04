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

            return entity;
        }
        catch (e) {
            console.log(e);
            throw new HttpException('Неверные данные', HttpStatus.BAD_REQUEST);
        }
    }

    async getById(id: number) {
        const entity = await this.entityRepository.findOne({ where: {id}, include: { all: true } })
        return entity;
    }

    /**
     * TODO: Доделать
     * @param id
     * @param tree
     */
    async getTreeById(id: number, tree: any = {}) {
        const entity = await this.getById(id);

        tree.data = entity;
        tree.data.points = entity.points;

        const points = await Promise.all(tree.data.points.map((point) => {
            return this.getTreeById(point.id, point);
        }));

        tree.data.points = points;

        return tree;
    }

}
