export function camelCaseToTitleCase(camelCaseStr: string): string {
  // Use a regular expression to find where the capital letters are and split the string
  const words = camelCaseStr.replace(/([A-Z])/g, " $1");
  // Capitalize the first letter of each word and join them with spaces
  const titleCaseStr = words.replace(/^./, (str) => str.toUpperCase()).trim();
  return titleCaseStr;
}
