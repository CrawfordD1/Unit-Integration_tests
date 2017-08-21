var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  it('should multiply 3x5 and get 15', function(){
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    assert.equal(15, calculator.runningTotal)
  });

  it('divide 21/7 and get 3', function(){
    calculator.numberClick(21);
    calculator.operatorClick('/');
    calculator.numberClick(7);
    calculator.operatorClick('=');
    assert.equal(3, calculator.runningTotal)
  });

  it('add 1+4 and get 5', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(5, calculator.runningTotal)
  });

  it('subtract 7-4 and get 3', function(){
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.equal(3, calculator.runningTotal)
  });

  it('concatenate multiple number button clicks', function(){
    calculator.numberClick(7);
    calculator.numberClick(4);
    assert.equal(74, calculator.runningTotal)
  });

  it('chain multiple operations together', function(){
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.operatorClick('=');
    assert.equal(4, calculator.runningTotal)
  });

  it('clear the running total without affecting the calculation', function(){
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.operatorClick('=');
    assert.equal(6, calculator.runningTotal)
  });
});









