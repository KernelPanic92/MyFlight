import { Module } from '@nestjs/common';
import { Neo4jModule } from './neo4j/neo4j.module';
import { TravelModule } from './travel/travel.module';

@Module({
  imports: [
    Neo4jModule.forRoot({
      scheme: 'neo4j',
      host: 'neo4j',
      port: 7687,
      username: 'neo4j',
      password: 's3cr3t',
      database: '',
    }),
    TravelModule,
  ],
})
export class AppModule {}
