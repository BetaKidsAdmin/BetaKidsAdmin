import { gql } from '@apollo/client';

export const GlobalSettingsQuery = gql`
  query GlobalSettingsQuery {
    globalSettings: getGlobalSettings {
      footer {
        info {
          descriptionHtml
          heading
        }
        navigation {
          sections {
            links {
              name
              url
            }
            title
          }
        }
      }
      header {
        navigation {
          links {
            name
            url
          }
        }
      }
    }
  }
`;
