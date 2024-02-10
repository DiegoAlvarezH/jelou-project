import { Router } from "express";
import {
  createBlog,
  deleteBlog,
  getBlog,
  getBlogs,
  updateBlog,
  getBlogsByUser,
  getPublicBlogs, 
  getPrivateBlogs,
  getTopRatedBlogs,
  commentOnBlog,
  likeBlog,
  // getBlog,
} from "../controllers/blog.controller.js";
import { auth } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createBlogSchema } from "../schemas/blog.schema.js";

const router = Router();

router.get("/blogs", auth, getBlogs);

router.post("/blogs", auth, validateSchema(createBlogSchema), createBlog);

router.get("/blogs/:id", auth, getBlog);

router.put("/blogs/:id", auth, updateBlog);

router.delete("/blogs/:id", auth, deleteBlog);

router.get("/blogs/user/:userId", auth, getBlogsByUser);

router.get("/blogs/public", getPublicBlogs);

router.get("/blogs/private", auth, getPrivateBlogs);

router.get("/blogs/top-rated", getTopRatedBlogs);

router.post("/blogs/:id/comment", auth, commentOnBlog);

router.post("/blogs/:id/like", auth, likeBlog);

export default router;
