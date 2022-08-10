import { currencyList } from 'config';
import { GlobalSettingsQueryResponse } from 'types/takeshape';

export function getGlobalSettings(response: GlobalSettingsQueryResponse) {
  const globalSettings = response?.globalSettings;

  if (!globalSettings) {
    return null;
  }

  return { ...globalSettings, currencies: [...currencyList] };
}
