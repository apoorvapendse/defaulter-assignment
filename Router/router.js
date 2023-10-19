import express from "express";
import { getStudents, showHomePage } from "../Controllers/StudentController.js";

export const router = express.Router();

router.get("/", showHomePage);
router.get("/student-data", getStudents);
