import express from 'express'
import AuthController from '../controllers/authcontrol.js';
import BlogController from '../controllers/blogController.js';
import CategoryController from '../controllers/categoryController.js';
import multer from 'multer';
import checkIsUserAuth from '../middlewares/authMiddleWare.js';

const storage =multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,`public/upload/`);
    },
    filename:function (req,file,cb){
        cb(null, `${Date.now()}-${file.originalname}`);
    },
});

const upload = multer({storage: storage});
const router = express.Router();

// Api router using 
router.post("/user/register", AuthController.userRegistration);
router.post("/user/Login", AuthController.userLogin);

// Protected routes
router.get("/get/allblogs",checkIsUserAuth,BlogController.getAllBlogs);
router.post("/add/blog",upload.single("thumbnail"),checkIsUserAuth,BlogController.addNewBlog);
router.get("/get/blog/:id",checkIsUserAuth,BlogController.getSingleBlog);

router.get('/get/categories',checkIsUserAuth,CategoryController.getAllCategories);
router.post('/add/category',checkIsUserAuth,CategoryController.addNewCategories);

export default router;