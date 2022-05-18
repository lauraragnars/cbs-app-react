import { LOGIN, SIGNUP, STORE_USER, LOGOUT } from "../actions/UserActions";

export interface UserState {
  idToken: string | undefined;
  email: String | undefined;
  password: string | undefined;
  username: string | undefined;
}

export interface ActionState {
  type: string;
  payload: any;
}

const initialState: UserState = {
  idToken: undefined,
  email: "",
  password: "",
  username: "Test",
};

const userReducer = (state = initialState, action: ActionState) => {
  switch (action.type) {
    case SIGNUP:
      return { ...state, idToken: action.payload.idToken, email: action.payload.email };
    case LOGIN:
      return { ...state, idToken: action.payload.idToken, email: action.payload.email };
    case STORE_USER:
      return { ...state, idToken: action.payload.idToken, email: action.payload.email };
    case LOGOUT:
      return { 
        idToken: undefined,
        email: "",
        password: "",
        username: "", 
      };
    default:
      return state;
  }
};

export default userReducer;
