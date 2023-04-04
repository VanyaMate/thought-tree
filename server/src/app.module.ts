import {Module} from "@nestjs/common";
import {ApiModule} from "./api/api.module";
import {DatabaseModule} from "./database/database.module";
import {ConfigModule} from "@nestjs/config";

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`,
            isGlobal: true
        }),
        ApiModule,
        DatabaseModule
    ]
})
export class AppModule {}