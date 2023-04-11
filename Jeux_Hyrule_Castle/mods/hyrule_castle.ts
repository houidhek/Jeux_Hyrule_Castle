import Entity from './interfaces/Entity';
import Floor from './interfaces/Floor';
import { importPlayer, importEnemy } from './entityGen';
import combat from './combat';
import { playerDeath, victory } from './fightInfo';
import mainMenu from './basic_game_customization';

export default function hyruleCastle() {
  const floor: Floor = { nb: 1, max: 10, difficulty: 1 };
  mainMenu(floor);
  const player: Entity = importPlayer();
  player.maxHP = player.hp;
  player.coins = 12;
  let enemy: Entity = importEnemy(floor);

  while (floor.nb <= floor.max) {
    enemy = importEnemy(floor);
    enemy.maxHP = enemy.hp;
    player.lastAction = '';
    do {
      combat(player, enemy, floor);
    } while (enemy.hp > 0 && player.hp > 0);
    if (player.hp === 0) {
      playerDeath(player, enemy);
      break;
    }
    player.coins += 1;
    victory(player, enemy, floor);
    floor.nb += 1;
  }
}

hyruleCastle();
