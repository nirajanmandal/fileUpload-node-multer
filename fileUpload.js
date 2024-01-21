const multer = require("multer");
const path = require("node:path");

const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./files");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const fileFilterConfig = function (req, file, cb) {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/gif"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storageConfig,
  limits: {
    // limits file size to 5 MB
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilterConfig,
});

module.exports = upload;
