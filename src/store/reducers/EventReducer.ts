import { ADD_EVENT, FETCH_EVENTS } from '../actions/EventActions';
import { Event } from '../../entities/Event';

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
        // action.payload.eventStart,
        // action.payload.eventEnd,
        action.payload.eventLocation,
        action.payload.eventPostalCode,
        action.payload.eventCity,
        action.payload.eventImage,
        action.payload.eventDescription,
        action.payload.id
      );
      return { ...state, events: [...state.events, event] };
    case FETCH_EVENTS:
      return { ...state, events: action.payload };

    default:
      return state
  }
}

export default eventReducer
