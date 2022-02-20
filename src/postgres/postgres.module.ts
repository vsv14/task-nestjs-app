import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Group } from './groups/entities/group.entity';
import { GroupController } from './groups/groups.controller';
import { GroupsService } from './groups/groups.service';
import { User } from './users/entities/user.entity';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';



@Module({
    imports: [TypeOrmModule.forFeature([User, Group])],
    controllers: [UsersController, GroupController],
    providers: [GroupsService, UsersService],
})
export class PostgresModule {}
