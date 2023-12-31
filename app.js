const dotenv = require('dotenv');
dotenv.config();

const apps = require("./features/apps");

apps.listen(3000, function () {
    return console.log("server is listening to port 3000");
});
