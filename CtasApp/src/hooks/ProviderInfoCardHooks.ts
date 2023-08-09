export const ProviderInfoCardHooks = () => {
  function formatDescription(description: string): string {
    const maxLength: number = 86;
    if (description.length <= maxLength) {
      return description;
    } else {
      const words = description.split(' ');
      let truncatedDescription = '';
      let currentLength = 0;
      for (const word of words) {
        if (
          currentLength + word.length + (currentLength > 0 ? 1 : 0) <=
          maxLength
        ) {
          if (currentLength > 0) {
            truncatedDescription += ' ';
          }
          truncatedDescription += word;
          currentLength += word.length + (currentLength > 0 ? 1 : 0);
        } else {
          break;
        }
      }
      return truncatedDescription + '...';
    }
  }

  return {
    formatDescription,
  };
};
