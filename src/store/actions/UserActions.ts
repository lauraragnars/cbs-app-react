import * as SecureStore from 'expo-secure-store'

export const SIGNUP = 'SIGNUP'
export const LOGIN = 'LOGIN'
export const STORE_USER = 'STORE_USER'
export const STORE_USER_INFO = 'STORE_USER_INFO'
export const LOGOUT = 'LOGOUT'
export const REQUEST_RESET_PASSWORD = 'REQUEST_RESET_PASSWORD'
export const ADD_USER_INFO = 'ADD_USER_INFO'

export const login = (email: string, password: string) => {
  return async (dispatch: Function) => {
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDdsi0I77Ql6s-It6k6ozVsBnr_sJzjNy4', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true
      })
    })

    const data = await response.json() // json to javascript
    console.log(data)
    if (!response.ok) {
      // There was a problem.
    } else {
      const userInfoResponse = await fetch(`https://cbs-app-40f0b-default-rtdb.europe-west1.firebasedatabase.app/user-info/${data.localId}.json?auth=${data.idToken}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        body: ''
      })

      const userInfoData = await userInfoResponse.json()
      if (!userInfoResponse.ok) {
        console.log('unable to fetch user data')
      } else {
        await SecureStore.setItemAsync('firstName', userInfoData.firstName)
        await SecureStore.setItemAsync('lastName', userInfoData.firstName)
      }

      await SecureStore.setItemAsync('email', data.email)
      await SecureStore.setItemAsync('idToken', data.idToken)
      await SecureStore.setItemAsync('userId', data.localId)

      dispatch({ type: LOGIN, payload: { email: data.email, idToken: data.idToken, userId: data.localId, firstName: userInfoData.firstName, lastName: userInfoData.lastName } })
    }
  }
}

export const signup = (email: string, password: string) => {
  return async (dispatch: Function) => {
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDdsi0I77Ql6s-It6k6ozVsBnr_sJzjNy4', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true
      })
    })

    const data = await response.json() // json to javascript
    console.log(data, 'signup')
    if (!response.ok) {
      // There was a problem.
    } else {
      await SecureStore.setItemAsync('email', data.email)
      await SecureStore.setItemAsync('idToken', data.idToken)
      await SecureStore.setItemAsync('userId', data.localId)
      dispatch({ type: SIGNUP, payload: { email: data.email, idToken: data.idToken, userId: data.localId } })
    }
  }
}

export const logout = () => {
  return async (dispatch: Function) => {
    console.log('logout')
    await SecureStore.deleteItemAsync('email')
    await SecureStore.deleteItemAsync('idToken')
    await SecureStore.deleteItemAsync('userId')
    await SecureStore.deleteItemAsync('firstName')
    await SecureStore.deleteItemAsync('lastName')
    dispatch({ type: LOGOUT })
  }
}

export const storeUser = (email: string, token: string, userId: string) => {
  return { type: STORE_USER, payload: { email, idToken: token, userId } }
}

export const storeUserInfo = (firstName: string, lastName: string) => {
  return { type: STORE_USER_INFO, payload: { firstName, lastName } }
}

export const requestResetPassword = (email: string) => {
  return async (dispatch: Function) => {
    const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDdsi0I77Ql6s-It6k6ozVsBnr_sJzjNy4', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        requestType: 'PASSWORD_RESET'
      })
    })
    const data = await response.json() // json to javascript
    console.log('reset password data bbblldlfdl', data.email)
    if (!response.ok) {
      // There was a problem.
      console.log('reset not ok')
    } else {
      await SecureStore.getItemAsync('email', data.email)
      console.log('an email was sent to your email')
      dispatch({ type: REQUEST_RESET_PASSWORD, payload: { email: data.email } })
    }
  }
}

export const addUserInfo = (firstName: string, lastName: string, email: string, userId: string) => {
  return async (dispatch: any, getState: any) => {
    const idToken = getState().user.idToken

    const response = await fetch(`https://cbs-app-40f0b-default-rtdb.europe-west1.firebasedatabase.app/user-info/${userId}.json?auth=${idToken}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email
      })
    })

    const data = await response.json() // json to javascript

    if (!response.ok) {
      console.log(data)
    } else {
      await SecureStore.setItemAsync('firstName', firstName)
      await SecureStore.setItemAsync('lastName', lastName)
      dispatch({ type: ADD_USER_INFO, payload: { firstName, lastName, email } })
    }
  }
}
