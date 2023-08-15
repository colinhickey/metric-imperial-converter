function ConvertHandler(input) {
  
  this.getNum = function(input) {
    let result = input.match(/\d+\.?\d*/);
    console.log('number is: ' + result[0]);
    return result[0];
  };
  
  this.getUnit = function(input) {
    let result = input.match(/[A-Za-z]+/);
    console.log("units are: " + result[0]);
    return result[0].toLowerCase();
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;

    switch (initUnit) {
      case "gal":
        result = "l";
        break;
      case "l":
        result = "gal";
        break;
      case "lbs":
        result = "kg";
        break;
      case "kg":
        result = "lbs";
        break;
      case "mi":
        result = "km";
        break;
      case "km":
        result = "mi";
        break;
    };
    console.log("return unit is: " + result)
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    switch (unit){
      case "gal":
        result ="gallons";
        break;
      case "l":
        result = "litres";
        break;
      case "lbs":
        result = "pounds";
        break;
      case "kg":
        result = "kilograms";
        break;
      case "mi":
        result = "miles";
        break;
      case "km":
        result = "kilometres";
        break;
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    switch (initUnit) {
      case "gal":
        result = initNum * galToL;
        break;
      case "l":
        result = initNum * 1/galToL;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "kg":
        result = initNum * 1/lbsToKg;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "km":
        result = initNum * 1/miToKm;
        break;
    }
    console.log('converted number is: ' + result.toFixed(2));
    return result.toFixed(2);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    console.log(result);
    return result;
  };
  
}

module.exports = ConvertHandler;
