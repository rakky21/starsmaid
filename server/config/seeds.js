const db = require('./connection');
const { User, Appointment } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Food' },
    { name: 'Household Supplies' },
    { name: 'Electronics' },
    { name: 'Books' },
    { name: 'Toys' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Tin of Cookies',
      description:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: 'cookie-tin.jpg',
      category: categories[0]._id,
      price: 2.99,
      quantity: 500
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});



// const faker = require('faker');

// const db = require('../config/connection');
// const { User, Appointment } = require('../models');

// db.once('open', async () => {
//   await Appointment.deleteMany({});
//   await User.deleteMany({});

//   // create user data
//   const userData = [];

//   for (let i = 0; i < 50; i += 1) {
//     const username = faker.internet.userName();
//     const email = faker.internet.email(username);
//     const password = faker.internet.password();

//     userData.push({ username, email, password });
//   }

//   const createdUsers = await User.collection.insertMany(userData);
  
//   // create appointments
//   let createdAppointments = [];
//   for (let i = 0; i < 100; i += 1) {
//     const appointmentText = faker.lorem.words(Math.round(Math.random() * 20) + 1);

//     const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
//     const { username, _id: userId } = createdUsers.ops[randomUserIndex];

//     const createdAppointment = await Appointment.create({ appointmentText, username });

//     const updatedUser = await User.updateOne(
//       { _id: userId },
//       { $push: { appointment: createdAppointment._id } }
//     );

//     createdAppointments.push(createdAppointment);
//   }

//   console.log('all done!');
//   process.exit(0);
// });
