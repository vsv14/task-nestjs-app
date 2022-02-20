import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { AddUsersGroupDto } from './dto/addUsersGroup.dto';
import CreateGroupDto from './dto/createGroup.dto';
import { Group } from './entities/group.entity';


@Injectable()
export class GroupsService {
    constructor(
        @InjectRepository(Group)
        private groupsRepository: Repository<Group>,
        @InjectRepository(User)
        private usersRepository: Repository<Group>,
    ){}


    async createGroup(dto: CreateGroupDto): Promise<Group>{
        dto.users?.unshift(dto.author);
        const newGroup = await this.groupsRepository.create(dto);
        return await this.groupsRepository.save(newGroup);
    }

    async findOne(id:number): Promise<any>{
        const group = await this.groupsRepository
        .find(
            {
                where:{
                    id: id
                },

                join: {
                    alias: "group",
                    leftJoinAndSelect: {
                        author: "group.author",
                        user: "group.users",
                    },
                },
                
                // relations:["users"]
            }
        )
        if(group){
            return group;
        }
        throw new HttpException('Group not found', HttpStatus.NOT_FOUND);
    }

    async findAll(): Promise<any[]>{
        return await this.groupsRepository
        .find(
            {
                join: {
                    alias: "group",
                    leftJoinAndSelect: {
                        author: "group.author",
                        user: "group.users",
                    },
                },
            }
        )
    }

    async updateGroup(id: number, dto:CreateGroupDto): Promise<Group>{
        await this.groupsRepository.update(id, dto);
        const group = this.groupsRepository.findOne(id);
        if(group){
            return group;
        }
        throw new HttpException('Group not found', HttpStatus.NOT_FOUND)
    }

    async removeGroup(id: number): Promise<any>{
        const resp = await this.groupsRepository.delete(id);
        if(!resp.affected){
            throw new HttpException('Group not found', HttpStatus.NOT_FOUND);
        }
        return resp;
    }

    async addUserGroup(dto: AddUsersGroupDto): Promise<any>{
        return await this.groupsRepository
        .createQueryBuilder()
        .relation(Group, "users")
        .of({id: dto.id})
        .add(dto.users);
    }
}
