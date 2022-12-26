import { gql } from '@apollo/client';

export const QUERY_APPOINTMENTS = gql`
  query appointments($username: String) {
    appointments(username: $username) {
      _id
      appointmentText
      createdAt
      username
    }
  }
`;

export const QUERY_APPOINTMENT = gql`
  query appointment($id: ID!) {
    appointment(_id: $id) {
      _id
      appointmentText
      createdAt
      username
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      appointments {
        _id
        appoitnmentText
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      appointments {
        _id
        appointmentText
        createdAt
      }
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;
