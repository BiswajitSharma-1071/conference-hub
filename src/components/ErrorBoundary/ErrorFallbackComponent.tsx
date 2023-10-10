import React, { useEffect } from "react";
import { Alert, AlertTitle, Button } from "@mui/material";
import Timer from "../GenericComponents/Timer";
import { Link, useNavigate } from "react-router-dom";

type IProps = {
  errorHeading?: string;
  errorMessage?: string;
  error?: Error;
};

const defaultProps: IProps = {
  errorHeading: "...OOP's",
  errorMessage: "An unexpected error occurred. Please try refreshing the page",
};

const ErrorFallbackComponent: React.FunctionComponent<IProps> = ({
  error,
  errorMessage,
  errorHeading,
}: IProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.reload();
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Alert severity="error">
        <AlertTitle>{errorHeading}</AlertTitle>
        <h4>{errorMessage}</h4>
        {"\n"}
        <div>
          <strong>Note: </strong>
          This page will automatically refresh in{" "}
          <Timer seconds={10} onTimerUpText="Refreshing Page" />
        </div>
        <Button
          variant="text"
          onClick={() => {
            navigate("/");
            window.location.reload();
          }}
        >
          Take me home
        </Button>
      </Alert>
    </>
  );
};

ErrorFallbackComponent.defaultProps = defaultProps;

export default ErrorFallbackComponent;
