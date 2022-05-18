import { SUBTRACT, TOGGLE_HAPPY, ADD, ADD_CHATROOM, DELETE_CHATROOM, FETCH_CHATROOMS } from '../actions/ChatActions';
import { Chatroom } from '../../entities/Chatroom';

const initialState = {
  chatrooms: [],
  counter: 0,
  isHappy: false,
  name: 'Laura',
};

export interface ActionInterface {
  type: string;
  payload: any;
}

const chatReducer = (state = initialState, action: ActionInterface) => {
  switch (action.type) {
    case ADD:
      return { ...state, counter: state.counter + 1 };
    case SUBTRACT:
      return { ...state, counter: state.counter - 1 };
    case TOGGLE_HAPPY:
      return { ...state, isHappy: !state.isHappy };
    case FETCH_CHATROOMS:
      return { ...state, chatrooms: action.payload };
    case ADD_CHATROOM:
      const chatroom = new Chatroom(action.payload.chatroomName, [], '', action.payload.id);
      return { ...state, chatrooms: [...state.chatrooms, chatroom] };
    case DELETE_CHATROOM:
      return {
        ...state,
        chatrooms: state.chatrooms.filter((chatroom: Chatroom) => chatroom.id !== action.payload),
      };
    default:
      return state;
  }
};

export default chatReducer;
