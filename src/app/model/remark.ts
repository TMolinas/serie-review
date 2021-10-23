export class Remark {

  public static inc: number;
  private _id: number;
  private _name: string
  private _date: Date;
  private _author: string;
  private _content: string;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get author(): string {
    return this._author;
  }

  set author(value: string) {
    this._author = value;
  }

  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }


  constructor(name: string, date: Date, author: string, content: string) {
    if (!Remark.inc) {
      Remark.inc = 0;
    }
    this._id = Remark.inc++;
    this._name = name;
    this._date = date;
    this._author = author;
    this._content = content;
  }

  static fromJSON(remarkAsJSON: any): Remark {
    return new Remark(
      remarkAsJSON.name,
      remarkAsJSON.date,
      remarkAsJSON.author,
      remarkAsJSON.content
    );
  }

  toJSON(): any {
    return {
      id: this.id,
      name: this.name,
      date: this.date,
      author: this.author,
      content: this.content
    };
  }

}
