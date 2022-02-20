import { Field, InputType } from "@nestjs/graphql";



@InputType()
export class CreateGroupDto {

    @Field(type => String)
    name: string;

    @Field(type => String)
    authorId?: string;    

    @Field(type => [String])
    usersId?: string[];
}

export default CreateGroupDto;