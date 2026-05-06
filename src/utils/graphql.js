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
      address
      role
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
      technician
    }
  }
`;

export const GET_BOOKED_TIMES = gql`
  query BookedTimes($date: String!) {
    bookedTimes(date: $date)
  }
`;

/* ── MUTATIONS ── */
export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        name
        email
      }
    }
  }
`;
export const CREATE_USER = gql`
  mutation createUser(
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
        email
      }
    }
  }
`;
export const UPDATE_PROFILE = gql`
  mutation updateProfile(
    $name: String
    $lastName: String
    $email: String
    $phone: String
    $address: String
  ) {
    updateProfile(
      name: $name
      lastName: $lastName
      email: $email
      phone: $phone
      address: $address
    ) {
      token
      user {
        id
        name
        lastName
        email
        phone
        address
        role
      }
    }
  }
`;

export const CREATE_APPOINTMENT = gql`
  mutation createAppointment(
    $date: String!
    $time: String!
    $service: String!
    $notes: String
  ) {
    createAppointment(
      date: $date
      time: $time
      service: $service
      notes: $notes
    ) {
      id
      service
      date
      time
      status
      confirmation
    }
  }
`;
export const CANCEL_APPOINTMENT = gql`
  mutation cancelAppointment($id: ID!) {
    cancelAppointment(id: $id) {
      id
      status
    }
  }
`;

export async function gqlRequest(query, variables = {}) {
  const token = localStorage.getItem("id_token");

  const apiUrl = import.meta.env.VITE_API_URL || 'https://server-m9ab.onrender.com/graphql';
  const res = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: token ? `Bearer ${token}` : "",
    },
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();

  if (json.errors) {
    throw new Error(json.errors[0].message);
  }

  return json.data;
}