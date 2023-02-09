const { getCarDB, getCarOneDB, postCarDB } = require("../service/car.service");

const getCar = (req, res) => {
    const data = getCarDB();
    res.status(200).json(data);
};
const getCarOne = (req, res) => {
    const id = req.params.id;
    const data = getCarOneDB(id);
    res.status(200).json(data);
};
const postCar = (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const model = req.body.model;
  const years = req.body.years;
  const price = req.body.price;
  const obj = {id: id, name: name, model: model, years: years, price: price}
  const data = postCarDB(obj);
  res.status(200).json(data);
};
const updateCar = (req, res) => {
  res.status(200).json("обновили машину");
};
const deleteCar = (req, res) => {
  res.status(200).json("удалили машину");
};

module.exports = {
  getCar,
  postCar,
  updateCar,
  deleteCar,
  getCarOne,
};
