const mongoose = require('mongoose');
const Schema = mongoose.Schema

const staffSchema = new Schema({
        name:  {type: String},
        photo: {type: String, default: 'nopic.png'},
        location: {
            lat: Number,
            lgn: Number
        },
        // createdAt: {type: Date, default: Date.now},  //ถ้าเป็นมองกูสมันจะสร้างให้เลยไม่จำเป็นต้องประกาศ โดยใช้ timestamp: true
        // updatedAt: {type: Date, default: Date.now}
    },{
        timestamp: true,
        collection:"shops"
    });

  const shop = mongoose.model("Shop", staffSchema)

  module.exports = shop