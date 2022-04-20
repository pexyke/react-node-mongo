const http = require("axios");

const getData = async () => {
  const response = await http.get("https://jsonplaceholder.typicode.com/users");
  const userData = response.data;

  return userData;
};

module.exports = getData;
