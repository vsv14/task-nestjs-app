import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AddUsersGroupDto } from './dto/addUsersGroup.dto';
import CreateGroupDto from './dto/createGroup.dto';
import { Group } from './entities/group.entity';
import { GroupsService } from './groups.service';



@Controller('postgres/groups')
export class GroupController {
    constructor(private groupsService: GroupsService){}

    @Post()
    createGroup(@Body() dto:CreateGroupDto): Promise<Group>{
        return this.groupsService.createGroup(dto)
    }

    @Get(':id')
    getGroupById(@Param('id') id: number): Promise<Group>{
        return this.groupsService.findOne(id);
    }

    @Get()
    getGroups(): Promise<any[]>{
        return this.groupsService.findAll();
    }

    @Put(':id/update')
    groupUpdate(@Param('id') id: number, @Body() dto: CreateGroupDto): Promise<Group>{
        return this.groupsService.updateGroup(id, dto);
    }

    @Delete(':id/remove')
    groupRemove(@Param('id') id: number): Promise<any>{
        return this.groupsService.removeGroup(id);
    }

    @Post('users')
    addUserToGroup(@Body() dto: AddUsersGroupDto): Promise<any>{
        return this.groupsService.addUserGroup(dto);
    }
}