import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { Group, GroupDocument } from '../database/schemas/group.schema';
import { User, UserDocument } from '../database/schemas/user.schema';
import { AddFriendsDto } from './dto/addFriends.dto';
import CreateUserDto from './dto/createUser.dto';


@Injectable()
export class UsersService {
    constructor(
       @InjectModel(User.name)
       private  userModel: Model<UserDocument>,

       @InjectModel(Group.name)
        private  groupModel: Model<GroupDocument>,
    ){}


    async add_friends(id: string, ...friendsId:string[]): Promise<any> {
        return await this.userModel
        .updateOne(
            { _id: id }, 
            {
                $push: { 
                    friendsId: { $each: friendsId}
                }
            }
        );    
    }


    async createUser(dto: CreateUserDto): Promise<User>{
        const newUser = new this.userModel(dto);
        return await newUser.save();
    }

    async findOne(id:string): Promise<User>{
        const groups = await this.groupModel.find({authorId: id}).then(data=> data);
        const user = await this.userModel.findOne({_id:id}).populate('friendsId').then(data=> data);

        return new Promise<User>((resolve, reject)=>{
            user.groups = groups;
            resolve(user);
        })
    }

    async findAll(): Promise<User[]>{
        return await this.userModel.find();
    }

    async updateUser(id: string, dto:CreateUserDto): Promise<User>{
        return await this.userModel.findByIdAndUpdate(id, dto, {new: true});
    }

    async removeUser(id: string): Promise<User>{
        await this.userModel.updateMany(
            {
                $pull: {friendsId: id}
            }
        );
        await this.groupModel.updateMany(
            {
                $pull: { authorId:id, usersId: id }
            }
        )
        return await this.userModel.findByIdAndRemove(id);
    }

    async addFriends(dto: AddFriendsDto): Promise<User>{
        dto.friendsId.forEach( friendId => {
            this.add_friends(friendId, dto._id);
        });
        await this.add_friends(dto._id, ...dto.friendsId);
        
        return await this.userModel.findOne({_id:dto._id});

    }
}


