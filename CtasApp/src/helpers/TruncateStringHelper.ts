export const truncateString = (str: string | null | undefined, num: number): string | null | undefined  => {
  return str?.length > num ? str?.slice(0, num) + '...' : str;
};
