export interface ButtonProps {
  text: string;
  onPress: () => void;
  styleName?: 'default' | 'welcome' | 'Big';
}

export interface ButtonPropsWithTextStyle extends ButtonProps {
  textStyleName?: 'default' | 'welcome' | 'Big' | 'slots';
}
