import { DynamicModule, Module } from '@nestjs/common';
import { NEO4J_DRIVER, NEO4J_CONFIG } from './constants';
import { createDriver } from './driver-factory';
import { Neo4jConfig } from './neo4j-config.interface';
import { SessionFactoryService } from './session-factory.service';

@Module({})
export class Neo4jModule {
  public static forRoot(config: Neo4jConfig): DynamicModule {
    return {
      module: Neo4jModule,
      global: true,
      providers: [
        {
          provide: NEO4J_CONFIG,
          useValue: config,
        },
        {
          provide: NEO4J_DRIVER,
          inject: [NEO4J_CONFIG],
          useFactory: async () => await createDriver(config),
        },
        SessionFactoryService,
      ],
      exports: [SessionFactoryService],
    };
  }
}
