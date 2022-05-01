import multer from 'multer';
import { extname, resolve } from 'path';

const random = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  fileFilter: (req, file, callback) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return callback(new multer.MulterError('File must be PNG or JPEG'));
    }

    return callback(null, true);
  },

  storage: multer.diskStorage({
    destination: (req, file, callBack) => {
      callBack(null, resolve(__dirname, '..', '..', 'uploads', 'images'));
    },
    filename: (req, file, callBack) => {
      callBack(null, `${Date.now()}_${random()}${extname(file.originalname)}`);
    },
  }),
};
