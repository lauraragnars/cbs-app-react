import { LOGIN, SIGNUP, STORE_USER, LOGOUT, REQUEST_RESET_PASSWORD, ADD_USER_INFO, STORE_USER_INFO, REFRESH_USER, SET_ERROR_MESSAGE } from '../actions/UserActions'

export interface IInitialState {
  userId: string
  idToken: string | undefined
  refreshToken: string | undefined
  email: string | undefined
  password: string | undefined
  firstName: string | undefined
  lastName: string | undefined
  errorMessage: string | undefined
}

export interface IAction {
  type: string
  payload: any
}

const initialState: IInitialState = {
  userId: '',
  firstName: 'User',
  lastName: '',
  idToken: '',
  refreshToken: '',
  email: '',
  password: '',
  errorMessage: '',
}

const userReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case SIGNUP:
      return { ...state, idToken: action.payload.idToken, refreshToken: action.payload.refreshToken, email: action.payload.email, userId: action.payload.userId, errorMessage: '' }
    case LOGIN:
      return {
        ...state,
        idToken: action.payload.idToken,
        refreshToken: action.payload.refreshToken,
        email: action.payload.email,
        userId: action.payload.userId,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        errorMessage: '',
      }
    case STORE_USER:
      return { ...state, email: action.payload.email, userId: action.payload.userId, errorMessage: '' }
    case STORE_USER_INFO:
      return { ...state, firstName: action.payload.firstName, lastName: action.payload.lastName, errorMessage: '' }
    case REFRESH_USER:
      return { ...state, idToken: action.payload.idToken, refreshToken: action.payload.refreshToken, errorMessage: '' }
    case REQUEST_RESET_PASSWORD:
      return { ...state, email: action.payload.email, errorMessage: '' }
    case ADD_USER_INFO:
      return { ...state, firstName: action.payload.firstName, lastName: action.payload.lastName, email: action.payload.email, errorMessage: '' }
    case LOGOUT:
      return {
        userId: '',
        idToken: '',
        refreshToken: '',
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        errorMessage: '',
      }
    case SET_ERROR_MESSAGE:
      return { ...state, errorMessage: action.payload.errorMessage }
    default:
      return state
  }
}

export default userReducer
