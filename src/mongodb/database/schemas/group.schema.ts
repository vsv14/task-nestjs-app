import { Field, ObjectType } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Document } from "mongoose";



export type GroupDocument = Group & Document;


@ObjectType()
@Schema()
export class Group {
    @Field(type => String, { nullable: true })
    _id?: string

    @Field(type => String)
    @Prop({ required: true })
    name: string

    @Field(type => String, { nullable: true })
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false })
    authorId?: string

    @Field(type => [String], { nullable: true })
    @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}], required: false })
    usersId?: string[]
}

export const GroupSchema = SchemaFactory.createForClass(Group);