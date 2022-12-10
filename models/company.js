const mongoose = require('mongoose');
const Schema = mongoose.Schema

const companySchema = new Schema({
  name:  {type: String},
  province: {type: String},
  postcode: {type: Number},
  created: {type: Date, default: Date.now}
},{collation:"companys"});

const company = mongoose.model("Company", companySchema)

module.exports = company