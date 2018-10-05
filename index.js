const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

// set port
const port = 9001;

// create instance of express as server
const server = express();

// use statments
server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(morgan("combined"));

// import main routes
mainRoutes = require("./api/mainRoutes");

// use the mainRoutes for /api
server.use("/api", mainRoutes);

// have server listen on port
server.listen(port, () =>
  console.log(`\n=== API running on port ${port} ===\n`)
);
