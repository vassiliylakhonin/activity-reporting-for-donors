import { describe, expect, it } from 'vitest';
import { calculatePerformancePercent, getIndicatorTarget } from './indicatorMetrics';

describe('getIndicatorTarget', () => {
  it('returns numeric target when valid', () => {
    expect(getIndicatorTarget(50, 69)).toBe(50);
  });

  it('falls back to achieved when target is not numeric', () => {
    expect(getIndicatorTarget('n/a', 69)).toBe(69);
  });

  it('never returns zero or negative baseline', () => {
    expect(getIndicatorTarget(0, 0)).toBe(1);
  });
});

describe('calculatePerformancePercent', () => {
  it('calculates rounded percent for numeric target', () => {
    expect(calculatePerformancePercent(69, 50)).toBe(138);
  });

  it('returns 100 when target is non-numeric and achieved is baseline', () => {
    expect(calculatePerformancePercent(34, 'not-set')).toBe(100);
  });

  it('returns null for invalid achieved values', () => {
    expect(calculatePerformancePercent(Number.NaN, 50)).toBeNull();
  });
});
