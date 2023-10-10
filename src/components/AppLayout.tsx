import { Outlet, useParams } from "react-router-dom";
import { DellIcon } from "../assets";
import SectionHeader from "./SectionHeader";

export const AppLayout: React.FunctionComponent = () => {
  let { section } = useParams();

  return (
    <>
      <SectionHeader activeSection={section}/>
      <Outlet />
    </>
  );
};
