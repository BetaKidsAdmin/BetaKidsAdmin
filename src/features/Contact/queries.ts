import { gql } from '@apollo/client';

export const CreateTicketWithGorgiasMutation = gql`
  mutation {
    __typename
  }
`;

export const CreateTicketWithZendeskMutation = gql`
  mutation CreateTicketWithZendeskMutation(
    $name: String!
    $email: String!
    $message: String!
    $recaptchaToken: String
  ) {
    createTicket: Zendesk_createTicket(name: $name, email: $email, message: $message, recaptchaToken: $recaptchaToken) {
      id
    }
  }
`;
