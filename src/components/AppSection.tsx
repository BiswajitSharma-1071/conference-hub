import React from "react";
import { useParams } from "react-router-dom";
import { LazyComponent } from "../routes/AppRoutes";
import { Section } from "../routes/Section";

const ActivitySelector = React.lazy(() =>
  import("../components/ActivitySelector").then((module) => ({
    default: module.default,
  }))
);

const NewConference = React.lazy(() =>
  import("../components/NewConference").then((module) => ({
    default: module.default,
  }))
);

const UpdateConference = React.lazy(() =>
  import("../components/UpdateConference").then((module) => ({
    default: module.default,
  }))
);

const RemoveConference = React.lazy(() =>
  import("../components/RemoveConference").then((module) => ({
    default: module.default,
  }))
);

const PlatformSelector = React.lazy(() =>
  import("../components/PlatformSelector").then((module) => ({
    default: module.default,
  }))
);

const RoomSizeSelector = React.lazy(() =>
  import("../components/RoomSizeSelector").then((module) => ({
    default: module.default,
  }))
);

const SystemSetupSelector = React.lazy(() =>
  import("../components/SystemSetup").then((module) => ({
    default: module.default,
  }))
);

const AppSection = () => {
  let { section } = useParams();

  switch (section) {
    case Section.ACTIVITY.path:
      return LazyComponent(ActivitySelector);
    case Section.NEW_CONFERENCE.path:
      return LazyComponent(NewConference);
    case Section.UPDATE_CONFERENCE.path:
      return LazyComponent(UpdateConference);
    case Section.REMOVE_CONFERENCE.path:
      return LazyComponent(RemoveConference);
    case Section.PLATFORM.path:
      return LazyComponent(PlatformSelector);
    case Section.ROOMSIZE.path:
      return LazyComponent(RoomSizeSelector);
    case Section.SYSTEMSETUP.path:
      return LazyComponent(SystemSetupSelector);

    default:
      return new Error();
  }
};

export default AppSection;
