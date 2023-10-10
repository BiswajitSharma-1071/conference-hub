import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { SelectableCard } from "../GenericComponents/Card";
import { Section } from "../../routes/Section";
import NavigationButtons from "../GenericComponents/NavigationButtons";
import { platforms } from "../../utils/sectionData";

const PlatformSelector = () => {
  const [platform, setPlatform] = useState<string>(null);
  const navigate = useNavigate();

  return (
    <>
      <div className="activity-list">
        {platforms.map((plat) => {
          return (
            <SelectableCard
              key={plat.id}
              handleClick={() => setPlatform(plat.id)}
              selected={platform === plat.id}
            >
              <div className="platform-card">
                <h3>{plat.label}</h3>
                {plat.platformImage()}
                <p className="platform-name">{plat.name}</p>
              </div>
            </SelectableCard>
          );
        })}
      </div>
      <NavigationButtons
        onBackArrowClick={() => navigate(-1)}
        onNextArrowClick={() => navigate(`/${Section.ROOMSIZE.path}`)}
        nextArrowDisabled={platform === null}
      />
    </>
  );
};

export default PlatformSelector;
