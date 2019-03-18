const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var KudosSchema = new Schema({
  title: {
    type: String,
    required: "A post must have a title."
  },
  body: {
    type: String,
    required: "A post must have a body!"
  },
  sender: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: "A post must have a sender."
    },
  receiver: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: "A post must have a receiver."
    }
});


const Kudos = mongoose.model("Kudos", KudosSchema);
module.exports = Kudos;