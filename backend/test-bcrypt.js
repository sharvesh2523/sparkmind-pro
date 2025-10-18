const bcrypt = require('bcrypt');

async function test() {
  const password = 'sarah123';
  const hashed = await bcrypt.hash(password, 10);
  console.log('Hashed password:', hashed);
  
  const valid = await bcrypt.compare(password, hashed);
  console.log('Password valid:', valid);
  
  // Test with existing hash
  const existingHash = '$2b$10$rOzJqQZ8QxN9QyH2aF5p2uPEaF5p2uPEaF5p2uPEaF5p2uPEaF5p2';
  const validExisting = await bcrypt.compare(password, existingHash);
  console.log('Existing hash valid:', validExisting);
}

test();