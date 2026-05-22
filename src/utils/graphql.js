import { gql } from '@apollo/client';

/* ── QUERIES ── */

export const GET_ME = gql`
  query Me {
    me {
      id
      name
      lastName
      email
      phone
      role
      createdAt
    }
  }
`;

export const GET_MY_APPOINTMENTS = gql`
  query MyAppointments {
    myAppointments {
      id
      date
      time
      service
      status
      confirmation
      notes
      technician
      createdAt
      user {
        id
        name
        lastName
        email
      }
    }
  }
`;

export const GET_APPOINTMENT = gql`
  query GetAppointment($id: ID!) {
    appointment(id: $id) {
      id
      date
      time
      service
      status
      confirmation
      notes
      technician
      createdAt
      user {
        id
        name
        lastName
        email
      }
    }
  }
`;

export const GET_BOOKED_TIMES = gql`
  query BookedTimes($date: String!) {
    bookedTimes(date: $date)
  }
`;

/* Admin queries */
export const GET_ALL_APPOINTMENTS = gql`
  query AllAppointments {
    allAppointments {
      id
      date
      time
      service
      status
      confirmation
      technician
      createdAt
      user {
        id
        name
        lastName
        email
      }
    }
  }
`;

export const GET_ALL_USERS = gql`
  query AllUsers {
    allUsers {
      id
      name
      lastName
      email
      phone
      role
      createdAt
    }
  }
`;

/* ── MUTATIONS ── */
export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        name
        lastName
        email
        role
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser(
    $name: String!
    $lastName: String!
    $email: String!
    $password: String!
    $phone: String
  ) {
    createUser(
      name: $name
      lastName: $lastName
      email: $email
      password: $password
      phone: $phone
    ) {
      token
      user {
        id
        name
        lastName
        email
        role
      }
    }
  }
`;

export const CREATE_APPOINTMENT = gql`
  mutation CreateAppointment($date: String!, $time: String!, $service: String!, $notes: String) {
    createAppointment(date: $date, time: $time, service: $service, notes: $notes) {
      id
      date
      time
      service
      status
      confirmation
      notes
      technician
      createdAt
    }
  }
`;

export const CANCEL_APPOINTMENT = gql`
  mutation CancelAppointment($id: ID!) {
    cancelAppointment(id: $id) {
      id
      status
    }
  }
`;

export const UPDATE_APPOINTMENT_STATUS = gql`
  mutation UpdateAppointmentStatus($id: ID!, $status: String!) {
    updateAppointmentStatus(id: $id, status: $status) {
      id
      status
      technician
      confirmation
      createdAt
    }
  }
`;

export default {
  GET_ME,
  GET_MY_APPOINTMENTS, GET_APPOINTMENT, GET_BOOKED_TIMES, GET_ALL_APPOINTMENTS, GET_ALL_USERS,
  LOGIN, CREATE_USER, CREATE_APPOINTMENT, CANCEL_APPOINTMENT, UPDATE_APPOINTMENT_STATUS
};