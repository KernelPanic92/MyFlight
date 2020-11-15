import { Injectable } from '@nestjs/common';
import { SessionFactoryService } from 'src/neo4j/session-factory.service';
import { Airport } from 'src/travel/entity/airport.entity';
import { Travel } from 'src/travel/entity/travel.entity';
import { TravelRepository } from '../travel.repository';
import { Neo4jTravelMapperService } from './neo4j-travel-mapper.service';

@Injectable()
export class Neo4jTravelRepository implements TravelRepository {
  public constructor(
    private readonly sessionFactory: SessionFactoryService,
    private readonly mapper: Neo4jTravelMapperService,
  ) {}

  public async findAllAirports(): Promise<Airport[]> {
    const session = this.sessionFactory.getSession();

    const result = await session.run('MATCH (airport:Airport) RETURN airport');

    return result.records
      .map((record) => record.get('airport'))
      .map(this.mapper.nodeToAirport);
  }

  public async findOneAirport(code: string): Promise<Airport> {
    const session = this.sessionFactory.getSession();

    const result = await session.run(
      `MATCH (airport:Airport) WHERE airport.code = $code RETURN airport`,
      { code },
    );

    const airportNode = result.records[0]?.get('airport');

    return this.mapper.nodeToAirport(airportNode);
  }

  public async findBestTravel(
    departureCode: string,
    arrivalCode: string,
    maxStepOvers: number
  ): Promise<Travel> {
    const session = this.sessionFactory.getSession();
    
    const range = this.maxStepOverRange(maxStepOvers);

    const result = await session.run(
      `
        MATCH (departure:Airport {code: $departureCode})
        OPTIONAL MATCH travel = (departure)-[:Flight*${range}]->(arrival:Airport) 
        WITH *,
        RELATIONSHIPS(travel) as flights, 
        REDUCE(price = 0, flight in relationships(travel) | price + flight.price) as totalPrice
        WHERE arrival.code = $arrivalCode
        RETURN departure, arrival, flights, totalPrice 
        ORDER BY totalPrice ASC
        LIMIT 1
      `,
      {
        departureCode,
        arrivalCode,
      },
    );

    return this.mapper.recordToTravel(result.records[0]);
  }

  private maxStepOverRange(maxStepOvers: number): string {
    if (maxStepOvers === null || maxStepOvers === undefined) {
      return '';
    }

    if (!Number.isInteger(maxStepOvers)) {
      return '';
    }

    if (maxStepOvers < 1) {
      return '';
    }

    return `1..${maxStepOvers}`;
  }
}
