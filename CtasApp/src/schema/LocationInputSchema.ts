export interface AutocompleteProps {
  onSelected: (item: string) => void;
  value?: string;
  errorMessage?: string;
}
