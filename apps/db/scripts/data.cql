CREATE (Peretola:Airport { name: "Peretola", code: "PERETOLA", lng: 2, lat: 1 })

CREATE (Milano:Airport { name: "Milano", code: "MILANO", lng: 3, lat: 4 })

CREATE (Napoli:Airport { name: "Napoli", code: "NAPOLI", lng: 5, lat: 6 })

CREATE (Pisa:Airport { name: "Pisa", code: "PISA", lng: 7, lat: 8 })

CREATE (Bergamo:Airport { name: "Bergamo", code: "BERGAMO", lng: 9, lat: 10 })

CREATE (Brescia:Airport { name: "Brescia", code: "BRESCIA", lng: 11, lat: 12 })

CREATE (Peretola)-[:Flight { name: Peretola.name + ' - ' + Milano.name, price: 40 }]->(Milano)

CREATE (Peretola)-[:Flight { name: Peretola.name + ' - ' + Napoli.name, price: 10 }]->(Napoli)

CREATE (Peretola)-[:Flight { name: Peretola.name + ' - ' + Pisa.name, price: 40 }]->(Pisa)

CREATE (Napoli)-[:Flight { name: Napoli.name + ' - ' + Pisa.name, price: 10 }]->(Pisa)

CREATE (Milano)-[:Flight { name: Milano.name + ' - ' + Bergamo.name, price: 10 }]->(Bergamo)

CREATE (Bergamo)-[:Flight { name: Bergamo.name + ' - ' + Milano.name, price: 40 }]->(Milano)

CREATE (Bergamo)-[:Flight { name: Bergamo.name + ' - ' + Napoli.name, price: 10 }]->(Napoli)

CREATE (Bergamo)-[:Flight { name: Bergamo.name + ' - ' + Brescia.name, price: 70 }]->(Brescia)
