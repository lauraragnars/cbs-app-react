export class Chatroom {
  // title: string;
  // chatmessages: Chatmessage[];
  // imageUrl: string;
  // id?: string;

  constructor(public title: string, public chatmessages: Chatmessage[], public imageUrl: string, public id?: string) {
    this.id = id;
    this.title = title;
    this.chatmessages = chatmessages;
    this.imageUrl = imageUrl;
  }
}

export class Chatmessage {
  text: string;
  timestamp: Date;

  constructor(text: string, timestamp: Date) {
    this.text = text;
    this.timestamp = timestamp;
  }
}
