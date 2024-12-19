require("dotenv").config();
const { Client } = require("pg");

const SQL = `
create table if not exists pokemons (
    id integer primary key generated always as identity,
    pokemon varchar(255),
    trainer varchar(255),
    type varchar(255)
);

insert into pokemons (pokemon, trainer, type)
values ('Pikachu', 'Ash Ketchum', 'Electric'),
       ('Snivy', 'Trek', 'Grass'),
       ('Charizard','Ash Ketchum','Fire'),
       ('Blastoise','Gary','Water'),
       ('Butterfree','Ash Ketchum','Bug'),
       ('Arbok','Jessie','Poison'),
       ('Meowth','Team Rocket','Normal'),
       ('Onix','Brock','Rock'),
       ('Rapidash','Unknown Racer','Fire'),
       ('Hitmochan','Boxer','Fighting'),
       ('Chansey','Nurse Joy','Normal'),
       ('Staryu','May','Water'),
       ('Mr.Mime','Ash Mom','Psychic'),
       ('Tauros','Ash Ketchum','Normal'),
       ('Gyrados','Spy Champion','Water'),
       ('Dragonite','Iris','Dragon'),
       ('Togepi','May','Fairy'),
       ('Magcargo','Fire Master Wannabe','Fire'),
       ('Ursaring','Gary','Normal'),
       ('Hariyama','Alola First Tester','Fighting'),
       ('Flygon','Goh','Dragon'),
       ('Tropius','Challenger','Grass'),
       ('Registeel','Regi Collector','Steel'),
       ('Infernape','Ash Ketchum','Fire'),
       ('Garchomp','Cynthia','Dragon'),
       ('Leafeon','Eevee Collector','Grass'),
       ('Stoutland','Torrocat Friend','Normal'),
       ('Zoroark','Cynthia alike Son','Dark');
`;

async function main() {
  console.log("Seeding");

  const client = new Client({
    connectionString: `postgres://${process.env.USER}:${process.env.PASSWORD}@${process.env.HOST}/${process.env.DATABASE}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("Done");
}

main();
