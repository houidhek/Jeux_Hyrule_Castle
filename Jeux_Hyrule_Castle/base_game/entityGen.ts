import * as fs from 'fs';
import { Entity } from './Entity';
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
  if (checkFile('players.json')) {
    const read = fs.readFileSync('players.json', 'utf-8');
    const players: Entity[] = JSON.parse(read);
    const rarity: number = getRarity();
    const playersRarity = players.filter((player) => player.rarity === rarity);
    return playersRarity.at(getRandomInt(playersRarity.length));
  }
  console.error('Missing files !');
  return process.exit(1);
}

export function importEnemy() {
  if (checkFile('enemies.json')) {
    const read = fs.readFileSync('enemies.json', 'utf-8');
    const enemies: Entity[] = JSON.parse(read);
    const rarity: number = getRarity();
    const enemiesRarity = enemies.filter((enemy) => enemy.rarity === rarity);
    return enemiesRarity.at(getRandomInt(enemiesRarity.length));
  }
  console.error('Missing files !');
  return process.exit(1);
}

export function importBoss() {
  if (checkFile('bosses.json')) {
    const read = fs.readFileSync('bosses.json', 'utf-8');
    const bosses: Entity[] = JSON.parse(read);
    const rarity: number = getRarity();
    const bossesRarity: Entity[] = bosses.filter((boss) => boss.rarity === rarity);
    return bossesRarity.at(getRandomInt(bossesRarity.length));
  }
  console.error('Missing files !');
  return process.exit(1);
}
