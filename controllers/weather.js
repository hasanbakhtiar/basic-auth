const { Weather, weatherValidate } = require("../models/weather");

exports.weatherList = async (req, res) => {
    const weather = await Weather.find();
    res.status(200).send(weather);
  };


  exports.weatherAdd = async (req, res) => {
    const { error } = weatherValidate(req.body);
    if (error) {
        res.status(400).send(error.message);
    }else{
        const weather = new Weather(req.body);
        const result = await weather.save();
        res.status(200).send(result);
    }
  
  };