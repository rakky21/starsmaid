const { gql } = require("apollo-server");

const resolvers = {
  Query: {
    appointment: (_, { id }, { db }) => {
      return db.appointmentAPI.getAppointment(id);
    },
    listaUsers: (_, userId, { db }) => {
      return db.listaUsers.getListaUsers(userId);
    },
  },

  User: {
    scheduledAppointments: ({ appointmentId }, _, { db }) => {
      return db.UserAPI.getAppointment(appointmentId);
    },
  },
  Appointment: {
    username: ({ userId }, _, { db }) => {
      return db.AppointmentAPI.getAppointment(userId);
    },
    appointmentDate: ({ id }, _, { db }) => {
      return db.AppointmentAPI.appointmentDate(id);
    },
    scheduleOn: ({ id }, _, { db }) => {
      return db.appointmentAPI.scheduleOn(id);
    },
  },
};

module.export = resolvers;
