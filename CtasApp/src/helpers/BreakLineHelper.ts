export const BreakLine = (str: string|undefined, maxLength: number): string[] => {
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
}