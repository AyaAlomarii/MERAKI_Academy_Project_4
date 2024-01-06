const express = require("express");
const cors = require("cors");
const db = require("./models/db");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
//import users router
const usersRouter = require("./routes/users")
//import users router
const rolesRouter = require("./routes/roles")
//import initiative router
const initiativeRouter = require("./routes/initiative")
//----------------
// users Router
app.use("/users", usersRouter);

// roles Router
app.use("/roles", rolesRouter);

// initiative Router
app.use("/initiative", initiativeRouter);

// Handles any other endpoints [unassigned - endpoints]

app.use("*", (req, res) => res.status(404).json("NO content at this path"));

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
