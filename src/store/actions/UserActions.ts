import * as SecureStore from 'expo-secure-store';

export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const STORE_USER = 'STORE_USER';
export const LOGOUT = 'LOGOUT';
export const REQUEST_RESET_PASSWORD = 'REQUEST_RESET_PASSWORD';
export const ADD_USER_INFO = 'ADD_USER_INFO';

interface IUserInfo {
  firstName: string;
  lastName: string;
  email: string;
}

export const login = (email: string, password: string) => {
  return async (dispatch: Function) => {
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDdsi0I77Ql6s-It6k6ozVsBnr_sJzjNy4', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
      await SecureStore.setItemAsync('email', data.email);
      await SecureStore.setItemAsync('idToken', data.idToken);
      dispatch({ type: LOGIN, payload: { email: data.email, idToken: data.idToken, userId: data.localId } });
    }
  };
};

export const signup = (email: string, password: string) => {
  return async (dispatch: Function) => {
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDdsi0I77Ql6s-It6k6ozVsBnr_sJzjNy4', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true,
      }),
    });

    const data = await response.json(); // json to javascript
    if (!response.ok) {
      //There was a problem.
    } else {
      await SecureStore.setItemAsync('email', data.email);
      await SecureStore.setItemAsync('idToken', data.idToken);
      dispatch({ type: SIGNUP, payload: { email: data.email, idToken: data.idToken, userId: data.localId } });
    }
  };
};

export const logout = () => {
  return async (dispatch: Function) => {
    console.log('logout');
    await SecureStore.deleteItemAsync('email');
    await SecureStore.deleteItemAsync('idToken');
    dispatch({ type: LOGOUT });
  };
};

export const storeUser = (email: string, token: string) => {
  return { type: STORE_USER, payload: { email: email, idToken: token } };
};

export const requestResetPassword = (email: string) => {
  return async (dispatch: Function) => {
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDdsi0I77Ql6s-It6k6ozVsBnr_sJzjNy4', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        requestType: 'PASSWORD_RESET',
      }),
    });
    const data = await response.json(); // json to javascript
    console.log('reset password data bbblldlfdl', data.email);
    if (!response.ok) {
      //There was a problem.
      console.log('reset not ok');
    } else {
      // await SecureStore.getItemAsync('email', data.email);
      console.log('an email was sent to your email');
      dispatch({ type: REQUEST_RESET_PASSWORD, payload: { email: data.email } });
    }
  };
};

export const addUserInfo = (firstName: string, lastName: string, email: string, userId: string) => {
  return async (dispatch: any, getState: any) => {
    const idToken = getState().user.idToken;

    // const getResponse = await fetch('https://cbs-app-40f0b-default-rtdb.europe-west1.firebasedatabase.app/user-info.json?auth=' + idToken, {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: '',
    // });

    // const existingData = await getResponse.json(); // json to javascript

    // if (!getResponse.ok) {
    //   //There was a problem..
    //   console.log('Something went wrong');
    //   return;
    // } else {
    //   console.log(existingData, 'EXISTING DATA');

    //   existingData.forEach((user:IUserInfo) => {
    //     if (user.email = email) {

    //     }
    //   });
    // }
    console.log(userId, 'user IDDDDDDDD');
    const response = await fetch(`https://cbs-app-40f0b-default-rtdb.europe-west1.firebasedatabase.app/user-info/${userId}.json?auth=${idToken}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
      }),
    });

    const data = await response.json(); // json to javascript
    console.log(data, 'response data');
    if (!response.ok) {
      console.log('fail');
      //There was a problem..
    } else {
      dispatch({ type: ADD_USER_INFO, payload: { firstName, lastName, email } });
    }
  };
};
