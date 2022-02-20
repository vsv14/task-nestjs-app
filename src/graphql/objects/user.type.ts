import { Field, ObjectType } from "@nestjs/graphql"
import { Group } from "src/mongodb/database/schemas/group.schema"
import { User } from "src/mongodb/database/schemas/user.schema"



@ObjectType()
export class UserType {
    @Field(type => String, { nullable: true })
    _id?: string

    @Field(type => String, { nullable: true })
    email: string

    @Field(type => String,{ nullable: true })
    username: string

    @Field(type => [Group], { nullable: true })
    groups: Group[]

    @Field(type => [User], { nullable: true })
    friendsId?: User[]
}