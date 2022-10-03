export const quotient = (number: number, dividing: number) => {
  return Math.floor(number / dividing);
};

export const fillZero = (number: number, digit = 2) => {
  let zero = "";
  for (let i = 0; i < digit - ("" + number).length; i++) {
    zero += "0";
  }
  return `${zero}${number}`;
};
