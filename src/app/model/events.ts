import { createEvent } from 'effector';

import { Theme } from './types';

export const changeTheme = createEvent<Theme>();
export const changeIsDraggble = createEvent<boolean>();
