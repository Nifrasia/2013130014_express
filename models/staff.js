const mongoose = require('mongoose');
const Schema = mongoose.Schema

const staffSchema = new Schema({
        name:  {type: String},
        salary: {type: Number},
        created: {type: Date, default: Date.now}
    },{collation:"staffs"});

  const staff = mongoose.model("Staff", staffSchema)

  module.exports = staff