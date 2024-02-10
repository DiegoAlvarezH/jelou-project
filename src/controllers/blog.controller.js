import Blog from "../models/blog.model.js";

export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ user: req.user.id }).populate("user");
    res.json(blogs);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createBlog = async (req, res) => {
  try {
    const { title, description, credits, date, isPublic } = req.body;
    const newBlog = new Blog({
      title,
      description,
      credits,
      date,
      isPublic,
      user: req.user.id,
    });
    await newBlog.save();
    res.json(newBlog);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog)
      return res.status(404).json({ message: "Blog not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const { title, description, credits, date, isPublic } = req.body;
    const blogUpdated = await Blog.findOneAndUpdate(
      { _id: req.params.id },
      { title, description, credits, date, isPublic },
      { new: true }
    );
    return res.json(blogUpdated);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    return res.json(blog);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getBlogsByUser = async (req, res) => {
  try {
    const blogs = await Blog.find({ user: req.params.userId }).populate("user");
    res.json(blogs);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getPublicBlogs = async (req, res) => {
  try {
    const publicBlogs = await Blog.find({ isPublic: true }).populate("user");
    res.json(publicBlogs);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getPrivateBlogs = async (req, res) => {
  try {
    const privateBlogs = await Blog.find({ user: req.user.id, isPublic: false }).populate("user");
    res.json(privateBlogs);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTopRatedBlogs = async (req, res) => {
  try {
    const topRatedBlogs = await Blog.find().sort({ rating: -1 }).populate("user");
    res.json(topRatedBlogs);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const commentOnBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    const { text } = req.body;

    const newComment = {
      user: req.user.id,
      text,
    };

    blog.comments.push(newComment);
    await blog.save();

    res.json(blog);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const likeBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    // verify like is like=true or +2
    const alreadyLiked = blog.likes.some(like => like.user.equals(req.user.id));

    if (alreadyLiked) {
      return res.status(400).json({ message: "You already liked this blog" });
    }

    blog.likes.push({ user: req.user.id });
    await blog.save();

    res.json(blog);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};