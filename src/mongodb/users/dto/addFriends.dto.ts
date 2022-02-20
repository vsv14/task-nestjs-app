import { Field, InputType } from "@nestjs/graphql";



@InputType()
export class AddFriendsDto {
    @Field(type => String)
    _id: string;

    @Field(type => [String])
    friendsId: string[];
}