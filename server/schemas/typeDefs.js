const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    appointments: [Appointment]
  }

  type Appointment {
    _id: ID
    appointmentText: String
    createdAt: String
    username: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    appointments(username: String): [Appointment]
    appointment(_id: ID!): Appointment
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addAppointment(appointmentText: String!): Appointment
  }
`;

module.exports = typeDefs;
