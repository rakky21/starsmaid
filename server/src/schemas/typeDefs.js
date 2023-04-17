const { gql } = require("apollo-server");

const typeDefs = `#graphql

  type Query {
    listaUsers: [User]
    scheduledAppointments:[Appointment]
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
    scheduledOn: String!
  }
# `;

module.exports = typeDefs;
