import {Module} from "@nestjs/common";
import {AuthModule} from "./auth/auth.module";
import { UserModule } from './user/user.module';
import { TreeModule } from './tree/tree.module';
import { EntityPointModule } from './entity-point/entity-point.module';

@Module({
    imports: [
        AuthModule,
        UserModule,
        TreeModule,
        EntityPointModule
    ]
})
export class ApiModule {}