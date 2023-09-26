import anomalyEventData from './data/anomalyEvent.json'
import arrivalData from './data/arrival.json'
import backgroundData from './data/background.json'
import combatEventData from './data/combatEvent.json'
import combatStanceData from './data/combatStance.json'
import crewTravelEventData from './data/crewTravelEvent.json'
import criticalInjuryData from './data/criticalInjury.json'
import criticalMissData from './data/criticalMiss.json'
import difficultyModifierData from './data/difficultyModifier.json'
import earnedPlaceData from './data/earnedPlace.json'
import encounterActivityData from './data/encounterActivity.json'
import hitLocationData from './data/hitLocation.json'
import injuryData from './data/injury.json'
import lifeEventData from './data/lifeEvent.json'
import loseStressData from './data/loseStress.json'
import malfunctionEventData from './data/malfunctionEvent.json'
import misjumpData from './data/misjump.json'
import negativeTraitsData from './data/negativeTrait.json'
import nervousTicData from './data/nervousTic.json'
import npcTargetData from './data/npcTarget.json'
import obsessionData from './data/obsession.json'
import parasiteAttackData from './data/parasiteAttack.json'
import placementData from './data/placement.json'
import poisonPotencyData from './data/poisonPotency.json'
import radiationExposureData from './data/radiationExposure.json'
import sitePurposeData from './data/sitePurpose.json'
import siteTimeData from './data/siteTime.json'
import socialEventData from './data/socialEvent.json'
import spaceshipAdjectiveData from './data/spaceshipAdjective.json'
import spaceshipNameData from './data/spaceshipName.json'
import staminaCostData from './data/staminaCost.json'
import stressReactionData from './data/stressReaction.json'
import successLevelData from './data/successLevel.json'
import surpriseData from './data/surprise.json'
import talentData from './data/talent.json'
import traumaData from './data/trauma.json'
import travelEventData from './data/travelEvent.json'

import type {
  AnomalyEvent,
  Arrival,
  Background,
  CombatEvent,
  CombatStance,
  CrewTravelEvent,
  CriticalInjury,
  CriticalMiss,
  DifficultyModifier,
  EarnedPlace,
  EncounterActivity,
  HitLocation,
  Injury,
  LifeEvent,
  LoseStress,
  MalfunctionEvent,
  Misjump,
  NPCTarget,
  NegativeTrait,
  NervousTic,
  Obsession,
  ParasiteAttack,
  Placement,
  PoisonPotency,
  RadiationExposure,
  SitePurpose,
  SiteTime,
  SocialEvent,
  SpaceshipAdjective,
  SpaceshipName,
  StaminaCost,
  StressReaction,
  SuccessLevel,
  Surprise,
  Talent,
  Trauma,
  TravelEvent,
} from './types'

export const anomalyEvent: AnomalyEvent[] = anomalyEventData
export const arrival: Arrival[] = arrivalData
export const background: Background[] = backgroundData
export const combatEvent: CombatEvent[] = combatEventData
export const combatStance: CombatStance[] = combatStanceData
export const crewTravelEvent: CrewTravelEvent[] = crewTravelEventData
export const criticalInjury: CriticalInjury[] = criticalInjuryData
export const criticalMiss: CriticalMiss = criticalMissData
export const difficultyModifier: DifficultyModifier[] = difficultyModifierData
export const earnedPlace: EarnedPlace[] = earnedPlaceData
export const encounterActivity: EncounterActivity[] = encounterActivityData
export const hitLocation: HitLocation[] = hitLocationData
export const injuryTable: Injury[] = injuryData
export const lifeEvent: LifeEvent[] = lifeEventData
export const loseStress: LoseStress[] = loseStressData
export const malfunctionEvent: MalfunctionEvent[] = malfunctionEventData
export const misJump: Misjump = misjumpData
export const negativeTrait: NegativeTrait[] = negativeTraitsData
export const nervousTic: NervousTic[] = nervousTicData
export const npcTarget: NPCTarget[] = npcTargetData
export const obsession: Obsession[] = obsessionData
export const parasiteAttack: ParasiteAttack[] = parasiteAttackData
export const placement: Placement[] = placementData
export const poisonPotency: PoisonPotency[] = poisonPotencyData
export const radiationExposure: RadiationExposure = radiationExposureData
export const sitePurpose: SitePurpose[] = sitePurposeData
export const siteTime: SiteTime = siteTimeData
export const socialEvent: SocialEvent[] = socialEventData
export const spaceshipAdjective: SpaceshipAdjective[] = spaceshipAdjectiveData
export const spaceshipName: SpaceshipName[] = spaceshipNameData
export const staminaCost: StaminaCost[] = staminaCostData
export const stressReaction: StressReaction = stressReactionData
export const successLevel: SuccessLevel[] = successLevelData
export const surprise: Surprise[] = surpriseData
export const talent: Talent[] = talentData
export const trauma: Trauma[] = traumaData
export const travelEvent: TravelEvent[] = travelEventData
