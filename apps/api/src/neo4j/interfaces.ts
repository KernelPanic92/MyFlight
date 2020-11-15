export interface Neo4jNumber {
  toNumber(): number;
}

export interface Neo4jEntity<T> {
  identity: Neo4jNumber;
  labels: string[];
  properties: T;
}
