import * as SecureStore from "expo-secure-store";

export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";
export const STORE_USER = "STOR_EUSER";

export const login = (email: string, password: string) => {
  return async (dispatch: Function) => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDdsi0I77Ql6s-It6k6ozVsBnr_sJzjNy4",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    );

    const data = await response.json(); // json to javascript
    console.log(data);
    if (!response.ok) {
      //There was a problem.
    } else {
      await SecureStore.setItemAsync("email", data.email);
      await SecureStore.setItemAsync("idToken", data.idToken);
      dispatch({ type: LOGIN, payload: { email: data.email, idToken: data.idToken } });
    }
  };
};

export const signup = (email: string, password: string) => {
  return async (dispatch: Function) => {
    const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDdsi0I77Ql6s-It6k6ozVsBnr_sJzjNy4", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
    });

    const data = await response.json(); // json to javascript
    console.log(data);
    if (!response.ok) {
      //There was a problem.
    } else {
      await SecureStore.setItemAsync("email", data.email);
      await SecureStore.setItemAsync("idToken", data.idToken);
      dispatch({ type: SIGNUP, payload: { email: data.email, idToken: data.idToken } });
    }
  };
};

export const storeUser = (email: string, token: string) => {
  return { type: STORE_USER, payload: { email: email, idToken: token } };
};
