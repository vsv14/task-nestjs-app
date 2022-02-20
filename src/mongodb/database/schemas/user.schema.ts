import { ObjectType, Field } from "@nestjs/graphql";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Document } from "mongoose";
import { Group } from "./group.schema";



export type UserDocument = User & Document


@ObjectType()
@Schema()
export class User {
    @Field(type => String, { nullable: true })
    _id?: string

    @Field(type => String, { nullable: true })
    @Prop({ required: true })
    email: string

    @Field(type => String,{ nullable: true })
    @Prop({required: true })
    username: string

    @Field(type => [Group], { nullable: true })
    @Prop({required: false })
    groups?: Group[]

    @Field(type => [String], { nullable: true })
    @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],required: false })
    friendsId?: string[]
}

export const UserSchema = SchemaFactory.createForClass(User);