import { LOGIN, SIGNUP, STORE_USER, LOGOUT, REQUEST_RESET_PASSWORD, ADD_USER_INFO, STORE_USER_INFO } from '../actions/UserActions'

export interface IInitialState {
  userId: string
  idToken: string | undefined
  email: String | undefined
  password: string | undefined
  firstName: string | undefined
  lastName: string | undefined
}

export interface IAction {
  type: string
  payload: any
}

const initialState: IInitialState = {
  userId: '',
  firstName: 'User',
  lastName: '',
  idToken: undefined,
  email: '',
  password: '',
}

const userReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case SIGNUP:
      return { ...state, idToken: action.payload.idToken, email: action.payload.email, userId: action.payload.userId }
    case LOGIN:
      return {
        ...state,
        idToken: action.payload.idToken,
        email: action.payload.email,
        userId: action.payload.userId,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      }
    case STORE_USER:
      return { ...state, idToken: action.payload.idToken, email: action.payload.email, userId: action.payload.userId }
    case STORE_USER_INFO:
      return { ...state, firstName: action.payload.firstName, lastName: action.payload.lastName }
    case REQUEST_RESET_PASSWORD:
      return { ...state, email: action.payload.email }
    case ADD_USER_INFO:
      return { ...state, firstName: action.payload.firstName, lastName: action.payload.lastName, email: action.payload.email }
    case LOGOUT:
      return {
        userId: '',
        idToken: undefined,
        email: '',
        password: '',
        firstName: '',
        lastName: '',
      }
    default:
      return state
  }
}

export default userReducer
