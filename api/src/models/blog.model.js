import { Schema, model } from 'mongoose';
import slug from 'mongoose-slug-generator';

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: [4, "Title must be more than 4 characters"],
    maxLength: [120, "Title must be fewer than 120 characters"]
  },
  content: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    default: ""
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  slug: {
    type: String,
    slug: 'title',
    unique: true
  }
}, { timestamps: true }
);

//  Sluable option
blogSchema.pre("save", function (next) {
  this.slug = this.title.split(" ").join('-');
  return next();
})
export default model("Blog", blogSchema);