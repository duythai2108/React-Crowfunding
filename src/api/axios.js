const { default: axios } = require("axios");

export default axios.create({
  baseURL: "http://http://localhost:5000",
});
