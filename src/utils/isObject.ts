export const isObject = (value: any) => {
  return value !== null && typeof value === 'object' &&  !Array.isArray(value);
};
