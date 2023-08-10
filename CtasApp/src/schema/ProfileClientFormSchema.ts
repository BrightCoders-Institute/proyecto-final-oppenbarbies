export interface InputFieldProps {
  label: string;
  value?: string; 
  onChangeText: (text: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
  errorMessage?: string;
  editable?: boolean;
  styleVariant?: 'default' | 'secondary';
}
export type FormData = {
  name?: string;
  phone?: string;
  birthDate?: string;
  location?: string;
  address?: string[];
  occupation?: string;
  servicesDescription?: string; 
};
