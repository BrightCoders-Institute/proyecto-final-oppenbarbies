export const ProviderInfoCardHooks = () => {
  function formatDescription(description: string | undefined): string | undefined{
    if (description == null){
      return '';
    }
    const maxLength: number = 86;
    if (description.length <= maxLength) {
      return description;
    }

    let truncatedDescription = description?.slice(0, maxLength);
    const lastSpaceIndex = truncatedDescription?.lastIndexOf(' ');

    if (lastSpaceIndex !== -1) {
      truncatedDescription = truncatedDescription?.slice(0, lastSpaceIndex);
    }

    return truncatedDescription + '...';
  }

  return {
    formatDescription,
  };
};
