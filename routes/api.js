'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.get('/api/convert', (req, res) => {

    //console.log(req.query.input)
     let initNum = convertHandler.getNum(req.query.input);
     let initUnit = convertHandler.getUnit(req.query.input);
     let returnUnit =  convertHandler.getReturnUnit(initUnit);
     let returnNum = convertHandler.convert(initNum, initUnit);
     let string = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
     let obj = {
        initNum,
        initUnit,
        returnNum,
        returnUnit,
        string
      };
    
    res.send(obj);
  });

};
