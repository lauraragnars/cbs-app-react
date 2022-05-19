import { LOGIN, SIGNUP, STORE_USER, LOGOUT, REQUEST_RESET_PASSWORD, ADD_USER_INFO } from '../actions/UserActions';

export interface IInitialState {
  userId: string;
  idToken: string | undefined;
  email: String | undefined;
  password: string | undefined;
  firstName: string;
  lastName: string;
}

export interface IAction {
  type: string;
  payload: any;
}

const initialState: IInitialState = {
  userId: '',
  firstName: 'Test',
  lastName: 'Test',
  idToken: undefined,
  email: '',
  password: '',
};

const userReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case SIGNUP:
      return { ...state, idToken: action.payload.idToken, email: action.payload.email, userId: action.payload.userId };
    case LOGIN:
      return { ...state, idToken: action.payload.idToken, email: action.payload.email, userId: action.payload.userId };
    case STORE_USER:
      return { ...state, idToken: action.payload.idToken, email: action.payload.email };
    case REQUEST_RESET_PASSWORD:
      return { ...state, email: action.payload.email };
    case ADD_USER_INFO:
      return { ...state, firstName: action.payload.firstName, lastName: action.payload.lastName, email: action.payload.email };
    case LOGOUT:
      return {
        userId: '',
        idToken: undefined,
        email: '',
        password: '',
        firstName: '',
        lastName: '',
      };
    default:
      return state;
  }
};

export default userReducer;
