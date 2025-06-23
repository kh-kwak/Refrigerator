export type Door =
  | "left-top-door"
  | "right-top-door"
  | "top-inner-1"
  | "top-inner-2"
  | "top-inner-3"
  | "left-bottom-door"
  | "right-bottom-door"
  | "left-bottom-inner-1"
  | "left-bottom-inner-2"
  | "left-bottom-inner-3"
  | "right-bottom-inner-1"
  | "right-bottom-inner-2"
  | "right-bottom-inner-3";

export type DoorStates = Record<Door, string[]>;

export const initialDoorStates: DoorStates = {
  "left-top-door": [],
  "right-top-door": [],
  "top-inner-1": [],
  "top-inner-2": [],
  "top-inner-3": [],
  "left-bottom-door": [],
  "right-bottom-door": [],
  "left-bottom-inner-1": [],
  "left-bottom-inner-2": [],
  "left-bottom-inner-3": [],
  "right-bottom-inner-1": [],
  "right-bottom-inner-2": [],
  "right-bottom-inner-3": [],
};
