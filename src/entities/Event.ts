export class Event {
  constructor(
    public title: string,
    public category: string,
    public location: string,
    public postalCode: string,
    public city: string,
    public imageUrl: string,
    public description: string,
    public id: string
  ) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.location = location;
    this.postalCode = postalCode;
    this.city = city;
    this.imageUrl = imageUrl;
    this.description = description;
  }
}
