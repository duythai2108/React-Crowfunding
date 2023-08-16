import { call } from "redux-saga/effects";
import { requestAuthLogin, requestAuthRegister } from "./auth-request";
import { toast } from "react-toastify";
import { saveToken } from "utils/auth";

export default function* handleAuthRegister(action) {
  const { payload } = action;
  try {
    const response = yield call(requestAuthRegister, payload);
    if (response.status === 201) {
      toast.success("Created new account successfully!");
    }
  } catch (error) {
    console.log("🚀 ~ function*handleAuthRegister ~ error:", error);
  }
}

function* handleAuthLogin({ payload }) {
  try {
    const response = yield call(requestAuthLogin, payload);
    console.log("🚀 ~ function*handleAuthLogin ~ response:", response);
    // accessToken, refreshToken
    if (response.data.accessToken && response.data.refreshToken) {
      saveToken(response.data.accessToken, response.data.refreshToken);
    }
    yield 1;
  } catch (error) {}
}
export { handleAuthLogin };
