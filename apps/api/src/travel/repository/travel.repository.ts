import { Airport } from '../entity/airport.entity';
import { Travel } from '../entity/travel.entity';

export interface TravelRepository {
  findAllAirports(): Promise<Airport[]>;

  findOneAirport(code: string): Promise<Airport>;

  findBestTravel(departureCode: string, arrivalCode: string, maxStepOvers: number): Promise<Travel>;
}

export const TRAVEL_REPOSITORY = 'TRAVEL_REPOSITORY';
