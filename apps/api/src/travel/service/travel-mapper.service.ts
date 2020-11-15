import { Injectable } from '@nestjs/common';
import { AirportDTO } from '../dto/airport.dto';
import { TravelDTO } from '../dto/travel.dto';
import { Airport } from '../entity/airport.entity';
import { Travel } from '../entity/travel.entity';
import { FlightDTO } from '../dto/flight.dto';
import { Flight } from '../entity/flight.entity';

@Injectable()
export class TravelMapperService {
  public airportToDTO(airport: Airport): AirportDTO {
    const { name, code } = airport;
    return new AirportDTO({
      name,
      code,
    });
  }

  public travelToDTO(travel: Travel): TravelDTO {
    if (!travel) {
      return travel;
    }

    const { departure, arrival, totalPrice, flights } = travel;

    const departureDTO = this.airportToDTO(departure);
    const arrivalDTO = this.airportToDTO(arrival);
    const flightsDTO = flights?.map(this.flightToDTO);

    return new TravelDTO({
      arrival: arrivalDTO,
      departure: departureDTO,
      flights: flightsDTO,
      totalPrice,
    });
  }

  public flightToDTO(flight: Flight): FlightDTO {
    const { name, price } = flight;
    return new FlightDTO({ name, price });
  }
}
