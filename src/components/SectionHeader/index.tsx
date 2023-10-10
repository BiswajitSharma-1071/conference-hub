import React from "react";
import { Logo} from "../../assets";

type IProps = {
  activeSection: string;
};

const SectionHeader: React.FunctionComponent<IProps> = ({ activeSection }) => {
  return (
    <>
      <div className="headerSection">
        <Logo sx={{ fontSize: 300 }} viewBox=" 70 -40 90 250" />{" "}
        <div className="conference-img"></div>
      </div>
    </>
  );
};

export default SectionHeader;
