// user-seeder.js

// const bcrypt = require('bcrypt');
const { User } = require('../models/index');

const users = [
  {
    username: 'john_doe',
    name: 'John',
    surname: 'Doe',
  },
  {
    username: 'jane_smith',
    name: 'Jane',
    surname: 'Smith',
  },
];

async function seedUsers() {
  await User.bulkCreate(users);
}

seedUsers()
  .then(() => {
    console.log('Users seeded successfully');
  })
  .catch((err) => {
    console.error('Error seeding users:', err);
  });
