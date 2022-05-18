import { LOGIN, SIGNUP, STORE_USER } from "../actions/UserActions";

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
  username: "",
};

const userReducer = (state = initialState, action: ActionState) => {
  switch (action.type) {
    case SIGNUP:
      console.log(action.payload);
      return { ...state, idToken: action.payload.idToken, email: action.payload.email, username: action.payload.username};
    case LOGIN:
      console.log(action.payload);
      return { ...state, idToken: action.payload.idToken, email: action.payload.email, username: action.payload.username};
    case STORE_USER:
      console.log(action.payload);
      return { ...state, idToken: action.payload.idToken, email: action.payload.email, username: action.payload.username };
    default:
      return state;
  }
};

export default userReducer;
