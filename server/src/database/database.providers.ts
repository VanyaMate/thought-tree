import {Sequelize} from "sequelize-typescript";
import {ConfigService} from "@nestjs/config";
import {User} from "../api/user/user.model";
import {Tree} from "../api/tree/tree.model";
import {EntityPoint} from "../api/entity-point/entity-point.model";

export const databaseProviders = [
    {
        provide: 'SEQUELIZE',
        useFactory: async (config: ConfigService) => {
            const sequelize = new Sequelize({
                dialect: 'postgres',
                host: config.get<string>('DB_POSTGRES_HOST'),
                port: config.get<number>('DB_POSTGRES_PORT'),
                username: config.get<string>('DB_POSTGRES_USER_NAME'),
                password: config.get<string>('DB_POSTGRES_PASSWORD'),
                database: config.get<string>('DB_POSTGRES_DATABASE'),
                logging: false
            });
            sequelize.addModels([User, Tree, EntityPoint]);
            await sequelize.sync();
            return sequelize;
        },
        inject: [ConfigService]
    }
]