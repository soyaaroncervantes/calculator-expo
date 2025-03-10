import {useEffect, useRef, useState} from "react";

enum Operator {
  add = '+',
  subtract = '-',
  multiply = '*',
  divide = '÷',
}

export const useCalculator = () => {
  const [formula, setFormula] = useState('0');
  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');
  const lastOperation = useRef<Operator>();

  useEffect(() => {
    const result = calculateSubResult();
    isNaN(result) ? setPrevNumber('0') : setPrevNumber(`${result}`);
  }, [formula]);

  useEffect(() => {
    if (lastOperation.current) {
      const value = formula.split(' ').at(0);
      setFormula(`${value} ${lastOperation.current} ${number}`)
    } else {
      setFormula(number)
    }
  }, [number]);

  const cleanNumber = () => {
    setFormula('0');
    setNumber('0');
    setPrevNumber('0');
    lastOperation.current = undefined;
  }

  const toggleSign = () => {
    if (!number.includes('-')) return setNumber(x => '-' + x);
    const value = number.split('-').at(1);
    return setNumber(value);
  }

  const deleteLastNumber = () => {
    if (number.length === 1) return setNumber('0');
    if (number.length === 2 && number.includes('-')) return setNumber('0');
    const newNumber = number.split('').toSpliced(-1).join('');
    return setNumber(newNumber);
  }

  const setLastNumber = () => {
    calculateResult();
    const newNumber = number.endsWith('.') ? number.split('').toSpliced(-1).join('') : number;
    setPrevNumber(newNumber);
    setNumber('0');
  }

  const operations = {
    divide: () => {
      setLastNumber();
      lastOperation.current = Operator.divide;
    },
    multiple: () => {
      setLastNumber();
      lastOperation.current = Operator.multiply;
    },
    subtract: () => {
      setLastNumber();
      lastOperation.current = Operator.subtract;
    },
    add: () => {
      setLastNumber();
      lastOperation.current = Operator.add;
    },
  }

  const calculateSubResult = (): number => {
    const [first, operation, second] = formula.split(' ');
    const firstNumber = Number(first);
    const secondNumber = Number(second);

    if (isNaN(secondNumber)) return firstNumber;

    switch (operation) {
      case Operator.add:
        return firstNumber + secondNumber;
      case Operator.multiply:
        return firstNumber * secondNumber;
      case Operator.divide:
        return firstNumber / secondNumber;
      case Operator.subtract:
        return firstNumber - secondNumber;
      default:
        throw new Error('Operation is not implemented');
    }
  }

  const calculateResult = () => {
    const result = calculateSubResult();
    isNaN(result) ? setFormula('0') : setFormula(`${result}`);
    lastOperation.current = undefined;
    setPrevNumber('0')
  }

  const buildNumber = (numberStringify: string) => {
    if (number.includes('.') && numberStringify === '.') return;

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (numberStringify === '.') return setNumber(x => x + numberStringify);
      if (numberStringify === '0' && number.includes('.')) return setNumber(x => x + numberStringify);
      if (numberStringify !== '0' && !number.includes('.')) {
        if (!number.includes('-')) return setNumber(numberStringify);
        return setNumber('-' + numberStringify)
      }
      if (numberStringify === '0' && !number.includes('.')) return;
    }

    return setNumber(x => x + numberStringify);
  }

  return {
    formula,
    number,
    prevNumber,
    buildNumber,
    cleanNumber,
    toggleSign,
    deleteLastNumber,
    operations,
    calculateSubResult,
    calculateResult
  }
}
