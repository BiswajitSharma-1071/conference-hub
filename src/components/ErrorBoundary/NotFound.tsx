import { Alert, AlertTitle } from "@mui/material";
import { NavLink } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <Alert severity="error">
        <AlertTitle>404! This view doesn't exist</AlertTitle>
        Somehow you have reached a page which doesnot exist. Please check the
        url to make sure there are no typos
      </Alert>
      <NavLink to="/">Take me home</NavLink>
    </>
  );
};

