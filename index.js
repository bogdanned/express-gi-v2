const app = require("./app")

var port = process.env.PORT || 3000;

app.listen(port, () => (console.log("App running on http://localhost:"+ port)));
