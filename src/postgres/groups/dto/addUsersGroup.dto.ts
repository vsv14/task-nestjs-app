import { User } from "src/postgres/users/entities/user.entity";



export class AddUsersGroupDto {
    id: number;
    users: User[];
}