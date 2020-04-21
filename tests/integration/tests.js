const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;




// You need to write front-end integration tests to ensure the Calculator
// model and browser UI are working to meet the user requirements. The framework
 // provided to do this is Protractor JS using Chai for assertions.


describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })


it ('should have working number 3 button', function() {
  running_total = element(by.css('#running_total'))
  element(by.css('#number3')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('3')
})

it('should have number buttons update the display of the running total', function() {
  // assign the #running_total element to a variable:
  running_total = element(by.css('#running_total'))
  // click on 1 and subsequently on 5 should result in running_total value of 15
  element(by.css('#number1')).click();
  element(by.css('#number5')).click();

  expect(running_total.getAttribute('value')).to.eventually.equal('15')
})

it('should do the arithmetical operations and update the display with the result of operation', function() {
  running_total = element(by.css('#running_total'))
  element(by.css('#number2')).click();
  element(by.css('#operator_add')).click();
  element(by.css('#number4')).click();
  element(by.css('#operator_subtract')).click();

  expect(running_total.getAttribute('value')).to.eventually.equal('6');

})


it('should be able to chain multiple operations together', function() {
  running_total = element(by.css('#running_total'))
  element(by.css('#number2')).click();
  element(by.css('#operator_add')).click();
  element(by.css('#number4')).click();
  element(by.css('#operator_subtract')).click();
  element(by.css('#number4')).click();
  element(by.css('#operator_equals')).click();

  expect(running_total.getAttribute('value')).to.eventually.equal('2');
})

it('should be able to display the same number of decimals as js float in infinite scenarios', function() {
    running_total = element(by.css('#running_total'))

    let js_float = 1/3;
    let js_float_str = String(js_float);


    element(by.css('#number1')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();


    expect(running_total.getAttribute('value')).to.eventually.equal(js_float_str);
})

it('if division by zero occured during calculation it should show a warning in running total window', function() {
  running_total = element(by.css('#running_total'))
  element(by.css('#number1')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('Can\'t divide by zero');

})


});
