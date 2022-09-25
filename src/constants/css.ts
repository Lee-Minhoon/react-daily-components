export const TRANSITION_NORMAL = 0.25 as const;
export const TRANSITION_FAST = 0.15 as const;

export const VIRTUAL_ELEMENT = `
  content: "";
  position: absolute;
  box-sizing: inherit;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
` as const;

export const OUT_SHADOW = `
  0 0 4px 1px rgba(0, 0, 0, 0.3)
` as const;

export const INSET_SHADOW = `
  inset 0 0 4px rgba(0, 0, 0, 0.1)
` as const;

export const ELLIPSIS = `overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
` as const;
