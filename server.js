import express from "express";
import exphbs from "express-handlebars";
import { router } from "./Router/router.js";

const app = express();

app.use(express.urlencoded({ extended: true })); // Built-in middleware for parsing URL-encoded data
app.use(express.json()); // Built-in middleware for parsing JSON data
app.use(express.static("public"));

app.engine("hbs", exphbs.engine({ extname: ".hbs" }));

app.set("view engine", "hbs");

app.use("/", router);

app.listen(4000, () => {
  console.log("Server is up at port 4000");
});
