import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_APPOINTMENT = gql`
  mutation addAppointment($appointmentText: String!) {
    addAppointment(appointmentText: $appointmentText) {
      _id
      appointmentText
      createdAt
      username
    }
  }
`;

export const REMOVE_APPOINTMENT = gql`
  mutation removeAppointment($id: ID!) {
    removeAppointment(id: $id) {
      _id
      username
      appointments {
        _id
        username
      }
    }
  }
`;
