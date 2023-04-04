import {Body, Controller, Get, Post} from '@nestjs/common';
import {UserService} from "./user.service";
import {CreateUserDto} from "./dto/create-user.dto";

@Controller('/api/user')
export class UserController {

    constructor(private userService: UserService) {}

    @Post('/create')
    create (@Body() userDto: CreateUserDto) {
        return this.userService.create(userDto);
    }

    @Get('/all')
    getAll () {
        return this.userService.getAll();
    }

}
