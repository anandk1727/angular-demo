import { ScoutApiData, ScoutObject } from '../types';

export function toScoutObject(raw: ScoutApiData): ScoutObject {
  return {
    designation: raw.objectName,
    observations: raw.nObs,
    arcDays: toNumber(raw.arc),
    absoluteMagnitude: toNumber(raw.H),
    visualMagnitude: toNumber(raw.Vmag),
    rating: raw.rating,
    neoScore: raw.neoScore,
    phaScore: raw.phaScore,
    ieoScore: raw.ieoScore,
    geocentricScore: raw.geocentricScore,
    moidAu: toNumber(raw.moid),
    closeApproachLd: toNumber(raw.caDist),
    vInfKms: toNumber(raw.vInf),
    rightAscension: raw.ra,
    declinationDeg: toNumber(raw.dec),
    rateArcsecPerMin: toNumber(raw.rate),
    elongationDeg: toNumber(raw.elong),
    uncertaintyArcmin: toNumber(raw.unc),
    uncertaintyP1Arcmin: toNumber(raw.uncP1),
    ephemerisTime: toUtcDate(raw.tEphem),
    lastRun: toUtcDate(raw.lastRun),
  };
}

function toNumber(value: string | number | null | undefined): number | null {
  if (value === null || value === undefined || value === '') return null;
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

function toUtcDate(value: string | null | undefined): Date | null {
  if (!value) return null;
  const date = new Date(`${value.replace(' ', 'T')}Z`);
  return Number.isNaN(date.getTime()) ? null : date;
}
