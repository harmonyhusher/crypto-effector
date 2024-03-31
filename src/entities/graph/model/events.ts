import { createEvent } from "effector";
import { GraphI } from "./types";

export const changeSettings = createEvent<Pick<GraphI, "settings">>();
export const changeApi = createEvent<Pick<GraphI, "api">>();
