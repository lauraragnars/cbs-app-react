import { ADD_EVENT } from '../actions/EventActions'
import { Event } from '../../entities/Event'

const initialState = {
  events: [],
}

export interface ActionInterface {
  type: string
  payload: any
}

const eventReducer = (state = initialState, action: ActionInterface) => {
  switch (action.type) {
    case ADD_EVENT:
      const event = new Event(
        action.payload.eventName,
        action.payload.eventCategory,
        // action.payload.eventDate,
        action.payload.eventLocation,
        action.payload.eventPostalCode,
        action.payload.eventCity,
        '',
        action.payload.id
      )
      return { ...state, events: [...state.events, event] }
    default:
      return state
  }
}

export default eventReducer
