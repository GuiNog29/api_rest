import Student from '../models/Student';

class HomeController {
  async index(req, res) {
    const newStudent = await Student.create({
      name: 'Guilherme',
      surname: 'Mathias',
      email: 'guilherme@gmail.com',
      age: 22,
      weight: 60,
      height: 1.70,
    });
    res.json(newStudent);
  }
}

export default new HomeController();
