import { Field, InputType } from "@nestjs/graphql";



@InputType()
export class CreateUserDto {
    @Field()
    email: string;

    @Field()
    username: string;

    @Field(type => [String], { nullable: true })
    friendsId?: string[];
}

export default CreateUserDto;