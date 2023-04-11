import { Entity } from './Entity';

const rl = require('readline-sync');

export function playerAttack(player: Entity, enemy: Entity) {
  enemy.hp -= player.str;
  if (enemy.hp < 0) { enemy.hp = 0; }
  player.lastAction = `You attacked and dealt ${player.str} damage !`;
  return player;
}

export function playerHeal(player: Entity) {
  if (player.maxHP !== undefined) {
    player.hp += player.maxHP / 2;
    if (player.hp > player.maxHP) { player.hp = player.maxHP; }
    player.lastAction = `You healed yourself for ${player.maxHP / 2} health!`;
  }
  return player;
}

export function playerStumble(player: Entity) {
  player.hp -= 2;
  if (player.hp < 0) { player.hp = 0; }
  player.lastAction = 'Oh no ! That\'s embarrasing... You have hurt yourself !';
  return player;
}

export function enemyAttack(player: Entity, enemy: Entity) {
  player.hp -= enemy.str;
  if (player.hp < 0) { player.hp = 0; }
  enemy.lastAction = `${enemy.name} attacked and dealt ${enemy.str} damage !`;
  return enemy;
}

export function generalFight(player: Entity, enemy: Entity) {
  const answer: number = parseInt(rl.question('What is your next move, adventurer ?\n1. Attack\t2. Heal\n'), 10);
  if (answer === 1) {
    playerAttack(player, enemy);
  } else if (answer === 2) {
    playerHeal(player);
  } else {
    playerStumble(player);
  }
  if (enemy.hp > 0) {
    enemyAttack(player, enemy);
  }
}
