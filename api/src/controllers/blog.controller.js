import blogModel from "../models/blog.model.js";

export const newBlog = async (req, res) => {
  const { title, content } = req.body;
  try {
    const blog = await blogModel.create({
      title,
      content,
      author: req.user
    });
    return res.status(201).json({
      success: true,
      message: "Blog created successfully",
      blog
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    })
  }
}
export const getAllBlogs = async (req, res) => {
  try {
    const blogCount = await blogModel.countDocuments();
    const blogs = await blogModel.find();
    return res.status(200).json({
      blogCount,
      blogs
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    })
  }
}
export const singleBlog = async (req, res) => {
  try {
    const blog = await blogModel.findOne({ slug: req.params.slug });
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found"
      })
    }
    return res.status(200).json({
      blog
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message
    })
  }
}