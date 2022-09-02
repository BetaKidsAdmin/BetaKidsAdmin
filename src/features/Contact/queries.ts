import { gql } from '@apollo/client';

export const CreateTicketMutation = gql`
  mutation {
    __typename
  }
`;

export const CreateZendeskTicketMutation = gql`
  mutation CreateZendeskTicketMutation($name: String!, $email: String!, $message: String!, $recaptchaToken: String!) {
    createZendeskTicket(name: $name, email: $email, message: $message, recaptchaToken: $recaptchaToken) {
      id
    }
  }
`;
