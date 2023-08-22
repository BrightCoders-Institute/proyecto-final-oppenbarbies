export interface DescriptionInputProps {
  value: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  styleType?: 'profile' | 'description';
}
