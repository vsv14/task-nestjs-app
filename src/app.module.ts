import * as Joi from '@hapi/joi';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './postgres/database/database.module';
import { PostgresModule } from './postgres/postgres.module';
import { MongoModule } from './mongodb/mongo.module';
import { MongoDBModule } from './mongodb/database/database.module';
import { GraphqlModule } from './graphql/graphql.module';



@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        POSTGRES_HOST: Joi.string().required(),
        POSTGRES_PORT: Joi.number().required(),
        POSTGRES_USER: Joi.string().required(),
        POSTGRES_PASSWORD: Joi.string().required(),
        POSTGRES_DB: Joi.string().required(),
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number(),
      })
    }),
    DatabaseModule, PostgresModule,
    MongoDBModule, MongoModule,
    GraphqlModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
