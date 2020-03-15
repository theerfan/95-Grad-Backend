import { prop as Property, getModelForClass } from '@typegoose/typegoose';
import { db } from '../database/connect';
import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class TarinCategory {
    @Field()
    @Property({trim: true, unique: true})
    public title: string;
}

export const TarinCategoryModel = getModelForClass(TarinCategory, {
    existingConnection: db
});
