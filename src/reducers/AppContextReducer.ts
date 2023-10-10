import cloneDeep from "lodash/cloneDeep";
import { AppState } from "../models/stateModels";
import { getApiResourceObject } from "../utils/apiUtils";

export interface IAction<T, P> {
  type: T;
  payload?: Partial<P>;
}

export const initalAppState: AppState = {
  user: null,
  userConferenceDetails: null,
  platform: getApiResourceObject({}),
  roomSize: getApiResourceObject({}),
  system: getApiResourceObject({}),
  camera: getApiResourceObject({}),
  audio: getApiResourceObject({}),
  controller: getApiResourceObject({}),
  accessories: getApiResourceObject({}),
};

export interface IAppPayloadType extends AppState {}

export enum AppReducerActionType {
  UPDATE_USER_DETAILS = "UPDATE_USER_DETAILS",
  UPDATE_USER_CONFERENCE_DETAILS = "UPDATE_USER_CONFERENCE_DETAILS",
  UPDATE_PLATFORM = "UPDATE_PLATFORM",
  UPDATE_ROOM_SIZE = "UPDATE_ROOM_SIZE",
  UPDATE_SYSTEM = "UPDATE_SYSTEM",
  UPDATE_CAMERA = "UPDATE_CAMERA",
  UPDATE_AUDIO = "UPDATE_AUDIO",
  UPDATE_CONTROLLER = "UPDATE_CONTROLLER",
  UPDATE_ACCESSORIES = "UPDATE_ACCESSORIES",
}

type IActionType = IAction<AppReducerActionType, IAppPayloadType>;
export type AppReducerDispatchType = (value: IActionType) => void;

export const AppStateReducer = (
  previousState: AppState,
  action: IActionType
) => {
  let newState;
  switch (action.type) {
    case AppReducerActionType.UPDATE_USER_DETAILS:
      newState = cloneDeep(previousState);
      newState.user = {
        ...newState.user,
        ...action.payload.user,
      };
      return { ...previousState, newState };

    default:
      return {...previousState};
  }
};
