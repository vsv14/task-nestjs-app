import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Group } from '../database/schemas/group.schema';
import { AddUsersGroupDto } from './dto/addUsersGroup.dto';
import CreateGroupDto from './dto/createGroup.dto';
import { GroupsService } from './groups.service';



@Controller('mongodb/groups')
export class GroupController {
    constructor(private groupsService: GroupsService){}

    @Post()
    createGroup(@Body() dto:CreateGroupDto): Promise<Group>{
        return this.groupsService.createGroup(dto)
    }

    @Get(':id')
    getGroupById(@Param('id') id: string): Promise<Group>{
        return this.groupsService.findOne(id);
    }

    @Get()
    getGroups(): Promise<Group[]>{
        return this.groupsService.findAll();
    }

    @Put(':id/update')
    groupUpdate(@Param('id') id: string, @Body() dto: CreateGroupDto): Promise<Group>{
        return this.groupsService.updateGroup(id, dto);
    }

    @Delete(':id/remove')
    groupRemove(@Param('id') id: string): Promise<Group>{
        return this.groupsService.removeGroup(id);
    }

    @Post('users')
    addUserToGroup(@Body() dto: AddUsersGroupDto): Promise<any>{
        return this.groupsService.addUsersGroup(dto);
    }
}