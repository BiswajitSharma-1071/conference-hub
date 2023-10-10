// import { IAPIResponseDetails } from "./apiModels";

import React from "react";
import { IAPIResponseDetails } from "./apiModels";

export interface IItemData {
  id: string;
  name: string;
  label: string;
  desc?: string;
}

export interface ITokenUser {
  firstName: string;
  lastName: string;
  email: string;
}

export interface IPlatformDetails extends Partial<IItemData> {
  platformImage?: () => JSX.Element | React.ReactNode;
}

export interface IRoomSize extends Partial<IItemData> {
  size?: number;
  roomImage?: () => JSX.Element | React.ReactNode;
}

export interface ISystemSetup extends Partial<IItemData> {
  descExt?: string;
}

export interface ICameraOptions extends Partial<IItemData> {
  cameraImage?: () => JSX.Element | React.ReactNode;
}

export interface IAudioOptions extends Partial<IItemData> {
  audioImage?: () => JSX.Element | React.ReactNode;
}

export interface IControllerOptions extends Partial<IItemData> {
  controllerImage?: () => JSX.Element | React.ReactNode;
}

export interface IAccessory extends Partial<IItemData> {
  accessoryImage?: () => JSX.Element | React.ReactNode;
}

export interface IAccessories {
  cameraAccessories?: ICameraOptions;
  audioiAccessories?: IAudioOptions;
  generalAccessories?: IAccessory;
}

export interface IConferenceDetails {
  selectedPlatform: IPlatformDetails;
  selectedRoomSize: IRoomSize;
  selectedSystem: ISystemSetup;
  selectedCamera: ICameraOptions;
  selctedAudio: IAudioOptions;
  controller: IControllerOptions;
  accessories?: IAccessories;
}

export interface AppState {
  user?: ITokenUser;
  userConferenceDetails?: Array<IConferenceDetails>;
  platform?: IAPIResponseDetails<IPlatformDetails>;
  roomSize?: IAPIResponseDetails<IRoomSize>;
  system?: IAPIResponseDetails<ISystemSetup>;
  camera?: IAPIResponseDetails<ICameraOptions>;
  audio?: IAPIResponseDetails<IAudioOptions>;
  controller?: IAPIResponseDetails<IControllerOptions>;
  accessories?: IAPIResponseDetails<IAccessories>;
}
