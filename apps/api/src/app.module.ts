import { Module } from '@nestjs/common';
import { Neo4jModule } from './neo4j/neo4j.module';
import { TravelModule } from './travel/travel.module';

@Module({
  imports: [
    Neo4jModule.forRoot({
      scheme: 'neo4j',
      host: process.env.DATABASE_HOST || 'localhost',
      port: parseInt(process.env.DATABASE_PORT, 10) || 7687,
      username: process.env.DATABASE_USERNAME || 'neo4j',
      password: process.env.DATABASE_PASSWORD || 's3cr3t',
      database: process.env.DATABASE_NAME || '',
    }),
    TravelModule,
  ],
})
export class AppModule {}
