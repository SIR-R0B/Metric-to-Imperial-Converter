/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
   
    if((initUnit == 'invalid unit')&&(initNum == 'invalid number')) {
      res.json({initNum: 'invalid number',
                initUnit: 'invalid unit',
                string: 'invalid number and unit'});
      } else if (initNum == 'invalid number') {
      res.json({initNum: initNum,
                string: initNum});
      } else if (initUnit == 'invalid unit') {
        res.json({initUnit: initUnit,
                 string: initUnit});
      }
    
      res.json({
                 initNum:   initNum,
                 initUnit:   initUnit,
                 returnNum:  returnNum,
                 returnUnit: returnUnit,
                 string: toString
               });
    
    });
    
};
