console.log("Hello world");

let students;
async function getStudents() {
  response = await fetch("http://localhost:4000/student-data");
  students = await response.json();
  console.log(students);
}
getStudents();
