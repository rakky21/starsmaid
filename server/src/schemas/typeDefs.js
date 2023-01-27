const { gql } = require("apollo-server");

const typeDefs = `#graphql

  type Query {
    listaUsers: [User]
  }

  type User {
    id: ID!
    username: String!
    email: String!
    phone: String
    scheduledAppointments: [Appointment]
  }

  type Appointment {
    id: ID!
    username: String!
    appointmentDate: String!
    createdAt: String!
  }
`;

module.exports = typeDefs;
 