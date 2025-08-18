import fs from 'fs';
import Blog from '../models/Blog.js';
import imageKit from '../configs/imageKit.js';
import Comment from '../models/Comment.js';

export const addBlog=async(req,res)=>{
    try {
        const {title,subTitle,description,category,isPublished}=JSON.parse(req.body.blog);
        const imageFile=req.file;
        //check if all fields are filled
        if (!title  || !description || !category || !imageFile) {
            return res.json({ success: false, message: "Please fill all fields" });
        }
        const fileBuffer=fs.readFileSync(imageFile.path)
        //upload image to imagekit
        const response=await imageKit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder:"/blogs"

        });
        //optimization through imagekit url transformation
        const optimizedImageUrl = imageKit.url({
            path: response.filePath, // Fixed typo here
            transformation: [
                { format: 'webp' }, // Convert to modern format
                { width: '1280' },  // Resize to 1280px width
                { quality: "auto" } // Auto compression
            ]
        });
        const image=optimizedImageUrl;

        await Blog.create({
            title,
            subTitle,
            description,
            category,
            image,
            isPublished
        });
        res.json({ success: true, message: "Blog created successfully" });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

export const getALLBlogs=async(req,res)=>{
    try {
        const blogs = await Blog.find({ isPublished: true });
        res.json({ success: true,blogs });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

export const getBlogById=async(req,res)=>{
    try {
        const { blogId } = req.params;
        const blog = await Blog.findById(blogId);
        if (!blog) {
            return res.json({ success: false, message: "Blog not found" });
        }
        res.json({ success: true, blog });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

export const deleteBlogById=async(req,res)=>{
    try {
        const { id } = req.params;
        await Blog.findByIdAndDelete(id);
        //Delete all comments associated with this blog
        await Comment.deleteMany({ blog: id });
        res.json({ success: true, message: "Blog deleted successfully" });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

export const togglePublish = async (req, res) => {
    try {
        const { id } = req.body;
        const blog = await Blog.findById(id);
        if (!blog) {
            res.json({ success: false, message: "Blog not found" });
        }
        blog.isPublished = !blog.isPublished;
        await blog.save();
        res.json({ success: true, message: "Blog updated successfully" });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

export const addComment=async(req,res)=>{
    try {
        const {blog,name, content } = req.body;
       await Comment.create({blog,name, content })
       res.json({ success: true, message: "Comment added for review" });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}

export const getBlogComments=async(req,res)=>{
    try {
        const { blogId } = req.body;
        const comments = await Comment.find({ blog: blogId, isApproved:true }).sort({ createdAt: -1 });
        res.json({ success: true, comments });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}