import mysql from "mysql2";

import dotenv from "dotenv";
dotenv.config();

const pool = mysql
  .createPool({
    host: "127.0.0.1",
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  })
  .promise();

//controllers

export const showHomePage = async (req, res) => {
  const data = await pool.query("SELECT * FROM student");
  const students = data[0];
  res.render("home", { students: students });
};

export const getStudents = async (req, res) => {
  const data = await pool.query("SELECT * FROM student");
  res.json(data[0]);
};

export const addNewStudent = async (req, res) => {
  console.log(req.body);
  try {
    await pool.query(
      `INSERT INTO student(name,prn,cgpa,sgpa,overall_attendance)VALUES("${req.body.name}","${req.body.prn}","${req.body.cgpa}","${req.body.sgpa}","${req.body.overall_attendance}")`
    );
  } catch (err) {
    console.log(err);
  }

  res.redirect("/")
};

export const deleteStudent = async(req,res)=>{
    console.log(req.body)
    pool.query(`DELETE FROM student WHERE id = ${req.body.id}`)
    res.send("deleted")
}