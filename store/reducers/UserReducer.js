import { SIGNUP } from "../actions/UserActions";

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

    default:
      return state;
  }
};

export default userReducer;
