const bcrypt = require('bcryptjs');
exports.users = [
  {
    name: 'Ibrahim',
    email: 'ibra@ham.com',
    password: bcrypt.hashSync('ibra2571', 12),
    isAdmin: true,
  },
  {
    name: 'Zahara',
    email: 'zaha@ra.com',
    password: bcrypt.hashSync('ibra2571', 12),
  },
];
