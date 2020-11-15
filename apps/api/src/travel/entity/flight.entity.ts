export class Flight {
  public name: string;
  public price: number;

  public constructor(opts?: Partial<Flight>) {
    Object.assign(this, opts);
  }
}
