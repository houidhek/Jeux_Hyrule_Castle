import { importPlayer, importEnemy, importBoss } from './entityGen'
import { generalFight } from './fightMechanics';
import { fightHeader, fightLog, playerDeath, victory } from './fightInfo';
import { Entity } from './Entity';

export default function hyruleCastle() {
  const player: Entity = importPlayer();
  player.maxHP = player.hp;
  let enemy: Entity = importEnemy();
  let floor: number = 1;
  const floorMax: number = 10;

  while (floor <= floorMax) {
    if (floor < 10) {
      enemy = importEnemy();
    } if (floor === 10) {
      enemy = importBoss();
    }
    enemy.maxHP = enemy.hp;
    do {
      fightLog(player, enemy);
      fightHeader(player, enemy, floor);
      generalFight(player, enemy);
    } while (enemy.hp > 0 && player.hp > 0);
    if (player.hp === 0) {
      playerDeath(player, enemy);
      break;
    }
    player.lastAction = '';
    victory(enemy, floor, floorMax);
    floor += 1;
  }
}

hyruleCastle();
