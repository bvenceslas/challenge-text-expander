/* eslint-disable */
import * as mongoose from 'mongoose';

export const AgentSchema = new mongoose.Schema({
    firstname: {type: String},
    lastname: {type: String},
    phonetname: {type: String},
    year: {type: Number}
});