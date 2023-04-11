export function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

export function getRarity() {
  let rarity: number = 0;
  const random: number = getRandomInt(100);
  if (random === 0) { rarity = 5; } else if
  (random <= 50) { rarity = 1; } else if
  (random <= 80) { rarity = 2; } else if
  (random <= 95) { rarity = 3; } else if
  (random <= 99) { rarity = 4; }
  return rarity;
}
