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
