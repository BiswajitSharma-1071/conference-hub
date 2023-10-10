import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { SelectableCard } from "../GenericComponents/Card";
import { Section } from "../../routes/Section";
import NavigationButtons from "../GenericComponents/NavigationButtons";
import { systemSetup } from "../../utils/sectionData";

const SystemSetup = () => {
  const [systemSelect, setSystemSelect] = useState<string>(null);
  const navigate = useNavigate();

  return (
    <>
      <h3 className="para1">{Section.SYSTEMSETUP.desc}</h3>
      <h5 className="para2">{Section.SYSTEMSETUP.descExt}</h5>
      <div className="system-list">
        {systemSetup.map((system) => {
          return (
            <SelectableCard
              key={system.id}
              handleClick={() => setSystemSelect(system.id)}
              selected={systemSelect === system.id}
            >
              <div className="platform-card">
                <h3>{system.name}</h3>
                <p>{system.desc}</p>
                <p className="room-name">{system.descExt}</p>
              </div>
            </SelectableCard>
          );
        })}
      </div>
      <NavigationButtons
        onBackArrowClick={() => navigate(-1)}
        onNextArrowClick={() => console.log("No sections available after this")} //navigate(`/${Section.SYSTEMSETUP.path}`)}
        nextArrowDisabled={systemSelect === null}
      />
    </>
  );
};

export default SystemSetup;
