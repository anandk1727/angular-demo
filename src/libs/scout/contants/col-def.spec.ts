import { ScoutColDef } from './index';
import { RawData } from './_specData';
import { toScoutObject } from '../utils/transformer/api.transformer';

const row = toScoutObject(RawData);
const col = (id: string) => ScoutColDef.find((c) => (c.colId ?? c.field) === id)!;
const call = (fn: any, params: object) => fn(params);

describe('ScoutColDef', () => {
  it('has unique column ids', () => {
    const ids = ScoutColDef.map((c) => c.colId ?? c.field);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('has only one default sort', () => {
    expect(ScoutColDef.filter((c) => c.sort).length).toBe(1);
  });

  it('risk column computes and formats a percentage', () => {
    const risk = col('risk');
    const value = call(risk.valueGetter, {
      data: { ...row, rating: 1, phaScore: 20, neoScore: 80 },
    });
    expect(value).toBeCloseTo(125 / 3);
    expect(call(risk.valueFormatter, { value })).toBe('42%');
  });

  it('shows — for missing values', () => {
    expect(call(col('closeApproachLd').valueFormatter, { value: null })).toBe('—');
  });
});
