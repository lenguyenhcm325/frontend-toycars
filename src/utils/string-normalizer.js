export const stringNormalizer = (inputString) => {
  let regex = /\s/g;
  let replaceChar = "";
  return inputString.replace(regex, replaceChar).toLowerCase();
};
