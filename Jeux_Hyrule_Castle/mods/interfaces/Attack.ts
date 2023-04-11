export default interface Attack {
  dmg: number,
  type: string,
  effectiveness?: number,
  critical?: boolean,
  dodged?: boolean,
}
