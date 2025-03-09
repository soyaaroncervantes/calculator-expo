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
    setFormula(number);
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
    if (number.length === 1 ) return setNumber('0');
    if (number.length === 2 && number.includes('-')) return setNumber('0');
    const newNumber = number.split('').toSpliced(-1).join('');
    return setNumber(newNumber);
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
    deleteLastNumber
  }
}
