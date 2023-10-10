import React from "react";
import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

const Home: React.FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <div className="text-section">
      <h3 className="heading1">
        TAKE THE GUESSWORK OUT OF YOUR VIDEO CONFERENCING SETUP
      </h3>
      <h1 className="heading2">
        Configure the perfect video collaboration setup for any meeting room
      </h1>
      <p>Not sure where to start? </p>
      <p style={{ marginBottom: "1.2rem" }}>
        Use our Room Configurator to instantly outfit any size meeting room with
        the perfect video conferencing solution
      </p>
      <Button
        variant="contained"
        color="primary"
        endIcon={<ArrowForwardIcon />}
        onClick={() => navigate("/activity-type")}
      >
        Start here
      </Button>
    </div>
  );
};

export default Home;
