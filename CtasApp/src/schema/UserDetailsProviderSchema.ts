export type UserDetailsProviderProps = {
  name?: string;
  email?: string |null | undefined;
  birth?: string;
  phone?: string;
  address: string | string[] | undefined;
  occupation?: string;
  ratting?: number;
  servicesDescription?: string;
  description?: string;
};
export type RatingProps = {
  stars: number;
};
