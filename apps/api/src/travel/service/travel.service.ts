import { TravelRepository } from './../repository/travel.repository';
import { Inject, Injectable } from '@nestjs/common';
import { TRAVEL_REPOSITORY } from '../repository/travel.repository';
import { AirportDTO } from '../dto/airport.dto';
import { TravelDTO } from '../dto/travel.dto';
import { TravelMapperService } from './travel-mapper.service';

@Injectable()
export class TravelService {
  public constructor(
    @Inject(TRAVEL_REPOSITORY) private readonly repository: TravelRepository,
    private readonly travelMapper: TravelMapperService,
  ) {}

  public async findAllAirports(): Promise<AirportDTO[]> {
    const airports = await this.repository.findAllAirports();
    return airports.map(this.travelMapper.airportToDTO);
  }

  public async findBestTravel(
    departureCode: string,
    arrivalCode: string,
    maxStepOvers: number,
  ): Promise<TravelDTO> {
    const travel = await this.repository.findBestTravel(
      departureCode,
      arrivalCode,
      maxStepOvers
    );

    return this.travelMapper.travelToDTO(travel);
  }
}
