import { AirportDTO } from './airport.dto';
import { FlightDTO } from './flight.dto';

export class TravelDTO {
  public departure: AirportDTO;
  public arrival: AirportDTO;
  public totalPrice: number;
  public flights: FlightDTO[];

  public constructor(opts?: Partial<TravelDTO>) {
    Object.assign(this, opts);
  }
}
