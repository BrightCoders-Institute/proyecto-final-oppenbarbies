import { Dispatch, SetStateAction } from "react";
import {Provider} from '../schema/ProviderSchema';
type ProviderWithKey = Provider & {key: string};
export interface SearchInputProps {
  search: string,
  setSearch: Dispatch<SetStateAction<string>>,
  providers: ProviderWithKey[],
}
