const { default: axios } = require("api/axios");

export const requestAuthRegister = (data) => {
  console.log("🚀 ~ requestAuthRegister ~ data:", data);
  return axios.post("/auth/register", { ...data });
};
export const requestAuthLogin = (data) => {
  console.log("🚀 ~ requestAuthLogin ~ data:", data);
  return axios.post("/auth/login", { ...data });
};
export const requestAuthFetchMe = (token) => {
  console.log("🚀 ~ requestAuthFetchMe ~ token:", token);
  if (!token) return;
  return axios.get("/me", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const requestAuthRefreshToken = (token) => {
  if (!token) return;
  return axios.post("/token", {
    "Content-Type": "Application/Json",
    refreshToken: token,
  });
};
