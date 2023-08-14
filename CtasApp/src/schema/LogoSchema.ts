export type ImageKeys = 'logo' | 'logoWithoutBackground';

export interface LogoProps {
  src?: string;
  styleType?: StyleType;
}
export type StyleType = 'logo' | 'logoWb' | 'logoBanner';
