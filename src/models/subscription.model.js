import mongoose, { Schema, schema } from 'mongoose';

const subsciptionSchema =new Schema({
      subsciption :{
        type:Schema.Types.ObjectId,
        ref:"User"
      },
      channel :{
        type:Schema.Types.ObjectId,
        ref:"User"
      }

},{timestamps:true})




export const subsciption =mongoose.model("subsciption",subsciptionSchema)

