import { Module } from '@nestjs/common';
import {TreeController} from "./tree.controller";
import {TreeService} from "./tree.service";
import {treeProviders} from "./tree.providers";
import {JwtModule} from "@nestjs/jwt";
import {AuthModule} from "../auth/auth.module";
import {EntityPointModule} from "../entity-point/entity-point.module";

@Module({
    controllers: [ TreeController ],
    providers: [
        TreeService,
        ...treeProviders
    ],
    imports: [
        AuthModule,
        EntityPointModule,
    ]
})
export class TreeModule {}
