import { call, put } from "redux-saga/effects";
import {
  requestAuthFetchMe,
  requestAuthLogin,
  requestAuthRefreshToken,
  requestAuthRegister,
} from "./auth-request";
import { toast } from "react-toastify";
import { logOut, saveToken } from "utils/auth";
import { authUpdateUser } from "./auth-slice";

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
    // accessToken, refreshToken
    if (response.data.accessToken && response.data.refreshToken) {
      saveToken(response.data.accessToken, response.data.refreshToken);
      yield call(handleAuthFetchMe, { payload: response.data.accessToken });
    }
    yield 1;
  } catch (error) {
    const response = error.response.data;
    if (response.statusCode === 403) {
      toast.error(response.error.message);
      return;
    }
  }
}

function* handleAuthFetchMe({ payload }) {
  try {
    const response = yield call(requestAuthFetchMe, payload);
    console.log("🚀 ~ function*handleAuthFetchMe ~ response:", response);
    if (response.status === 200) {
      yield put(
        authUpdateUser({
          user: response.data,
          accessToken: payload,
        })
      );
    }
    // response.data -> userInfo
  } catch (error) {}
}
function* handleAuthRefreshToken({ payload }) {
  try {
    const response = yield call(requestAuthRefreshToken, payload);
    if (response.data) {
      saveToken(response.data.accessToken, response.data.refreshToken);
      yield handleAuthFetchMe({
        payload: response.data.accessToken,
      });
    } else {
      //Logout
      yield handleAuthLogOut();
    }
  } catch (error) {}
}
function* handleAuthLogOut() {
  yield put(
    authUpdateUser({
      user: undefined,
      accessToken: null,
    })
  );
  logOut();
}
export {
  handleAuthLogin,
  handleAuthFetchMe,
  handleAuthRefreshToken,
  handleAuthLogOut,
};
