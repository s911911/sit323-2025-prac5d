const express = require("express");
const app = express();
const port = 2000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/web/index.html");
});

app.listen(port, () => {
  console.log(`running on http://localhost:${port}`);
});
