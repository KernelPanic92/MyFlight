import { Controller, Get, Query } from '@nestjs/common';
import { AirportDTO } from '../dto/airport.dto';
import { TravelDTO } from '../dto/travel.dto';
import { TravelService } from '../service/travel.service';

@Controller()
export class TravelController {
  constructor(private readonly travelService: TravelService) {}

  @Get('airports')
  public findAllAirports(): Promise<AirportDTO[]> {
    return this.travelService.findAllAirports();
  }

  @Get('travels/best')
  public findBestTravel(
    @Query('departure') departureCode: string,
    @Query('arrival') arrivalCode: string,
    @Query('maxStepOvers') maxStepOvers: number | string | undefined
  ): Promise<TravelDTO> {
    const coercedMaxStepOvers = maxStepOvers == null ? null : Number(maxStepOvers);
    return this.travelService.findBestTravel(departureCode, arrivalCode, coercedMaxStepOvers);
  }
}
