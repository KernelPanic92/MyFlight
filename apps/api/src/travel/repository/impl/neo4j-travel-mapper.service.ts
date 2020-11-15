import { Flight } from './../../entity/flight.entity';
import { Injectable } from '@nestjs/common';
import { Travel } from 'src/travel/entity/travel.entity';

import { Neo4jEntity, Neo4jNumber } from 'src/neo4j/interfaces';
import { Airport } from 'src/travel/entity/airport.entity';
import { Record } from 'neo4j-driver';

type AirportNeo4jNode = Neo4jEntity<{
  name: string;
  code: string;
  lng: Neo4jNumber;
  lat: Neo4jNumber;
}>;

type FlightNeo4jEntity = Neo4jEntity<{
  name: string;
  price: Neo4jNumber;
}>;

@Injectable()
export class Neo4jTravelMapperService {
  public nodeToAirport(node: AirportNeo4jNode): Airport {
    if (!node) {
      return void 0;
    }

    const {
      identity,
      properties: { name, code, lng, lat },
    } = node;

    return new Airport({
      id: identity.toNumber(),
      latitude: lat.toNumber(),
      longitude: lng.toNumber(),
      name,
      code,
    });
  }

  public recordToTravel(record: Record): Travel {
    if (!record) {
      return void 0;
    }

    const [departureNode, arrivalNode, flightNodes, totalPrice] = Array.from(
      record.values(),
    ) as [AirportNeo4jNode, AirportNeo4jNode, FlightNeo4jEntity[], Neo4jNumber];

    const departure = this.nodeToAirport(departureNode);
    const arrival = this.nodeToAirport(arrivalNode);
    const flights = flightNodes.map(this.relationshipToFlight);

    return new Travel({
      departure,
      arrival,
      flights,
      totalPrice: totalPrice.toNumber(),
    });
  }

  public relationshipToFlight(relationship: FlightNeo4jEntity): Flight {
    const {
      properties: { name, price },
    } = relationship;

    return new Flight({ name, price: price.toNumber() });
  }
}
