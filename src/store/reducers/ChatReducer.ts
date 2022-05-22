import { ADD_CHATROOM, DELETE_CHATROOM, FETCH_CHATROOMS } from '../actions/ChatActions'
import { Chatroom } from '../../entities/Chatroom'

const initialState = {
  chatrooms: [],
}

export interface IAction {
  type: string
  payload: any
}

const chatReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case FETCH_CHATROOMS:
      return { ...state, chatrooms: action.payload }
    case ADD_CHATROOM:
      const chatroom = new Chatroom(action.payload.chatroomName, [], '', action.payload.id)
      return { ...state, chatrooms: [...state.chatrooms, chatroom] }
    case DELETE_CHATROOM:
      return {
        ...state,
        chatrooms: state.chatrooms.filter((chatroom: Chatroom) => chatroom.id !== action.payload),
      }
    default:
      return state
  }
}

export default chatReducer
