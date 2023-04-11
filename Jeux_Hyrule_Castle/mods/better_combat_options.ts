import Entity from './interfaces/Entity';
import { getRandomInt } from './maths';

export function playerProtect(player: Entity) {
  player.protect = true;
  player.lastAction = 'You protected yourself.';
}

export function playerEscape(player: Entity, enemy: Entity) {
  const random: number = getRandomInt(100);
  if (random === 0) {
    player.hp = 0;
    player.lastAction = 'You escaped the fight, but stumbled in the stairs and fell to your death...';
  } else if (random <= 50) {
    player.hp -= enemy.str;
    player.lastAction = 'You escaped the fight, but still took a blow';
  } else if (random <= 29) {
    player.hp -= Math.floor(enemy.str / 2);
    player.lastAction = 'You escaped and only took some damage.';
  } else if (random <= 10) {
    player.lastAction = 'You escaped without a scratch !';
  }
  enemy.hp = 0;
}
