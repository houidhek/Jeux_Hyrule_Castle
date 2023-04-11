import Floor from './interfaces/Floor';

const rl = require('readline-sync');

export function displayTitle() {
  console.clear();
  console.log('\x1b[32m ╔╗ ╔╗        ╔╗    ╔═══╗     ╔╗╔╗    ');
  console.log(' ║║ ║║        ║║    ║╔═╗║    ╔╝╚╣║    ');
  console.log(' ║╚═╝╠╗ ╔╦═╦╗╔╣║╔══╗║║ ╚╬══╦═╩╗╔╣║╔══╗');
  console.log(' ║╔═╗║║ ║║╔╣║║║║║║═╣║║ ╔╣╔╗║══╣║║║║║═╣');
  console.log(' ║║ ║║╚═╝║║║╚╝║╚╣║═╣║╚═╝║╔╗╠══║╚╣╚╣║═╣');
  console.log(' ╚╝ ╚╩═╗╔╩╝╚══╩═╩══╝╚═══╩╝╚╩══╩═╩═╩══╝');
  console.log('     ╔═╝║');
  console.log('     ╚══╝');
  console.log('\x1b[33m=======================================\x1b[0m\n');
}

function selectDifficulty(floor: Floor) {
  let answer: number = 0;
  while (answer !== 1 && answer !== 2 && answer !== 3) {
    displayTitle();
    console.log('Choose your difficulty :');
    answer = parseInt(rl.question(' 1. Normal    2. Difficult    3. Insane\n'), 10);
  }
  if (answer === 1) { floor.difficulty = 1; }
  if (answer === 2) { floor.difficulty = 1.5; }
  if (answer === 3) { floor.difficulty = 2; }
  return floor;
}

function setMaxFloor(floor: Floor) {
  let answer: number = 0;
  while (answer !== 10 && answer !== 20 && answer !== 50 && answer !== 100) {
    displayTitle();
    console.log('How many floors do you wish to challenge ?');
    answer = parseInt(rl.question('      10      20      50      100      \n'), 10);
  }
  floor.max = answer;
}

export default function mainMenu(floor: Floor) {
  let answer: number = 0;
  while (answer !== 1 && answer !== 2 && answer !== 3) {
    displayTitle();
    answer = parseInt(rl.question('1. New Game     2. Continue     3. Quit\n'), 10);
  }
  if (answer === 1) { selectDifficulty(floor); setMaxFloor(floor); }
  if (answer === 2) { console.log('come back later'); process.exit(0); }
  if (answer === 3) { process.exit(0); }
  return floor;
}
