import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';



@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
        user: configService.get<string>('MONGO_USERNAME'),
        pass: configService.get<string>('MONGO_PASSWORD'),
        dbName: configService.get<string>('MONGO_DB')
      }),
      inject: [ConfigService],
    }),
  ],
})
export class MongoDBModule {}