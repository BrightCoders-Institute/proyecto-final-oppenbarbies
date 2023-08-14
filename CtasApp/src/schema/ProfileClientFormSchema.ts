export interface InputFieldProps {
  label?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  errorMessage?: string;
  editable?: boolean;
  styleVariant?: 'default' | 'secondary';
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
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
