import { Module } from '@nestjs/common';
import {TreeController} from "./tree.controller";
import {TreeService} from "./tree.service";
import {treeProviders} from "./tree.providers";
import {JwtModule} from "@nestjs/jwt";
import {AuthModule} from "../auth/auth.module";

@Module({
    controllers: [ TreeController ],
    providers: [
        TreeService,
        ...treeProviders
    ],
    imports: [
        AuthModule,
    ]
})
export class TreeModule {}
