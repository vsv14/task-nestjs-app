import { Inject } from "@nestjs/common";
import { Args, Query, Resolver, Mutation } from "@nestjs/graphql";
import { User } from "src/mongodb/database/schemas/user.schema";
import { UsersService } from "src/mongodb/users/users.service";
import CreateUserDto from "src/mongodb/users/dto/createUser.dto";
import { UserType } from "../objects/user.type";
import { AddFriendsDto } from "src/mongodb/users/dto/addFriends.dto";



@Resolver(()=> User)
export class UserResolver {
    constructor(
       @Inject(UsersService) private usersService: UsersService,
    ){}

    @Mutation(returns => User)
    async createUser(@Args('user') user: CreateUserDto): Promise<User> {
        return this.usersService.createUser(user);
    }

    @Mutation(returns => User)
    async updateUser(@Args("_id") id:string, @Args('user') user: CreateUserDto): Promise<User> {
        return this.usersService.updateUser(id, user);
    }

    @Mutation(returns => User)
    async addFriends(@Args("user") user:AddFriendsDto): Promise<User> {
        return this.usersService.addFriends(user);
    }

    @Query(returns => UserType)
    async getUser(@Args('_id') id: string): Promise<User>{
        return await this.usersService.findOne(id);
    }

    @Query(returns => [User])
    async getUsers(): Promise<User[]>{
        return await this.usersService.findAll();
    }

    @Query(returns => User)
    async removeUser(@Args('_id') id: string): Promise<User>{
        return await this.usersService.removeUser(id);
    }

        
}