import { v4 as uuid } from "uuid";
import { GMeetIcon, MSTeamsIcon, ZoomIcon } from "../assets";
import {
  IPlatformDetails,
  IRoomSize,
  ISystemSetup,
} from "../models/stateModels";

export const platforms: IPlatformDetails[] = [
  {
    id: uuid(),
    name: "Microsoft Teams",
    label: "Microsoft",
    platformImage() {
      return <MSTeamsIcon sx={{ fontSize: 150 }} viewBox=" 20 2 5 45" />;
    },
  },
  {
    id: uuid(),
    name: "Zoom Rooms",
    label: "Zoom",
    platformImage() {
      return <ZoomIcon sx={{ fontSize: 150 }} viewBox=" 20 2 5 45" />;
    },
  },
  {
    id: uuid(),
    name: "Google Meet",
    label: "Google",
    platformImage() {
      return <GMeetIcon sx={{ fontSize: 150 }} viewBox=" 20 2 5 45" />;
    },
  },
];

export const rooms: IRoomSize[] = [
  {
    id: uuid(),
    name: "Phone Booth",
    size: 3,
    roomImage() {
      return <div className="phonebooth-img"></div>;
    },
  },
  {
    id: uuid(),
    name: "Huddle Room",
    size: 6,
    roomImage() {
      return <div className="huddle-img"></div>;
    },
  },
  {
    id: uuid(),
    name: "Medium Room",
    size: 12,
    roomImage() {
      return <div className="medium-img"></div>;
    },
  },
  {
    id: uuid(),
    name: "Medium Plus Room",
    size: 16,
    roomImage() {
      return <div className="medium-plus-img"></div>;
    },
  },
  {
    id: uuid(),
    name: "Large Room",
    size: 20,
    roomImage() {
      return <div className="large-img"></div>;
    },
  },
  {
    id: uuid(),
    name: "Board Room",
    size: 30,
    roomImage() {
      return <div className="board-img"></div>;
    },
  },
  {
    id: uuid(),
    name: "Presentation Room",
    size: 40,
    roomImage() {
      return <div className="presentation-img"></div>;
    },
  },
];

export const systemSetup: ISystemSetup[] = [
  {
    id: uuid(),
    name: "Appliance-Based",
    desc: "Appliance-Based Video Conferencing Solution",
    descExt: "A pre-configured video conferencing system, no PC required",
  },
  {
    id: uuid(),
    name: "PC-Based",
    desc: "PC-Based Video Conferencing Solution",
    descExt: "Plug and play with any PC, Mac, or Chromebox via USB.",
  },
];
