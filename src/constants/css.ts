export const INF = 9999;
export const TRANSITION_NORMAL = 0.25 as const;
export const TRANSITION_FAST = 0.15 as const;

export const OUT_SHADOW = `
  0 0 4px 1px rgba(0, 0, 0, 0.3)
` as const;

export const INSET_SHADOW = `
  inset 0 0 4px rgba(0, 0, 0, 0.1)
` as const;

export const FULL_INSET_SHADOW = `
  inset ${INF}px ${INF}px ${INF}px rgba(0, 0, 0, 0.1)
` as const;

export const ELLIPSIS = `overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
` as const;
