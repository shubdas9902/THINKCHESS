import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getPost, getUserPost, sendPost } from "../controller/compost.controller.js";

const route=express.Router()

// route.get("/:id",protectRoute,getMessage)
route.post("/send",protectRoute,sendPost)
route.get("/getAllPost",getPost)
route.get('/getUserPost',protectRoute,getUserPost);
export default route;

