interface BaseRoll {
  name: string
  roll: string
}

interface DescrRoll extends BaseRoll {
  description: string
}

export interface AnomalyEvent extends BaseRoll {}
export interface AreaConnector {
  roll: string
  description: string
}
export interface Arrival extends BaseRoll {}
export interface Background extends DescrRoll {
  options: string
}
export interface CombatEvent extends BaseRoll {}
export interface CombatStance extends BaseRoll {
  modifiers: string[]
}
export interface CrewTravelEvent extends BaseRoll {}
export interface CriticalInjury extends BaseRoll {
  effect: string
}
interface CriticalMissData extends BaseRoll {
  effect: string
}
export interface CriticalMiss {
  melee: CriticalMissData[]
  ranged: CriticalMissData[]
}
export interface DifficultyModifier extends BaseRoll {
  modifier: string
}
export interface EarnedPlace extends BaseRoll {}
export interface EncounterActivity extends BaseRoll {}
interface HitLocationData {
  roll: string
  location: string
  modifier: string
}
export interface HitLocation {
  target: string
  locations: HitLocationData[]
}
export interface Injury extends BaseRoll {
  effect: string
}
export interface KnownThread extends BaseRoll {}
export interface LifeEvent extends BaseRoll {}
export interface LoseStress {
  name: string
  result: string
}
export interface MalfunctionEvent extends BaseRoll {}
export interface Misjump {
  Misjump: BaseRoll[]
  'Time Dilation': BaseRoll[]
  'Transit Dilation': BaseRoll[]
  'Secondary Misjump Effects': BaseRoll[]
}
export interface NegativeTrait extends DescrRoll {}
export interface NervousTic extends BaseRoll {}
export interface NPCTarget extends BaseRoll {}
export interface Obsession extends DescrRoll {}
export interface ParasiteAttack extends BaseRoll {
  effect: string
}
export interface Placement extends BaseRoll {}
export interface PlanetarySiteDescriptor extends BaseRoll {}
export interface PoisonPotency {
  roll: string
  effect: string
}
interface Radiation {
  rads: string
  effect: string
}
export interface RadiationExposure {
  Direct: Radiation[]
  Cumulative: Radiation[]
}
export interface SiteActivity extends BaseRoll {}
export interface SiteDescriptor extends BaseRoll {}
export interface SiteExploration extends DescrRoll {}
export interface SiteHazard extends DescrRoll {}
export interface SiteName {
  roll: string
  first: string
  second: string
  numeric: string
}
export interface SitePurpose extends DescrRoll {}
export interface SiteSize extends DescrRoll {}
export interface SiteStory extends BaseRoll {}
export type SiteTime = string[]
export interface SocialEvent extends BaseRoll {}
export interface SpaceshipAdjective extends BaseRoll {}
export interface SpaceshipName extends BaseRoll {}
export interface StaminaCost {
  name: string
  cost: string
}
interface Stress extends BaseRoll {
  effect: string
}
export interface StressReaction {
  'Around Others': Stress[]
  Alone: Stress[]
}
export interface SuccessLevel extends BaseRoll {}
export interface Surprise extends BaseRoll {}
export interface Talent extends BaseRoll {
  cost: string
  effect: string
}
export interface Trauma {
  roll: string
  effect: string
}
export interface TravelEvent extends BaseRoll {}
