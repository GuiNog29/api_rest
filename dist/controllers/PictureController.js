"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multerConfig = require('../config/multerConfig'); var _multerConfig2 = _interopRequireDefault(_multerConfig);
var _Picture = require('../models/Picture'); var _Picture2 = _interopRequireDefault(_Picture);

const upload = _multer2.default.call(void 0, _multerConfig2.default).single('picture');

class PictureController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { student_id } = req.body;
        const picture = await _Picture2.default.create({ originalname, filename, student_id });

        return res.json(picture);
      } catch (e) {
        return res.status(400).json({
          errors: ['Student not exist.'],
        });
      }
    });
  }
}

exports. default = new PictureController();
