import * as fs from 'fs';
import { checkFile } from './entityGen';
import Race from './interfaces/Race';
import Class from './interfaces/Class';
import Entity from './interfaces/Entity';

function importRaces() {
  const json: string = './json/races.json';
  if (checkFile(json)) {
    const read = fs.readFileSync(json, 'utf-8');
    const races: Race[] = JSON.parse(read);
    return races;
  } console.error('Missing files !');
  return process.exit(1);
}

function importClasses() {
  const json: string = './json/classes.json';
  if (checkFile(json)) {
    const read = fs.readFileSync(json, 'utf-8');
    const classes: Class[] = JSON.parse(read);
    return classes;
  } console.error('Missing files !');
  return process.exit(1);
}

export function getCrasse(entity: Entity) {
  const races: Race[] = importRaces();
  entity.raceData = races.filter((race) => race.id === entity.race).at(0);
  const classes: Class[] = importClasses();
  entity.classData = classes.filter((classe) => classe.id === entity.class).at(0);
  return entity;
}

export default function displayStats(player: Entity) {
  console.clear();
  console.log('//========[]========\\\\');
  console.log(' ', player.name);
  console.log(' ', player.raceData.name, player.classData.name);
  console.log('|]========[]========[|');
  console.log(`  Str: ${player.str}    Int: ${player.int}`);
  console.log(`  Def: ${player.def}    Res: ${player.res}`);
  console.log(`  Spd: ${player.spd}    Luck: ${player.luck}`);
  console.log('|]========[]========[|');
  console.log(`\t${player.coins} coins`);
  console.log('\\\\========[]========//');
}
