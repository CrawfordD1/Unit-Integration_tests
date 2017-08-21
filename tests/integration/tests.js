var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });


  // What does the code do in exceptional circumstances? 
  // If you divide by zero, what is the effect? 
  // Can you write a test to describe what you'd prefer to happen under this circumstance, and then correct to code to make that test pass.

  // write integration tests here in the form of "it should do something..."

 it('should have working number buttons', function(){
  running_total = element(by.css('#running_total'));
  element(by.css('#number1')).click();
  element(by.css('#number9')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('19');
 });

 it('Do each of the arithmetical operations work to update the display', function(){
  running_total = element(by.css('#running_total'));
  element(by.css('#clear')).click();
  element(by.css('#number1')).click();
  element(by.css('#operator_add')).click();
  element(by.css('#number9')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('10');
 });

 it('Can we chain multiple operations together? ', function(){
  running_total = element(by.css('#running_total'));
  element(by.css('#clear')).click();
  element(by.css('#number1')).click();
  element(by.css('#operator_add')).click();
  element(by.css('#number9')).click();
  element(by.css('#operator_multiply')).click();
  element(by.css('#number2')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('20');
 });

 it('Does it work as expected for a range of numbers?', function(){
  running_total = element(by.css('#running_total'));
  element(by.css('#clear')).click();
  element(by.css('#number1')).click();
  element(by.css('#operator_subtract')).click();
  element(by.css('#number9')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('-8');
 });

 // it('If you divide by zero, what is the effect? ', function(){
 //  running_total = element(by.css('#running_total'));
 //  element(by.css('#clear')).click();
 //  element(by.css('#number1')).click();
 //  element(by.css('#operator_divide')).click();
 //  element(by.css('#number0')).click();
 //  element(by.css('#operator_equals')).click();
 //  expect(running_total.getAttribute('value')).to.eventually.equal('Infinity');
 // });


 it('Can you write a test to describe what youd prefer to happen under this circumstance', function(){
  running_total = element(by.css('#running_total'));
  element(by.css('#clear')).click();
  element(by.css('#number1')).click();
  element(by.css('#operator_divide')).click();
  element(by.css('#number0')).click();
  element(by.css('#operator_equals')).click();
  expect(running_total.getAttribute('value')).to.eventually.equal('0');
 });


});











