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

#   type Mutation {
#     login(email:String!, password:String!): Auth
#     addUser(username:String!, email:String!, password:String!): Auth
#   }
# `;

module.exports = typeDefs;
