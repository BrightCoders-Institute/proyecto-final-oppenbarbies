export const BreakLine = (
  str: string | undefined | null,
  maxLength: number,
): string[] => {
  if (str == null) {
    return [''];
  }

  const lines: string[] = [];
  let currentLine = '';

  for (let i = 0; i < str.length; i++) {
    currentLine += str[i];

    if (currentLine.length === maxLength || i === str.length - 1) {
      lines.push(currentLine);
      currentLine = '';
    }
  }

  return lines;
};
