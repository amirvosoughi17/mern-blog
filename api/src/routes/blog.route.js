import { Router } from 'express';
import { getAllBlogs, newBlog, singleBlog } from '../controllers/blog.controller.js';
import { isAuthUser } from '../middleware/auth.middleware.js'
const router = Router();
router.post('/new', isAuthUser, newBlog);
router.get('/all', getAllBlogs);
router.get('/:slug', singleBlog)
export { router as blogRoute }