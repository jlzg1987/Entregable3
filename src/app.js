const express = require("express");
const cors = require("cors")
const morgan = require("morgan");
const db = require("./utils/database");
const initMOdels = require('./models/initModels.models');
const userRoutes = require("./routes/users.routes");

const PORT = 8000;
initMOdels();


const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

db.authenticate()
  .then(() => console.log("Autenticación exitosa"))
  .catch((error) => console.log(error));
db.sync({ alter: true })
  .then(() => { console.log("conectado a la base de dato sincronizado") })
  .catch((error) => { console.log(error) });

app.use(userRoutes);



app.get("/", (req, res) => {
  res.status(200).json({ message: "Bienvenido al server" });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});