// eslint-disable-next-line import/prefer-default-export
export const toCamel = (s) => s.replace(/([-_][a-z])/ig, ($1) => $1.toUpperCase()
  .replace('-', '')
  .replace('_', ''));

export const changeKeysToCamelCase = (obj) => {
  const newObj = {};
  Object.entries(obj).forEach((item) => {
    [, newObj[toCamel(item[0])]] = item;
  });
  return newObj;
};
