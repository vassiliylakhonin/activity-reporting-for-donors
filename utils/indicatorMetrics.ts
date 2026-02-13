export const getIndicatorTarget = (target: number | string, achieved: number): number => {
  if (typeof target === 'number' && Number.isFinite(target) && target > 0) {
    return target;
  }
  return achieved > 0 ? achieved : 1;
};

export const calculatePerformancePercent = (achieved: number, target: number | string): number | null => {
  if (!Number.isFinite(achieved) || achieved < 0) {
    return null;
  }
  const baseline = getIndicatorTarget(target, achieved);
  if (!Number.isFinite(baseline) || baseline <= 0) {
    return null;
  }
  return Math.round((achieved / baseline) * 100);
};
