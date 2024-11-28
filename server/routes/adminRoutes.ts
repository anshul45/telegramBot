import express from "express";
import { getAllSubscribedUser } from "../controllers/adminControllers";

const adminRoutes = express.Router();


adminRoutes.get("/",getAllSubscribedUser)

export default adminRoutes;