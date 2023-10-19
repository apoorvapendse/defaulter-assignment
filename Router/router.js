import express from "express";
import { addNewStudent, deleteStudent, getStudents, showHomePage } from "../Controllers/StudentController.js";

export const router = express.Router();

router.get("/", showHomePage);
router.get("/student-data", getStudents);
router.post("/post/new-student", addNewStudent);

router.post("/post/deleteStudent", deleteStudent);
