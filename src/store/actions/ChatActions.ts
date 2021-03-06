import { Chatmessage, Chatroom } from '../../entities/Chatroom';
export const ADD_CHATROOM = 'ADD_CHATROOM';
export const DELETE_CHATROOM = 'DELETE_CHATROOM';
export const FETCH_CHATROOMS = 'FETCH_CHATROOMS';

export const fetchChatrooms = () => {
  return async (dispatch: any, getState: any) => {
    const idToken = getState().user.idToken;
    const response = await fetch('https://cbs-app-40f0b-default-rtdb.europe-west1.firebasedatabase.app/chatrooms.json?auth=' + idToken, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json(); // json to javascript
    if (!response.ok) {
      // There was a problem..
    } else {
      const chatrooms = [];
      for (const key in data) {
        const chatroom = new Chatroom(data[key].chatroomName, data[key].chatMessages, '', key);
        chatrooms.push(chatroom);
      }
      dispatch({ type: FETCH_CHATROOMS, payload: chatrooms });
    }
  };
};

export const addChatroom = (chatroomName: string, chatMessages: Chatmessage[]) => {
  return async (dispatch: any, getState: any) => {
    const idToken = getState().user.idToken;
    const response = await fetch(`https://cbs-app-40f0b-default-rtdb.europe-west1.firebasedatabase.app/chatrooms.json?auth=${idToken}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chatroomName,
        chatMessages: []
      })
    });

    const data = await response.json();
    if (!response.ok) {
      // There was a problem..
    } else {
      dispatch({ type: ADD_CHATROOM, payload: { chatroomName, id: data.name } });
    }
  };
};

export const addChatmessage = (chatroomId: string, chatMessages: Chatmessage[], chatroomName: string) => {
  return async (dispatch: any, getState: any) => {
    const idToken = getState().user.idToken;
    const response = await fetch(`https://cbs-app-40f0b-default-rtdb.europe-west1.firebasedatabase.app/chatrooms/${chatroomId}/.json?auth=${idToken}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chatroomName,
        chatMessages
      })
    });

    const data = await response.json();
    if (!response.ok) {
    } else {
      dispatch(fetchChatrooms());
    }
  };
};

export const deleteChatroom = (id: string) => {
  return async (dispatch: any, getState: any) => {
    const idToken = getState().user.idToken;
    const response = await fetch('https://cbs-app-40f0b-default-rtdb.europe-west1.firebasedatabase.app/chatrooms/' + id + '.json?auth=' + idToken, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json(); // json to javascript
    if (!response.ok) {
      // There was a problem..
    } else {
      dispatch({ type: DELETE_CHATROOM, payload: id });
    }
  };
};
