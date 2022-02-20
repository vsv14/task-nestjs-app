import { User } from "src/postgres/users/entities/user.entity";



export class AddFriendsDto {
    id: number;
    friends: User[];
}