import {forwardRef, Module} from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import {userProviders} from "./user.providers";
import {AuthModule} from "../auth/auth.module";

@Module({
    controllers: [UserController],
    providers: [
        UserService,
        ...userProviders,
    ],
    imports: [
        forwardRef(() => AuthModule)
    ],
    exports: [
        UserService
    ]
})
export class UserModule {}
