export const quotient = (number: number, dividing: number) => {
  return Math.floor(number / dividing);
};

export const fillZero = (number: number) => {
  return number < 10 ? `0${number}` : `${number}`;
};
