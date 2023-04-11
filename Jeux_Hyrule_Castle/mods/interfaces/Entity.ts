import Class from "./Class";
import Race from "./Race";

export default interface Entity {
  id: number,
  boss?: boolean,
  name: string,
  hp: number,
  maxHP?: number,
  protect?: boolean,
  mp: number,
  str: number,
  int: number,
  def: number,
  res: number,
  spd: number,
  luck: number,
  race: number,
  raceData: Race,
  class: number,
  classData: Class,
  rarity: number,
  lastAction?: string,
  coins?: number,
}
