const jsonfile = require("jsonfile");

const getCarDB = () => {
  let data = jsonfile.readFileSync("./models/car.json", (err, obj) => {
    if (err) {
        console.error(err);
        throw err;
    }   
});
  return data;
};

const getCarOneDB = (id) => {
    let data = jsonfile.readFileSync("./models/car.json", (err, obj) => {
      if (err) {
          console.error(err);
          throw err;
      }   
  });
    if (!id) throw 'нет нужного параметра';
    return data[id];
};

const postCarDB = (obj) => {
  let data = jsonfile.readFileSync('./models/car.json', (err, obj) => {
    if (err) {
      console.error(err);
      throw err;
  };
    fileObj.push(data);
    jsonfile.writeFile('./models/car.json', obj, (err) => {
      if (err) throw err;
    });
    return res.send(data);
  });
};


module.exports = { getCarDB, getCarOneDB, postCarDB };
