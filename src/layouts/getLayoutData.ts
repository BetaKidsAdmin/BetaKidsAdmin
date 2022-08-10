import { GlobalSettingsQuery } from 'layouts/queries';
import { getGlobalSettings } from 'layouts/transform';
import { createAnonymousTakeshapeApolloClient } from 'utils/takeshape';

interface Cache {
  globalSettings?: any;
}

const cache: Cache = {};

const apolloClient = createAnonymousTakeshapeApolloClient();

export async function getLayoutData() {
  if (!cache.globalSettings) {
    const { data } = await apolloClient.query({
      query: GlobalSettingsQuery
    });
    cache.globalSettings = getGlobalSettings(data);
  }

  return cache;
}
