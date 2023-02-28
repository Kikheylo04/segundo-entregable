const express = require("express");
const db = require("./utils/database");
const Todo = require("./models/todo.model");
const todoRoutes = require("./routes/todoRoutes");
Todo;
const PORT = 8000;
db.authenticate()
  .then(() => {
    console.log("Conexión a base de datos");
  })
  .catch((error) => {
    console.log(error);
  });
db.sync()
  .then(() => {
    console.log("Base de datos sincronizada");
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();
app.use(express.json());
app.use(todoRoutes);
app.get("/", (req, res) => {
  res.send & "Bienvenido a mi servidor";
});
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
