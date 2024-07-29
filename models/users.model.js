const { v4: uuid4 } = require("uuid");

const users = [
  {
    id: uuid4(),
    username: "Azizul hakim",
    email: "azizulhakim4@gmail.com",
  },
  {
    id: uuid4(),
    username: "Shayan",
    email: "shayamn344@ahoo.com",
  },
];

module.exports = users;
