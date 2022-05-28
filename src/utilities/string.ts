export const replaceAt = (str: string, index: number, char: string): string => {
  return str.slice(0, index) + char + str.slice(index + 1);
};
