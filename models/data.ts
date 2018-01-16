import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ObjectSchema = new Schema(
    {
        name:{
            type : String,

        },
        count:{
            type: Number
        }
    }
);

export const Object = mongoose.model('obj', ObjectSchema);