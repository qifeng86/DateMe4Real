const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MatchSchema = new Schema({
<<<<<<< HEAD
=======
  ref: "User",

>>>>>>> 4a9aefe71839fef45ed139a96f1b4c2bfd22d966
  matches: {
    type: Boolean,
    required: true,
  },

  userchoice: {
    type: Boolean,
    required: true,
  },

  matched: {
    type: Boolean,
    required: true,
  },
});

const Match = mongoose.model("Match", MatchSchema);

module.exports = Match;
