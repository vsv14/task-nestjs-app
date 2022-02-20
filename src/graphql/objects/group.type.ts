import { Field, ObjectType } from "@nestjs/graphql"
import { User } from "src/mongodb/database/schemas/user.schema"



@ObjectType()
export class GroupType {
    @Field(type => String, { nullable: true })
    _id?: string

    @Field(type => String, { nullable: true })
    name: string

    @Field(type => User, { nullable: true })
    authorId: User

    @Field(type => [User], { nullable: true })
    usersId: User[]
}
