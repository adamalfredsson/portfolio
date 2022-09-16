import { BREAKPOINTS } from "../config/breakpoints";

const RESPONSIVE_MIXIN_DEFAULT = "default";

export type ResponsiveValues = Array<number | null>;

export const responsive = (name: string, values: ResponsiveValues) =>
  values.reduce<Record<string, number | null>>((acc, val, i) => {
    const breakpoint = BREAKPOINTS[i - 1];
    acc[`${name}-${breakpoint ?? RESPONSIVE_MIXIN_DEFAULT}`] = val;
    return acc;
  }, {});
