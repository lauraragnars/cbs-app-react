import { Event } from '../../entities/Event';

export const ADD_EVENT = 'ADD_EVENT';

export const addEvent = (eventName: string) => {
  return async (dispatch: any, getState: any) => {
    const idToken = getState().user.idToken;
    const response = await fetch('https://cbs-app-40f0b-default-rtdb.europe-west1.firebasedatabase.app/events.json?auth=' + idToken, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        eventName // sama og chatroomName: chatroomName,
      })
    });

    const data = await response.json(); // json to javascript
    console.log(data);
    if (!response.ok) {
      //There was a problem..
      console.log('There was a problem with adding the event');
    } else {
      dispatch({ type: ADD_EVENT, payload: { eventName, id: data.name } });
    }
  };
};
