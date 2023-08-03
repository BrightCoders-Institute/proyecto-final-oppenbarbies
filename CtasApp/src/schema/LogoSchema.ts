export type ImageKeys = 'logo' | 'logowithoutbackground';

export interface LogoProps {
  src?: string;
  styleType?: StyleType;
}
export type StyleType = 'logo' | 'logowb' | 'logoBanner';
