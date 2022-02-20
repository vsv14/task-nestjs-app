import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { Group, GroupDocument } from '../database/schemas/group.schema';
import { AddUsersGroupDto } from './dto/addUsersGroup.dto';
import CreateGroupDto from './dto/createGroup.dto';




@Injectable()
export class GroupsService {
    constructor(
        @InjectModel(Group.name)
        private  groupModel: Model<GroupDocument>
    ){}


    async createGroup(dto: CreateGroupDto): Promise<Group>{
        dto.usersId?.unshift(dto.authorId);
        const newGroup = new this.groupModel(dto);
        const resp =  await newGroup.save();
        return resp;
    }

    async findOne(id:string): Promise<Group> {
        return await this.groupModel.findOne({_id:id}).populate(['usersId', "authorId"]);
    }

    async findAll(): Promise<Group[]>{
        return await this.groupModel.find().populate("authorId");
    }

    async updateGroup(id: string, dto:CreateGroupDto): Promise<Group> {
        return await this.groupModel.findByIdAndUpdate(id, dto, {new: true});
    }

    async removeGroup(id: string): Promise<Group> {
        return await this.groupModel.findByIdAndRemove(id);
    }

    async addUsersGroup(dto: AddUsersGroupDto): Promise<Group>{
        await this.groupModel.updateOne(
            { _id: dto._id }, 
            {
                $push: { 
                    usersId: { $each: dto.usersId}
                }
            }
        );
        return this.groupModel.findOne({ _id: dto._id }); 
    }
}
