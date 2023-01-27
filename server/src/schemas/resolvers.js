const { gql } = require("apollo-server");

const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    appointment: (_, { id }, { db }) => {
      return db.appointmentAPI.getAppointment(id);
    },
  },
};

module.export = resolvers;
