const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./src/schemas/");
const path = require("path");

const mocks = {
  Query: () => ({
    listaUsers: () => [...new Array(3)],
  }),
  User: () => ({
    username: "Patrick",
    id: 21,
    email: "e@e.com",
    phone: "333",
    scheduledAppointments: () => {
      return {
        appointmentDate: "2/21/2023",
        scheduledOn: "1/25/2023",
        username: "Patrick",
      };
    },
  }),
};

const server = new ApolloServer({
  typeDefs,
  mocks: true,
});

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at http://localhost:4000
  `);
});
