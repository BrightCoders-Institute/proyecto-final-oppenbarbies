import {Provider} from '../schema/ProviderSchema';
type ProviderWithKey = Provider & {key: string};
export interface ProvidersListProps {
  providers: ProviderWithKey[],
  navigation: boolean
}