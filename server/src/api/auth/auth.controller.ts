import {Body, Controller, Get, Headers, Post} from "@nestjs/common";
import {AuthService} from "./auth.service";
import {CreateUserDto} from "../user/dto/create-user.dto";

@Controller('/api/auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post('/registration')
    registration (@Body() userDto: CreateUserDto) {
        return this.authService.registration(userDto);
    }

    @Post('/login')
    login (@Body() userDto: CreateUserDto) {
        return this.authService.login(userDto);
    }

    @Post('/validate')
    validate (@Headers('authorization') authToken: string) {
        return this.authService.validate(authToken);
    }

}