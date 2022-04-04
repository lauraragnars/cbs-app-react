import { LOGIN, SIGNUP, STORE_USER } from "../actions/UserActions";

const initialState = {
  idToken: null,
  email: "",
  password: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      console.log(action.payload);
      return { ...state, idToken: action.payload.idToken, email: action.payload.email };
    case LOGIN:
      console.log(action.payload);
      return { ...state, idToken: action.payload.idToken, email: action.payload.email };
    case STORE_USER:
      console.log(action.payload);
      return { ...state, idToken: action.payload.idToken, email: action.payload.email };
    default:
      return state;
  }
};

export default userReducer;
