import { Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

type INavButtonProps = {
  onBackArrowClick: () => void;
  onNextArrowClick: () => void;
  nextArrowDisabled?: boolean;
  backArrowText?: string;
  nextArrowText?: string;
};

const NavigationButtons: React.FunctionComponent<INavButtonProps> = (props) => {
  return (
    <div className="buttons-align">
      <Button
        variant="contained"
        color="secondary"
        startIcon={<ArrowBackIcon />}
        onClick={props.onBackArrowClick}
      >
        {props.backArrowText ? props.backArrowText : "Go back"}
      </Button>
      <Button
        variant="contained"
        color="primary"
        style={{ marginLeft: "1rem" }}
        endIcon={<ArrowForwardIcon />}
        onClick={props.onNextArrowClick}
        disabled={!!props.nextArrowDisabled}
      >
        {props.nextArrowText ? props.nextArrowText : "Next"}
      </Button>
    </div>
  );
};

export default NavigationButtons;
