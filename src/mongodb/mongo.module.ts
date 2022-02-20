import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Group, GroupSchema } from './database/schemas/group.schema';
import { User, UserSchema } from './database/schemas/user.schema';
import { GroupController } from './groups/groups.controller';
import { GroupsService } from './groups/groups.service';
import { TestService } from './users/test.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

@Module({
    imports:[
        MongooseModule.forFeature(
            [
                {name: User.name, schema: UserSchema},
                {name: Group.name, schema: GroupSchema},
            ]
        )
    ],
    controllers: [UsersController, GroupController],
    providers: [UsersService, GroupsService, TestService],
    exports: [GroupsService, UsersService, TestService],
})
export class MongoModule {}
