export class Airport {
  public id: number;
  public name: string;
  public code: string;
  public latitude: number;
  public longitude: number;

  public constructor(opts?: Airport) {
    Object.assign(this, opts);
  }
}
