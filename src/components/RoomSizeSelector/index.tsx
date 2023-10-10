import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { SelectableCard } from "../GenericComponents/Card";
import { Section } from "../../routes/Section";
import NavigationButtons from "../GenericComponents/NavigationButtons";
import { rooms } from "../../utils/sectionData";

const RoomSizeSelector = () => {
  const [roomSize, setRoomSize] = useState<string>(null);
  const navigate = useNavigate();

  return (
    <>
      <div className="room-list">
        {rooms.map((room) => {
          return (
            <SelectableCard
              key={room.id}
              handleClick={() => setRoomSize(room.id)}
              selected={roomSize === room.id}
            >
              <div className="platform-card">
                <h3>{`Up to ${room.size}`}</h3>
                {room.roomImage()}
                <p className="room-name">{room.name}</p>
              </div>
            </SelectableCard>
          );
        })}
      </div>
      <NavigationButtons
        onBackArrowClick={() => navigate(-1)}
        onNextArrowClick={() => navigate(`/${Section.SYSTEMSETUP.path}`)}
        nextArrowDisabled={roomSize === null}
      />
    </>
  );
};

export default RoomSizeSelector;
