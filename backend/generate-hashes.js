const bcrypt = require('bcrypt');

async function generateHashes() {
  const users = [
    { username: 'sarahj', password: 'sarah123' },
    { username: 'michaelc', password: 'michael456' },
    { username: 'priyas', password: 'priya789' },
    { username: 'johns', password: 'john123' },
    { username: 'emmaw', password: 'emma456' }
  ];

  for (const user of users) {
    const hashed = await bcrypt.hash(user.password, 10);
    console.log(`${user.username}: ${user.password} => ${hashed}`);
  }
}

generateHashes();