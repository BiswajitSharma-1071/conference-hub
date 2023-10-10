import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { SelectableTitleCard } from "../GenericComponents/Card";
import { Section } from "../../routes/Section";
import NavigationButtons from "../GenericComponents/NavigationButtons";

const ActivitySelector = () => {
  const [activity, setactivity] = useState(null);
  const navigate = useNavigate();

  return (
    <>
      <div className="activity-list">
        <SelectableTitleCard
          title={Section.NEW_CONFERENCE.label}
          description={Section.NEW_CONFERENCE.desc}
          selected={activity === Section.NEW_CONFERENCE.path}
          handleClick={() => setactivity(Section.NEW_CONFERENCE.path)}
        />
        <SelectableTitleCard
          title={Section.UPDATE_CONFERENCE.label}
          description={Section.UPDATE_CONFERENCE.desc}
          selected={activity === Section.UPDATE_CONFERENCE.path}
          handleClick={() => setactivity(Section.UPDATE_CONFERENCE.path)}
        />
        <SelectableTitleCard
          title={Section.REMOVE_CONFERENCE.label}
          description={Section.REMOVE_CONFERENCE.desc}
          selected={activity === Section.REMOVE_CONFERENCE.path}
          handleClick={() => setactivity(Section.REMOVE_CONFERENCE.path)}
        />
      </div>
      <NavigationButtons
        onBackArrowClick={() => navigate(-1)}
        onNextArrowClick={() =>
          Section.NEW_CONFERENCE.path === activity
            ? navigate(`/${Section.PLATFORM.path}`)
            : navigate(`/${activity}`)
        }
        nextArrowDisabled={activity === null}
      />
    </>
  );
};

export default ActivitySelector;
