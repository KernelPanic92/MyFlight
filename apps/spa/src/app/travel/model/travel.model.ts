import { Airport } from './airport.model';
import { Flight } from './flight.model';

export interface Travel {
  departure: Airport;
  arrival: Airport;
  totalPrice: number;
  flights: Flight[];
}
