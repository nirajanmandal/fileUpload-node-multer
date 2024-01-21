const express = require("express");
const upload = require("./fileUpload");
const app = express();

const PORT = 8080;

app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    res
      .status(413)
      .send(`File not uploaded!, Please attach jpeg file under 5 MB`);
    return;
  }
  res.status(201).send("File uploaded successfully");
});

app.post("/uploads", upload.array("files", 10), (req, res) => {
  if (!req.files) {
    res
      .status(413)
      .send(`Files not uploaded!, Please attach jpeg file under 5 MB`);
    return;
  }
  res.status(201).send("Files uploaded successfully");
});

app.listen(PORT, () => {
  console.log(`server is started and listening at port: ${PORT}`);
});
