const User = require("../models/userModel");

// populate collection w data from api
// async await not needed here
const createUsers = (data) => {
  data.map((user) => {
    const newUser = new User({
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      address: {
        street: user.address.street,
        suite: user.address.suite,
        city: user.address.city,
        zipcode: user.address.zipcode,
        geo: {
          lat: user.address.geo.lat,
          lng: user.address.geo.lng,
        },
      },
      phone: user.phone,
      website: user.website,
      company: {
        name: user.company.name,
        catchPhrase: user.company.catchPhrase,
        bs: user.company.bs,
      },
    });
    newUser.save((err) => {
      if (err) return console.log(err);
    });
  });
};

const queryAllUsers = async (req, res) => {
  // try chaining them together!
  const paramAll = req.query.all;
  const paramLimit = req.query.limit;
  const paramOrder = req.query.order_by;
  const paramName = req.query.name;

  if (paramAll === "true") {
    const query = await User.find();
    return res.status(200).json(query);
  }
  if (paramLimit > 0) {
    const query = await User.find().limit(paramLimit);
    return res.status(200).json(query);
  }
  if (paramOrder) {
    const query = await User.find({}, paramOrder).sort({ [paramOrder]: "asc" });
    return res.status(200).json(query);
  }
  if (paramName) {
    // g = all, i = case insensitive
    const regexp = new RegExp(`${paramName}`, "gi");
    const query = await User.find({ name: regexp });
    return res.status(200).json(query);
  }

  const query = await User.find({}, "name");
  res.status(200).json(query);
};

const queryUsersById = async (req, res) => {
  const id = req.params.id;
  const query = await User.findOne({ id: id });
  res.status(200).json(query);
};

const queryUsersByUsername = async (req, res) => {
  const username = req.params.username;
  const regexp = new RegExp(`^${username}`, "gi"); // "^" means starts with
  const query = await User.find({ username: regexp });
  res.status(200).json(query);
};

exports.createUsers = createUsers;
exports.queryAllUsers = queryAllUsers;
exports.queryUsersById = queryUsersById;
exports.queryUsersByUsername = queryUsersByUsername;
