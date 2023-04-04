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
            const userData = this.jwtService.decode(token) as { login: string };
            const user = await this.userService.getByLogin(userData.login);

            const entity = await this.entityRepository.create({...entityDto}, { include: User })

            return entity;
        }
        catch (e) {
            throw new HttpException('Неверные данные', HttpStatus.BAD_REQUEST);
        }
    }

    async getById(id: number) {

    }

}
