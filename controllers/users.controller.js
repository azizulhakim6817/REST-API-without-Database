let users = require("../models/users.model");

const { v4: uuidv4 } = require("uuid");

//get users
const getAllUser = (req, res) => {
  res.status(200).json({ users });
};

//create users
const createUser = (req, res) => {
  const newUser = {
    id: uuidv4(),
    username: req.body.username,
    eamil: req.body.email,
  };

  users.push(newUser);
  res.status(200).json({ users });
};
//update usrer change data
const updateUsser = (req, res) => {
  const userid = req.params.id;
  const { username, email } = req.body;
  users
    .filter((user) => user.id === userid)
    .map((selecteduser) => {
      selecteduser.username = username;
      selecteduser.eamil = email;
    });
  res.status(201).json({ users });
};

//delete users
const deleteUser = (req, res) => {
  const userid = req.params.id;
  users = users.filter((user) => user.id !== userid);

  res.status(201).json({ users });
};

module.exports = { getAllUser, createUser, updateUsser, deleteUser };
