export interface ButtonProps {
  text: string;
  onPress: () => void;
  styleName?: 'default' | 'welcome';
}

export interface ButtonPropsWithTextStyle extends ButtonProps {
  textStyleName?: 'default' | 'welcome';
}
