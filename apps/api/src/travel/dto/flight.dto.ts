export class FlightDTO {
  public name: string;
  public price: number;

  public constructor(opts?: Partial<FlightDTO>) {
    Object.assign(this, opts);
  }
}
