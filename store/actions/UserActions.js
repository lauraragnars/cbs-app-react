export const SIGNUP = "SIGNUP";

export const signup = (email, password) => {
  return async (dispatch) => {
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
      dispatch({ type: SIGNUP, payload: { email: data.email, idToken: data.idToken } });
    }
  };
};
