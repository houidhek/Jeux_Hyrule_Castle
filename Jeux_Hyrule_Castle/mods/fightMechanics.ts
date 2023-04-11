import Entity from './interfaces/Entity';

export function playerHeal(player: Entity) {
  if (player.maxHP !== undefined) {
    player.hp += Math.ceil(player.maxHP / 2);
    if (player.hp > player.maxHP) { player.hp = player.maxHP; }
    player.lastAction = `You healed yourself for ${player.maxHP / 2} health!`;
  }
}

export function playerStumble(player: Entity) {
  player.hp -= 2;
  if (player.hp < 0) { player.hp = 0; }
  player.lastAction = 'Oh no ! That\'s embarrasing... You have hurt yourself !';
}
