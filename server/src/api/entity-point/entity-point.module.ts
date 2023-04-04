import { Module } from '@nestjs/common';
import { EntityPointController } from './entity-point.controller';
import { EntityPointService } from './entity-point.service';
import {entityProviders} from "./entity-point.providers";
import {AuthModule} from "../auth/auth.module";
import {JwtModule} from "@nestjs/jwt";
import {UserModule} from "../user/user.module";

@Module({
    controllers: [EntityPointController],
    providers: [
        EntityPointService,
        ...entityProviders
    ],
    imports: [
        AuthModule,
        JwtModule,
        UserModule
    ]
})
export class EntityPointModule {}
