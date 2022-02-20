import { User } from "src/postgres/users/entities/user.entity";

export class CreateGroupDto {
    name: string;
    author: User;    
    users: User[];
}

export default CreateGroupDto;