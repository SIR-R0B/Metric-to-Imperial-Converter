/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    var checkSingleFractionRegex = /\/+/;
    var checkDoubleFractionRegex = /\/{2,}/;
    var checkDoubleDecimalRegex = /\.{2,}/;
    var checkValidUnitRegex = /l$|gal$|mi$|km$|kg$|lbs$/i;
    var checkNumbersRegex = /\d+/;
    
    if (!checkValidUnitRegex.test(input) && !checkNumbersRegex.test(input)) return result = 'invalid number';
    
    result = input.replace(checkValidUnitRegex,'');
      
    switch(true) {
      case Number.isInteger(result):
        result = parseInt(result);
        break;
      case checkSingleFractionRegex.test(result): {
        if (checkDoubleFractionRegex.test(result)) result = 'invalid number';
        let counter = 0;
        for(let i = 0; i < result.length; i++){
         if (result[i] == '/') counter++;
          if (counter > 1) {
          result = 'invalid number';
          break; 
          }
        }
        break;
      }
      case checkDoubleDecimalRegex.test(result):
        result = 'invalid number';
        break;
      case isNaN():
        result = 1;
        break;
      default:
        result = parseFloat(result);
        break;
                 }             
  
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    var checkValidUnitRegex = /l$|gal$|mi$|km$|kg$|lbs$/i;
    
     if (!checkValidUnitRegex.test(input)) {
       return result = 'invalid unit';
     } else {
    result = input.match(checkValidUnitRegex).toString();
    return (result);
     }
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    
    initUnit = initUnit.toLowerCase();
    
    switch (initUnit) {
        
      case 'gal':
        result = 'l';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'mi':
        result = 'km';
        break;
       case 'l':
        result = 'gal';
        break;
      case 'kg':
        result = 'lbs'; 
        break;
      case 'km':
        result = 'mi'; 
        break;   
        
      default:
        return result = '|invalid returnUnit|';
        break;
                    } 
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    unit = unit.toLowerCase();
    
    switch (unit) {
        
      case 'gal':
        result = {initial: 'gallons', return: 'liters'};
        break;
      case 'lbs':
        result = {initial: 'pounds', return: 'kilograms'};
        break;
      case 'mi':
        result = {initial: 'miles', return: 'kilometers'};
        break;
     case 'l':
        result = {initial: 'liters', return: 'gallons'};
        break;
      case 'kg':
        result = {initial: 'kilograms', return: 'pounds'};
        break;
      case 'km':
        result = {initial: 'kilometers', return: 'miles'};
        break;   
        
      default:
        return result = {initial: '|invalid initUnit|', return: '|invalid returnUnit|'};
        break;
                    }
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    const kmToMi = 1/miToKm;
    const kgToLbs = 1/lbsToKg;
    const lToGal = 1/galToL;
    
    var result;
    
    initUnit = initUnit.toLowerCase().toString();
    
    initNum = eval(initNum);
    
    switch (initUnit) {
      case 'gal' : 
        result = initNum * galToL;
        break;
      case 'lbs' :
        result = initNum * lbsToKg;
        break;
      case 'mi' :
        result = initNum * miToKm;
        break;
      case 'l' :
        result = initNum * lToGal;
        break;
      case 'kg' :
        result = initNum * kgToLbs; 
        break;
      case 'km' :
        result = initNum * kmToMi; 
        break;  
      default:
         return result = 'invalid returnNum';
        break;
  }
    
    if (Number.isInteger(result)){
    return result;
    }
    return parseFloat(result.toFixed(5));
    
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    var units = {};
    units = this.spellOutUnit(initUnit)
    
    result = initNum + ' ' +  units.initial + ' converts to ' + returnNum + ' ' +  units.return;
    
    console.log(initNum);
    console.log(units.initial);
    console.log(returnNum);
    console.log(units.return);    
    
    return result;
  };
  
}

module.exports = ConvertHandler;
