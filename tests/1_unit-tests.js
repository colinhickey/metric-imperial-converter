const chai = require('chai');
let assert = chai.assert;
let expect = chai.expect;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  test('handleInteger', function(){
  expect(convertHandler.getNum('7km')).to.satisfy(Number.isInteger)  
  });
  test('handleDecimal', function(){
  assert.typeOf(convertHandler.getNum('7.7km'), 'number')
  })
  
});