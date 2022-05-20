export class Event {
  // title: string;
  // chatmessages: Chatmessage[];
  // imageUrl: string;
  // id?: string;

  constructor(
    public title: string,
    public category: string,
    // public date: Date,
    public location: string,
    public postalCode: number,
    public city: string,
    public imageUrl: string,
    public id?: string
  ) {
    this.id = id;
    this.title = title;
    this.category = category;
    // this.date = date;
    this.location = location;
    this.postalCode = postalCode;
    this.city = city;
    this.imageUrl = imageUrl;
  }
}
