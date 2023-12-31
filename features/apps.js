const express = require("express");
const apps = express();

apps.use("", require("./swagger"))
apps.use("", require("./routes"))

module.exports = apps;