export type UserDetailsProviderProps = {
  name?: string;
  email?: string | null | undefined;
  birth?: string;
  phone?: string;
  address: string | string[] | undefined;
  occupation?: string;
  rate?: number;
  servicesDescription?: string;
  description?: string;
  providerEmail?: string;
};
export type RatingProps = {
  stars: number;
};
