import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getComment, sendComment } from "../controller/comment.controller.js";

const route=express.Router()

route.post("/post/:id",protectRoute,sendComment)

route.get("/getAllComment/:id",getComment)
export default route;