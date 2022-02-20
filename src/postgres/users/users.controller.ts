import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AddFriendsDto } from './dto/addFriends.dto';
import CreateUserDto from './dto/createUser.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';



@Controller('postgres/users')
export class UsersController {
    constructor(private usersService: UsersService){}

    @Post()
    createUser(@Body() dto:CreateUserDto): Promise<User>{
        return this.usersService.createUser(dto)
    }

    @Get(':id')
    getUserById(@Param('id') id: number): Promise<User>{
        return this.usersService.findOne(id);
    }

    @Get()
    getUsers(): Promise<User[]>{
        return this.usersService.findAll();
    }

    @Put(':id/update')
    userUpdate(@Param('id') id: number, @Body() dto: CreateUserDto): Promise<User>{
        return this.usersService.updateUser(id, dto);
    }

    @Delete(':id/remove')
    userRemove(@Param('id') id: number): Promise<void>{
        return this.usersService.removeUser(id);
    }

    @Post('friends')
    addFriends(@Body() dto: AddFriendsDto): Promise<any>{
        return this.usersService.addFriends(dto);
    }
}
