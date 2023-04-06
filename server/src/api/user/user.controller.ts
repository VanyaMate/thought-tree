import {Body, Controller, Get, Param, Post, Query} from '@nestjs/common';
import {UserService} from "./user.service";
import {CreateUserDto} from "./dto/create-user.dto";

@Controller('/api/user')
export class UserController {

    constructor(private userService: UserService) {}

    @Get('/all')
    getAll () {
        return this.userService.getAll();
    }

    @Get('/:login')
    getByLogin (@Param() params: { login: string }, @Query() query: { tree?: number, entities?: number }) {
        return this.userService.getByLogin(params.login, +query.tree, +query.entities);
    }

}
