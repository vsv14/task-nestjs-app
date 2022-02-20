import { Field, InputType } from "@nestjs/graphql";



@InputType()
export class AddUsersGroupDto {
    @Field(type => String)
    _id: string;

    @Field(type => [String])
    usersId: string[];
}