import multer from 'multer';
import { extname, resolve } from 'path';

const random = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  storage: multer.diskStorage({
    destination: (req, file, callBack) => {
      callBack(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (req, file, callBack) => {
      callBack(null, `${Date.now()}_${random()}${extname(file.originalname)}`);
    },
  }),
};
