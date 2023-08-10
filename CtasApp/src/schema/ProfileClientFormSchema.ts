export interface InputFieldProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
  errorMessage?: string;
  editable?: boolean;
}
export type FormData = {
  name: string;
  phone: string;
  birthDate: string;
  location: string;
};
