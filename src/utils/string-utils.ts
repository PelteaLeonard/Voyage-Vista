export const getSplitElement = (
  str: string,
  delimiter: string,
  index: number
) => {
  const split = str.split(delimiter);

  if (index >= 0) {
    return split[index];
  }

  return split[split.length + index];
};
