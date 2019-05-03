var express = require('express');
var router = express.Router();
const { resolve } = require('path');

var multer  = require('multer')

var storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads'),
  filename: (req, file, cb) => cb(null, `${Date.now()}.${file.originalname}`),
  limits: { fileSize: 20000000 },
  fileFilter: (req, file, cb) => {
      const filetypes = /jpeg|jpg|gif|doc|docx|pdf|png/;
      const mimetype = filetypes.test(file.mimetype);
      const extname = filetypes.test(path.extname(file.originalname));
      if (mimetype && extname) {
        return cb(null, true);
      }
      cb('Error: Archivo debe ser una imagen valida');
  }
})

var upload = multer({ storage: storage })

router.post('/upload', upload.array('photos', 3), function (req, res, next) {
  res.send({ status: 'OK' });
})

router.get('/download/:fileName', (req, res) => {
  let data = req.params
  let file = resolve(`uploads/${data.fileName}`)
  res.download(file, data.fileName);
})

module.exports = router;
