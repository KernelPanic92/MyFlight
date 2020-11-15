import { Neo4jConfig } from './neo4j-config.interface';
import neo4j from 'neo4j-driver';
import { Logger } from '@nestjs/common';

export async function createDriver(config: Neo4jConfig) {
  const logger = new Logger(createDriver.name);
  const { scheme, host, port, username, password } = config;

  logger.log('Driver initialization..', 'Neo4jDriver');

  const driver = neo4j.driver(
    `${scheme}://${host}:${port}`,
    neo4j.auth.basic(username, password),
  );

  // Verify the connection details or throw an Error
  await driver.verifyConnectivity();
  logger.log('Driver initialized', 'Neo4jDriver');
  return driver;
}
