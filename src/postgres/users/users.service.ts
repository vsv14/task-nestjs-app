import { HttpStatus } from '@nestjs/common';
import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddFriendsDto } from './dto/addFriends.dto';
import CreateUserDto from './dto/createUser.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ){}


    async createUser(dto: CreateUserDto): Promise<User>{
        const newUser = await this.usersRepository.create(dto);
        return await this.usersRepository.save(newUser);
    }

    async findOne(id:number): Promise<any>{
        const user = await this.usersRepository.findOne(id).then(user => user);

        const friends = await this.usersRepository
        .query(
            `
            select id, email, username from public."user" u
	            inner join public."user_friends_user" f on
			        (f."userId_1" = ${id} and f."userId_2"=u.id)
		        or 	
			        (f."userId_1" = u.id and f."userId_2"= ${id});
            `
        ).then(friends => friends);
               
        if(user){
            return {
                user,
                friends
            };
        }
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    findAll(): Promise<User[]>{
        return this.usersRepository.find();
    }

    async updateUser(id: number, dto:CreateUserDto): Promise<User>{
        await this.usersRepository.update(id, dto);
        const user = this.usersRepository.findOne(id);
        if(user){
            return user;
        }
        throw new HttpException('User not found', HttpStatus.NOT_FOUND)
    }

    async removeUser(id: number): Promise<void>{
        const resp = await this.usersRepository.delete(id);
        if(!resp.affected){
            throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }
    }

    async addFriends(dto: AddFriendsDto): Promise<any>{
        return await this.usersRepository
        .createQueryBuilder()
        .relation(User, "friends")
        .of({id: dto.id})
        .add(dto.friends);
    }
}
