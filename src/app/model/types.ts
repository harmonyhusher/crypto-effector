export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export interface AppI {
  theme: Theme;
  isDraggble: boolean;
}
