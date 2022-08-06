'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let result = 0;
  for (let i = 0; i < num.length; i++) {
    result += num[i] * (Math.pow(2, num.length - 1 - i));
  }
  return result;
}

const BinarioADecimal2 = (num) => {
  let arr = num.split('');
  let decimal = arr.reduce((acc, ele, index) => {
    return acc + Number(ele) * Math.pow(2, (num.length - 1 - index));
  },0)
  return decimal;
}

const DecimalABinario = (num) => {
  // tu codigo aca
  let acc = num;
  let binary = '';
  while(acc > 0){
    let residuo = acc % 2;
    binary += residuo;
    acc = Math.floor(acc / 2);
  }
  return binary.split('').reverse().join('');
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}