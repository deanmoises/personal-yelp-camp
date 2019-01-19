var mongoose = require("mongoose");

// remember we need to have to data property
// that is the text and the author
var commentSchema = mongoose.Schema({
  text: String,
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    username: String
  }
});

module.exports = mongoose.model("Comment", commentSchema);
