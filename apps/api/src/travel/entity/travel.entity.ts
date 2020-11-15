import { Airport } from './airport.entity';
import { Flight } from './flight.entity';

export class Travel {
  public departure: Airport;
  public arrival: Airport;
  public totalPrice: number;
  public flights: Flight[];

  public constructor(opts?: Partial<Travel>) {
    Object.assign(this, opts);
  }
}
