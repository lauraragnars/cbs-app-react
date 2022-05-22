import { Event } from '../../entities/Event';

export const ADD_EVENT = 'ADD_EVENT';
export const FETCH_EVENTS = 'FETCH_EVENTS';

export const addEvent = (
  eventName: string,
  eventCategory: string,
  eventLocation: string,
  eventPostalCode: string,
  eventCity: string,
  eventImage: string,
  eventDescription: string
) => {
  return async (dispatch: any, getState: any) => {
    const idToken = getState().user.idToken;
    const response = await fetch('https://cbs-app-40f0b-default-rtdb.europe-west1.firebasedatabase.app/events.json?auth=' + idToken, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        eventName,
        eventCategory,
        // eventStart,
        // eventEnd,
        eventLocation,
        eventPostalCode,
        eventCity,
        eventImage,
        eventDescription
      })
    });

    const data = await response.json(); // json to javascript
    console.log(data);
    if (!response.ok) {
      //There was a problem..
      console.log('There was a problem with adding the event');
    } else {
      dispatch({ type: ADD_EVENT, payload: { eventName, eventCategory, eventLocation, eventPostalCode, eventCity, eventImage, id: data.name } });
    }
  };
};

export const fetchEvents = () => {
  return async (dispatch: any, getState: any) => {
    const idToken = getState().user.idToken;
    const response = await fetch('https://cbs-app-40f0b-default-rtdb.europe-west1.firebasedatabase.app/events.json?auth=' + idToken, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json(); // json to javascript
    if (!response.ok) {
      // There was a problem..
      console.log('could not fetch events');
    } else {
      const events = [];
      for (const key in data) {
        const event = new Event(
          data[key].eventName,
          data[key].eventCategory,
          //   data[key].eventStart,
          //   data[key].eventEnd,
          data[key].eventLocation,
          data[key].eventPostalCode,
          data[key].eventCity,
          data[key].eventImage,
          data[key].eventDescription,
          key
        );
        events.push(event);
      }
      console.log(events);
      dispatch({ type: FETCH_EVENTS, payload: events });
    }
  };
};
