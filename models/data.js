"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ObjectSchema = new Schema({
    name: {
        type: String,
    },
    count: {
        type: Number
    }
});
exports.Object = mongoose.model('obj', ObjectSchema);
