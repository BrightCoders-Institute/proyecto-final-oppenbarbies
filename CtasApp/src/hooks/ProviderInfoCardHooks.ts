export const ProviderInfoCardHooks = () => {
  function formatDescription(description: string): string {
    const maxLength: number = 90;
    if (description.length <= maxLength) {
      return description;
    } else {
      const words = description.split(' ');
      let truncatedDescription = '';
      let currentLength = 0;
      for (const word of words) {
        if (currentLength + word.length + 1 <= maxLength) {
          truncatedDescription += word + ' ';
          currentLength += word.length + 1;
        } else {
          break;
        }
      }
      return truncatedDescription.trim() + '...';
    }
  }

  return {
    formatDescription,
  };
};
