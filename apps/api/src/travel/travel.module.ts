import { TravelController } from './controller/travel.controller';
import { Neo4jModule } from './../neo4j/neo4j.module';
import { Module } from '@nestjs/common';
import { TRAVEL_REPOSITORY } from './repository/travel.repository';
import { Neo4jTravelRepository } from './repository/impl/neo4j-travel.repository';
import { TravelService } from './service/travel.service';
import { TravelMapperService } from './service/travel-mapper.service';
import { Neo4jTravelMapperService } from './repository/impl/neo4j-travel-mapper.service';

@Module({
  imports: [Neo4jModule],
  providers: [
    {
      provide: TRAVEL_REPOSITORY,
      useClass: Neo4jTravelRepository,
    },
    TravelService,
    TravelMapperService,
    Neo4jTravelMapperService,
  ],
  controllers: [TravelController],
})
export class TravelModule {}
