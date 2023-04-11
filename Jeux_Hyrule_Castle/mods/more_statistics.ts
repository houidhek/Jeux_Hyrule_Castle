import Attack from './interfaces/Attack';
import Entity from './interfaces/Entity';
import { getRandomInt } from './maths';

export default function calcDmg(attacker: Entity, defender: Entity) {
  // base
  const attack: Attack = { dmg: attacker.str, type: attacker.classData.attack_type };
  // critic
  if (getRandomInt(100) <= attacker.luck) { attack.dmg *= 2; attack.critical = true; }
  // res/def
  if (attack.type === 'physical') { attack.dmg -= (attack.dmg * (defender.def / 100)); }
  if (attack.type === 'magical') { attack.dmg -= (attack.dmg * (defender.res / 100)); }
  // weak/strong
  attack.effectiveness = 0;
  if (attacker.classData.strengths.includes(defender.class)) {
    attack.dmg *= 2; attack.effectiveness += 1;
  }
  if (attacker.raceData.strength.includes(defender.race)) {
    attack.dmg *= 2; attack.effectiveness += 1;
  }
  if (attacker.classData.weaknesses.includes(defender.class)) {
    attack.dmg /= 2; attack.effectiveness -= 1;
  }
  if (attacker.raceData.weakness.includes(defender.race)) {
    attack.dmg /= 2; attack.effectiveness -= 1;
  }
  // protect
  if (defender.protect === true) { attack.dmg /= 2; }
  // round down
  attack.dmg = Math.floor(attack.dmg);
  // log
  if (attack.dmg < 0) { attack.dmg = 0; }
  attacker.lastAction = `${attacker.name} dealt ${attack.dmg} damage !`;
  if (attack.critical === true) { attacker.lastAction += '\n\x1b[3mCritical hit !\x1b[0m'; }
  if (attack.effectiveness > 0) { attacker.lastAction += '\n\x1b[3mCrushing hit !\x1b[0m'; }
  if (attack.effectiveness < 0) { attacker.lastAction += '\n\x1b[3mGlancing hit !\x1b[0m'; }
  // dodgde
  if (getRandomInt(100) < (defender.spd - attacker.spd)) {
    attack.dmg = 0;
    attack.dodged = true;
    attacker.lastAction = `${defender.name} dodged the attack !`;
  }
  defender.hp -= attack.dmg;
  if (defender.hp < 0) { defender.hp = 0; }
}
