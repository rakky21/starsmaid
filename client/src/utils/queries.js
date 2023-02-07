import { gql } from "@apollo/client";

export const QUERY_APPOINTMENTS = gql`
  query ListaCitas {
    listaUsers {
      scheduledAppointments {
        username
        appointmentDate
        scheduleOn
      }
    }
  }
`;

export const QUERY_APPOINTMENT = gql`
  query appointment($id: ID!) {
    appointment(_id: $id) {
      id
      appointmentText
      scheduleOn
      username
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      id
      username
      email
      appointments {
        id
        appoitnmentText
        scheduleOn
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      id
      username
      email
      appointments {
        id
        appointmentText
        scheduleOn
      }
    }
  }
`;

export const QUERY_USERS = gql`
  query getUsers {
    listaUsers {
      username
      email
      phone
      scheduledAppointments {
        appointmentDate
        username
      }
    }
  }
`;
