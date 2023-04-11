import { sep } from 'path';
import { Entity } from './Entity';

const rl = require('readline-sync');

export function fightHeader(player: Entity, enemy: Entity, floor: number) {
  const healthSymbol: string = '\u2764 ';
  const missingHealth: string = '\u2661 ';
  console.log(`========== FIGHT ${floor} ==========`);
  console.log(`\x1b[35m${enemy.name}\x1b[0m\nHP: \x1b[31m${healthSymbol.repeat(enemy.hp)}${missingHealth.repeat(enemy.maxHP - enemy.hp)}\x1b[0m${enemy.hp}/${enemy.maxHP}`);
  console.log(`\x1b[32m${player.name}\x1b[0m\nHP: \x1b[31m${healthSymbol.repeat(player.hp)}${missingHealth.repeat(player.maxHP - player.hp)}\x1b[0m${player.hp}/${player.maxHP}`);
}

export function fightLog(player: Entity, enemy: Entity) {
  console.clear();
  if (player.lastAction !== undefined) {
    console.log(player.lastAction);
  }
  if (enemy.lastAction !== undefined) {
    console.log(enemy.lastAction);
  }
}

export function playerDeath(player: Entity, enemy: Entity) {
  console.clear();
  fightLog(player, enemy);
  const separator: string = '=';
  rl.question(`${separator.repeat(30)}\nYou have died...\nBetter luck next time !\n`);
}

export function victory(enemy : Entity, floor: number, floorMax: number) {
  console.clear();
  if (floor === floorMax) {
    rl.question('You have done it, Adventurer ! All the badies are dead.\n You can rest now...\n');
  } else if (floor % 10 === 0) {
    rl.question(`Congratulations, Adventurer ! You have shown ${enemy.name} who is really the boss !\n`);
  } else {
    rl.question(`Well done ! You have vanquished ${enemy.name}.\nGet ready for your next fight...\n`);
  }
}
