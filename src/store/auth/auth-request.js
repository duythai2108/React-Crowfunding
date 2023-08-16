const { default: axios } = require("api/axios");

export const requestAuthRegister = (data) => {
  console.log("🚀 ~ requestAuthRegister ~ data:", data);
  return axios.post("/auth/register", {
    data,
  });
};
