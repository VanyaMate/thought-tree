import {Body, Controller, Get, Param, Post, UseGuards, Headers} from '@nestjs/common';
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {CreateEntityPointDto} from "./dto/create-entity-point.dto";
import {EntityPointService} from "./entity-point.service";

@Controller('/api/entity')
export class EntityPointController {

    constructor(private entityService: EntityPointService) {}

    @Post('/create')
    @UseGuards(JwtAuthGuard)
    create (@Body() entityDto: CreateEntityPointDto, @Headers('authorization') authToken: string) {
        return this.entityService.create(entityDto, authToken);
    }

    @Get('/getById/:id')
    getById (@Param() param: { id: number }) {
        return this.entityService.getById(param.id);
    }

    @Get('/getTreeById/:id')
    getTreeById(@Param() param: { id: number }) {
        return this.entityService.getTreeById(param.id);
    }

}
