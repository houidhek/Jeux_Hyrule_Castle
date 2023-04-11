import { displayTitle } from './basic_game_customization';
import Entity from './interfaces/Entity';
import Floor from './interfaces/Floor';

const rl = require('readline-sync');

export function displayOptions() {
  console.log('\n  What\'s your next move, Adventurer ?');
  console.log('╔═══════════╦══════════════╦═══════════╗');
  console.log('║           ║  2. Protect  ║  3. Heal  ║');
  console.log('║ 1. Attack ╠══════════════╬═══════════╣');
  console.log('║           ║ 4. Character ║ 5. Escape ║');
  console.log('╚═══════════╩══════════════╩═══════════╝');
}

export function fightHeader(player: Entity, enemy: Entity, floor: Floor) {
  const healthSymbol: string = '\u2764 ';
  const missingHealth: string = '\u2661 ';
  console.log(`========== FIGHT ${floor.nb} ==========`);
  if (enemy.maxHP === undefined || player.maxHP === undefined) {
    return console.error('Missing entity value');
  }
  console.log(`\x1b[35m${enemy.name}\x1b[0m\nHP: \x1b[31m${healthSymbol.repeat(enemy.hp)}${missingHealth.repeat(enemy.maxHP - enemy.hp)}\x1b[0m${enemy.hp}/${enemy.maxHP}`);
  console.log(`\x1b[32m${player.name}\x1b[0m\nHP: \x1b[31m${healthSymbol.repeat(player.hp)}${missingHealth.repeat(player.maxHP - player.hp)}\x1b[0m${player.hp}/${player.maxHP}`);
  return true;
}

export function fightLog(player: Entity, enemy: Entity) {
  console.clear();
  if (enemy.lastAction !== undefined && player.spd < enemy.spd) {
    console.log(enemy.lastAction);
  }
  if (player.lastAction !== undefined) {
    console.log(player.lastAction);
  }
  if (enemy.lastAction !== undefined && player.spd > enemy.spd) {
    console.log(enemy.lastAction);
  }
}

export function playerDeath(player: Entity, enemy: Entity) {
  console.clear();
  fightLog(player, enemy);
  const separator: string = '=';
  rl.question(`${separator.repeat(30)}\nYou have died...\nBetter luck next time !\n`);
}

export function victory(player: Entity, enemy : Entity, floor: Floor) {
  console.clear();
  enemy.lastAction = '';
  if (floor.nb === floor.max) {
    displayTitle();
    rl.question('You have done it, Adventurer ! \nAll the badies are dead.\nYou can rest now...\n');
  } else if (floor.nb % 10 === 0) {
    fightLog(player, enemy);
    rl.question(`\nCongratulations, Adventurer ! \nYou have shown ${enemy.name} who is really the boss !\n`);
  } else {
    fightLog(player, enemy);
    rl.question(`\nWell done ! You are done with ${enemy.name}.\nGet ready for your next fight...\n`);
  }
  if (player.coins !== undefined) {
    rl.question(`You have ${player.coins} coins ! \nOnly ${1000000 - player.coins} left to get the Ganon Halloween Skin !`);
  }
}
