import { Neo4jConfig } from './neo4j-config.interface';
import { Inject, Injectable } from '@nestjs/common';
import { Driver, session, Session, SessionMode } from 'neo4j-driver';
import { NEO4J_CONFIG, NEO4J_DRIVER } from './constants';

@Injectable()
export class SessionFactoryService {
  public constructor(
    @Inject(NEO4J_CONFIG) private readonly config: Neo4jConfig,
    @Inject(NEO4J_DRIVER) private readonly driver: Driver,
  ) {}

  public getSession(accessMode: SessionMode = session.READ): Session {
    return this.driver.session({
      database: this.config.database,
      defaultAccessMode: accessMode,
    });
  }
}
