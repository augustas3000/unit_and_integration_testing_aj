var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {

  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should add two numbers', function() {
    // calculator.add() - add 1 to 4 and get 5
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('=');

    assert.strictEqual(5, calculator.runningTotal);
    assert.strictEqual(5, calculator.runningTotal);
  });

  it('should do subtraction', function() {
    // calculator.subtract() subtract 4 from 7 and get 3
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.strictEqual(3, calculator.runningTotal);
  });

  it('should do multiplication', function() {
    // calculator.multiply() - multiply 3 by 5 and get 15
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(5);

  })

  it('should do division', function() {
    // calculator.divide() - divide 21 by 7 and get 3
    calculator.numberClick(21);
    calculator.operatorClick('/');
    calculator.numberClick(7);
    calculator.operatorClick('=');

    assert.strictEqual(3, calculator.previousTotal);
  })

  it('should not allow division by 0', function() {
    calculator.numberClick(21);
    calculator.operatorClick('/');
    calculator.numberClick(0);
    calculator.operatorClick('=');

    assert.strictEqual('Can\'t divide by zero', calculator.runningTotal);

  });


  it('should concatenate multiple number clicks', function() {
    calculator.numberClick(9);
    calculator.numberClick(6);
    assert.strictEqual(96, calculator.runningTotal);
  })

  it('should chain multiple operations together', function() {
    calculator.numberClick(4)
    calculator.operatorClick('+');
    calculator.numberClick(8);
    calculator.operatorClick('-');
    calculator.numberClick(2);
    calculator.operatorClick('=');

    assert.strictEqual(10, calculator.previousTotal);

  })

});
