import { createStore } from 'effector';

import { AppI, Theme } from './types';
import { changeIsDraggble, changeTheme } from './events';

const initState: AppI = {
  theme: Theme.Dark,
  isDraggble: true,
};

export const $storeApp = createStore(initState)
  .on(changeTheme, (state, theme) => ({
    ...state,
    theme,
  }))
  .on(changeIsDraggble, (state, isDraggble) => ({
    ...state,
    isDraggble,
  }));
