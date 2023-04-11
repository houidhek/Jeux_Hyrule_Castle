import Entity from './interfaces/Entity';
import Floor from './interfaces/Floor';
import { playerHeal, playerStumble } from './fightMechanics';
import { playerProtect, playerEscape } from './better_combat_options';
import { displayOptions, fightHeader, fightLog } from './fightInfo';
import displayStats from './basic_characteristics';
import calcDmg from './more_statistics';

const rl = require('readline-sync');

export default function combat(player: Entity, enemy: Entity, floor : Floor) {
  player.protect = false;
  if (player.spd < enemy.spd) { calcDmg(enemy, player); }
  fightLog(player, enemy);
  fightHeader(player, enemy, floor);
  let answer: string = '';
  answer = rl.question(displayOptions());
  if (answer === '1' || answer.toLocaleLowerCase() === 'attack') {
    calcDmg(player, enemy);
  } else if (answer === '2' || answer.toLocaleLowerCase() === 'protect') {
    playerProtect(player);
  } else if (answer === '3' || answer.toLocaleLowerCase() === 'heal') {
    playerHeal(player);
  } else if (answer === '4' || answer.toLocaleLowerCase() === 'character') {
    displayStats(player);
    rl.question('\n=== Press Enter to return to the fight ===');
    return;
  } else if (answer === '5' || answer.toLocaleLowerCase() === 'escape') {
    if (enemy.boss === true) {
      player.lastAction = `You cannot escape ! ${enemy.name} is blocking every exit !`;
    } else { playerEscape(player, enemy); }
  } else {
    playerStumble(player);
  }
  if (enemy.hp > 0 && player.spd > enemy.spd) {
    calcDmg(enemy, player);
  }
}
