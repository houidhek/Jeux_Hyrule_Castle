import * as fs from 'fs';
import { getCrasse } from './basic_characteristics';
import Entity from './interfaces/Entity';
import Floor from './interfaces/Floor';
import { getRandomInt, getRarity } from './maths';

export function checkFile(jsonPath: string) {
  try {
    fs.readFileSync(jsonPath, 'utf8');
    return true;
  } catch (err) {
    return false;
  }
}

export function importPlayer() {
  const json: string = './json/players.json';
  if (checkFile(json)) {
    const read = fs.readFileSync(json, 'utf-8');
    const players: Entity[] = JSON.parse(read);
    const rarity: number = getRarity();
    const playersRarity = players.filter((player) => player.rarity === rarity);
    const player : Entity = playersRarity.at(getRandomInt(playersRarity.length));
    getCrasse(player);
    return player;
  }
  console.error('Missing files !');
  return process.exit(1);
}

export function importEnemy(floor: Floor) {
  let json: string = '';
  if (floor.nb % 10 === 0) { json = './json/bosses.json'; } else { json = './json/enemies.json'; }
  if (checkFile(json)) {
    const read = fs.readFileSync(json, 'utf-8');
    const enemies: Entity[] = JSON.parse(read);
    const rarity: number = getRarity();
    const enemiesRarity = enemies.filter((enemy) => enemy.rarity === rarity);
    const enemy: Entity = enemiesRarity.at(getRandomInt(enemiesRarity.length));
    enemy.hp *= floor.difficulty;
    enemy.mp *= floor.difficulty;
    enemy.str *= floor.difficulty;
    enemy.int *= floor.difficulty;
    enemy.def *= floor.difficulty;
    enemy.res *= floor.difficulty;
    enemy.spd *= floor.difficulty;
    enemy.luck *= floor.difficulty;
    getCrasse(enemy);
    if (floor.nb % 10 === 0) { enemy.boss = true; }
    return enemy;
  }
  console.error('Missing files !');
  return process.exit(1);
}
