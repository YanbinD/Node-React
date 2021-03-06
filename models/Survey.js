const mongoose = require("mongoose");
const { Schema } = mongoose;
// import subdocs
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema],
  redirect_url: String,
  yes: {type : Number, default : 0},
  no: {type: Number, default : 0},
  _user : {type : Schema.Types.ObjectId, ref : 'User'}, 
  dateSent: Date, 
  lastResponded: Date 
});
// '_' means relationship field 

mongoose.model('surveys', surveySchema);

