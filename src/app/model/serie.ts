import {Remark} from "./remark";

export class Serie {

  public static inc: number;
  private _id: number;
  private _name: string;
  private _dateBeginFirstSeason: Date;
  private _numberSeason: number;
  private _description: string;
  private _review: string;
  private _pictureSerie: string;
  private _remarks: Remark[];


  get numberSeason(): number {
    return this._numberSeason;
  }

  set numberSeason(value: number) {
    this._numberSeason = value;
  }

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

  get dateBeginFirstSeason(): Date {
    return this._dateBeginFirstSeason;
  }

  set dateBeginFirstSeason(value: Date) {
    this._dateBeginFirstSeason = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get review(): string {
    return this._review;
  }

  set review(value: string) {
    this._review = value;
  }

  get pictureSerie(): string {
    return this._pictureSerie;
  }

  set pictureSerie(value: string) {
    this._pictureSerie = value;
  }

  get remarks(): Remark[] {
    return this._remarks;
  }

  set remarks(value: Remark[]) {
    this._remarks = value;
  }



  constructor(name: string, dateBeginFirstSeason: Date, numberSeason: number, description: string, review: string, pictureSerie: string, remarks: Remark[]) {
    if(!Serie.inc) {
      Serie.inc = 0;
    }
    this._id = Serie.inc++;
    this._name = name;
    this._dateBeginFirstSeason = dateBeginFirstSeason;
    this._numberSeason = numberSeason;
    this._description = description;
    this._review = review;
    this._pictureSerie = pictureSerie;
    this._remarks = remarks;
  }

  static fromJSON(serieAsJSON: any): Serie {
    return new Serie(
      serieAsJSON.name,
      serieAsJSON.dateBeginFirstSeason,
      serieAsJSON.numberSeason,
      serieAsJSON.description,
      serieAsJSON.review,
      serieAsJSON.pictureSerie,
      serieAsJSON.remarks
    );
  }

  toJSON(): any {
    return {
      id: this.id,
      name: this.name,
      dateBeginFirstSeason: this.dateBeginFirstSeason,
      numberSeason: this.numberSeason,
      description: this.description,
      review: this.review,
      pictureSerie: this.pictureSerie,
      remarks: this.remarks
    };
  }

}
