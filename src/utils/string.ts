export const capitalize = (str: string) => {
  const firstChar = str.charAt(0).toUpperCase();
  const rest = str.slice(1).toLowerCase();

  return firstChar + rest;
};
