import { CHATROOMS } from "../../dummy.data";
import { SUBTRACT, TOGGLE_HAPPY, ADD, ADD_CHATROOM, DELETE_CHATROOM } from "../actions/ChatActions";
import { Chatroom } from "../../entities/Chatroom";

const initialState = {
  chatrooms: CHATROOMS,
  counter: 0,
  isHappy: false,
  name: "Laura",
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, counter: state.counter + 1 };
    case SUBTRACT:
      return { ...state, counter: state.counter - 1 };
    case TOGGLE_HAPPY:
      return { ...state, isHappy: !state.isHappy };
    case ADD_CHATROOM:
      const chatroom = new Chatroom(action.payload, [], "");
      //const newChatroomArray = [...state.chatrooms, chatroom];
      //return { ...state, chatrooms: newChatroomArray };
      return { ...state, chatrooms: [...state.chatrooms, chatroom] };
    case DELETE_CHATROOM:
      console.log(action.payload);
      return {
        ...state,
        chatrooms: state.chatrooms.filter((chatroom) => chatroom.title !== action.payload),
      };
    default:
      return state; //does not do anything yet​
  }
};

export default chatReducer;
