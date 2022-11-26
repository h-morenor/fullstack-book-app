const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    user_id: {
      type: String, 
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);


