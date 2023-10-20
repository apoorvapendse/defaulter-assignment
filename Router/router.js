import express from "express";
import { addNewStudent, deleteStudent, getSingleStudentData, getStudents, showHomePage, updateStudent } from "../Controllers/StudentController.js";

export const router = express.Router();

router.get("/", showHomePage);
router.get("/student-data", getStudents);
router.get("/get-single-student-data/:id", getSingleStudentData);
router.post("/post/new-student", addNewStudent);
router.post("/update-student",updateStudent)

router.post("/post/deleteStudent", deleteStudent);
