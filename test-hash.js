const bcrypt = require('bcryptjs');

const password = 'bye00bye'; // The password entered by the user
const storedHash = '$2b$10$sZ/t364FRl4iC2VGRtImBez9zagJJ4C2yg1tfbAF8dTDruvGJfUbi'; // The stored hash

bcrypt.compare(password, storedHash, (err, result) => {
  if (err) {
    console.error('Error comparing password:', err);
  } else {
    console.log('Password Match Result:', result); // Should print true if passwords match
  }
});
