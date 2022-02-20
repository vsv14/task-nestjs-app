import { Inject } from "@nestjs/common";
import { Args, Query, Resolver, Mutation } from "@nestjs/graphql";
import { GroupType } from "../objects/group.type";
import { GroupsService } from "src/mongodb/groups/groups.service";
import CreateGroupDto from "src/mongodb/groups/dto/createGroup.dto";
import { Group } from "src/mongodb/database/schemas/group.schema";
import { AddUsersGroupDto } from "src/mongodb/groups/dto/addUsersGroup.dto";



@Resolver(()=> Group)
export class GroupResolver {
    constructor(
       @Inject(GroupsService) private groupsService: GroupsService,
    ){}

    @Mutation(returns => Group)
    createGroup(@Args('group') group: CreateGroupDto): Promise<Group> {
        return this.groupsService.createGroup(group);
    }

    @Mutation(returns => Group)
    async updateGroup(@Args("_id") id:string, @Args('group') group: CreateGroupDto): Promise<Group> {
        return this.groupsService.updateGroup(id, group);
    }

    @Mutation(returns => Group)
    async addUsersGroup(@Args("group") group:AddUsersGroupDto): Promise<Group> {
        return this.groupsService.addUsersGroup(group);
    }

    @Query(returns => GroupType)
    async getGroup(@Args('_id') id: string): Promise<Group>{
        return await this.groupsService.findOne(id);
    }

    @Query(returns => [Group])
    async getGroups(): Promise<Group[]>{
        return await this.groupsService.findAll();
    }

    @Query(returns => Group)
    async removeGroup(@Args('_id') id: string): Promise<Group>{
        return await this.groupsService.removeGroup(id);
    }

        
}