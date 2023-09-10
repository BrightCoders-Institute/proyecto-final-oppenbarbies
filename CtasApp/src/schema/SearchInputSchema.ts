import { Dispatch, SetStateAction } from "react";
import {Provider} from '../schema/ProviderSchema';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import { RootStackParamList } from "./SignInScreenSchema";
type ProviderWithKey = Provider & {key: string};
export type SearchInputProps = {
  search: string,
  setSearch: Dispatch<SetStateAction<string>>,
  providers: ProviderWithKey[],
  setFilteredProviders: Dispatch<SetStateAction<ProviderWithKey[]>>,
  navigation: any,
}

export type SearchScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'SearchScreen'
>;
