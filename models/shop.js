const mongoose = require('mongoose');
const Schema = mongoose.Schema

const shopSchema = new Schema({
        name:  {type: String, required: true, trim: true},
        photo: {type: String, default: 'nopic.png'},
        location: {
            lat: Number,
            lgn: Number
        },
        // createdAt: {type: Date, default: Date.now},  //ถ้าเป็นมองกูสมันจะสร้างให้เลยไม่จำเป็นต้องประกาศ โดยใช้ timestamp: true
        // updatedAt: {type: Date, default: Date.now}
    },{
        toJSON: {virtuals: true},
        timestamp: true,
        collection:"shops"
    });

    shopSchema.virtual('menu',{
        ref: 'Menu',
        localField: '_id',
        foreignField: 'shop'
    });
    

  const shop = mongoose.model("Shop", shopSchema)

  module.exports = shop