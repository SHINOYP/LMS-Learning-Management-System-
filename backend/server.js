require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const chaptersRoutes = require("./routes/chapters");
const moduleRoutes = require("./routes/module");
const userRoutes = require("./routes/user");
const path = require("path");
const routes = require("./routes/ToDoRoute");
const { socketController } = require("./contollers/chatController");

//express app created
const app = express();
const server = require("http").createServer(app);

// socket.io and then i added cors for cross origin to localhost only
const io = require("socket.io")(server, {
  cors: {
    origin: "*", //specific origin you want to give access to,
  },
});

socketController(io);

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions)); // Use this after the variable declaration

//middle vware
app.use(express.json()); //post coming request data checks
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/chat", socketController);
app.use("/api/chapters", chaptersRoutes);
app.use("/api/module", moduleRoutes);
app.use("/api/user", userRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(routes);

//connect to db
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    //listen for requests
    server.listen(process.env.PORT, () => {
      console.log("listening to port 4000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
