import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should add 1 to 4 and get 5', () => {
      const button1 = container.getByTestId('number1');
      const buttonAdd = container.getByTestId("operator-add");
      const button4 = container.getByTestId('number4');
      const buttonEqual = container.getByTestId('operator-equals');
      const runningTotal = container.getByTestId('running-total');
      fireEvent.click(button1);
      fireEvent.click(buttonAdd);
      fireEvent.click(button4);
      fireEvent.click(buttonEqual);
      expect(runningTotal.textContent).toEqual('5');
  })

  it('should subtract 4 from 7 and get 3', () => {
    const button4 = container.getByTestId('number4');
    const buttonSubtract = container.getByTestId('operator-subtract');
    const button7 = container.getByTestId('number7');
    const buttonEqual = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7);
    fireEvent.click(buttonSubtract);
    fireEvent.click(button4);
    fireEvent.click(buttonEqual)
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should multiply 3 by 5 and get 15', () => {
    const button3 = container.getByTestId('number3');
    const buttonMultiply = container.getByTestId('operator-multiply');
    const button5 = container.getByTestId('number5');
    const buttonEqual = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button5);
    fireEvent.click(buttonEqual);
    expect(runningTotal.textContent).toEqual('15');
  })

  it('it should divide 21 by 7 and get 3', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const buttonDivide = container.getByTestId('operator-divide');
    const button7 = container.getByTestId('number7');
    const buttonEqual = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(buttonDivide);
    fireEvent.click(button7);
    fireEvent.click(buttonEqual)
    expect(runningTotal.textContent).toEqual('3');
  })

  it('concatenate multiple number button clicks', () => {
    const button7 = container.getByTestId('number7')
    const runningTotal = container.getByTestId('running-total')
    fireEvent.click(button7)
    fireEvent.click(button7)
    fireEvent.click(button7)
    expect(runningTotal.textContent).toEqual('777')
  })

  it('concatenate multiple operations together', () => {
    const button2 = container.getByTestId('number2');
    const buttonAdd = container.getByTestId("operator-add");
    const buttonMultiply = container.getByTestId('operator-multiply');
    const buttonEqual = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(buttonAdd);
    fireEvent.click(button2);
    fireEvent.click(buttonMultiply);
    fireEvent.click(button2);
    fireEvent.click(buttonEqual);
    expect(runningTotal.textContent).toEqual('8')

  })

  it('should clear the running total without affecting the calculation', () => {
  const button2 = container.getByTestId('number2');
  const button1 = container.getByTestId('number1');
  const buttonAdd = container.getByTestId("operator-add");
  const buttonSubtract = container.getByTestId('operator-subtract');
  const buttonClear = container.getByTestId('clear')
  const buttonEqual = container.getByTestId('operator-equals');
  const runningTotal = container.getByTestId('running-total');
  fireEvent.click(button2);
  fireEvent.click(buttonAdd);
  fireEvent.click(button1);
  fireEvent.click(buttonEqual);
  fireEvent.click(buttonClear)
  fireEvent.click(buttonSubtract);
  fireEvent.click(button1);
  fireEvent.click(buttonEqual);
  expect(runningTotal.textContent).toEqual('2');
  })

})

