import { LOGIN, SIGNUP, STORE_USER, LOGOUT, REQUEST_RESET_PASSWORD, ADD_USER_INFO } from '../actions/UserActions';

export interface InitialUserState {
  idToken: string | undefined;
  email: String | undefined;
  password: string | undefined;
  // firstName: string;
  // lastName: string;
}

export interface ActionState {
  type: string;
  payload: any;
}

const initialState: InitialUserState = {
  idToken: undefined,
  email: '',
  password: '',
  // firstName: 'Test',
  // lastName: 'Test',
};

const userReducer = (state = initialState, action: ActionState) => {
  switch (action.type) {
    case SIGNUP:
      return { ...state, idToken: action.payload.idToken, email: action.payload.email };
    case LOGIN:
      return { ...state, idToken: action.payload.idToken, email: action.payload.email };
    case STORE_USER:
      return { ...state, idToken: action.payload.idToken, email: action.payload.email };
    case REQUEST_RESET_PASSWORD:
      return { ...state, email: action.payload.email };
    case ADD_USER_INFO:
      return { ...state, firstName: action.payload.firstName, lastName: action.payload.lastName, email: action.payload.email };
    case LOGOUT:
      return {
        idToken: undefined,
        email: '',
        password: '',
        username: '',
      };
    default:
      return state;
  }
};

export default userReducer;
