import React, { HTMLInputTypeAttribute } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { TransitionProps } from "@mui/material/transitions";
import Slide from "@mui/material/Slide";
import { Fade, Zoom } from "@mui/material";

export type IInputData = {
  id: string;
  fieldName: string;
  fieldType: HTMLInputTypeAttribute;
  fieldLabel: string;
};

type IProps = {
  isOpen: boolean;
  header: React.ReactNode | string;
  bodyText?: React.ReactNode | string;
  inputData?: IInputData[];
  confirmAction?: boolean;
  cancelAction?: boolean;
  confirmHandler?: () => void;
};

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Zoom in style={{ transitionDelay: "500ms" }} ref={ref} {...props} />;
  //   return <Slide direction="up" ref={ref} {...props} />;
});

const InputModal: React.FunctionComponent<IProps> = ({
  isOpen,
  header,
  bodyText,
  inputData,
  confirmAction,
  cancelAction,
  confirmHandler,
}) => {
  const [open, setOpen] = React.useState<boolean>(isOpen);

  const handleConfirm = () => {
    confirmHandler !== undefined && confirmHandler();
    setOpen(false);
  };

  const handleClose = () => setOpen(false);

  return (
    <Dialog open={open} TransitionComponent={Transition}>
      <DialogTitle>{header}</DialogTitle>
      <DialogContent>
        {bodyText ? <DialogContentText>{bodyText}</DialogContentText> : null}
        {inputData?.length
          ? inputData.map((elem) => (
              <TextField
                key={elem.id}
                autoFocus
                margin="normal"
                id={elem.fieldName}
                label={elem.fieldLabel}
                type={elem.fieldType}
                fullWidth
                variant="standard"
              />
            ))
          : null}
      </DialogContent>
      <DialogActions>
        {confirmAction ? (
          <Button onClick={handleConfirm}>Confirm</Button>
        ) : null}
        {cancelAction ? <Button onClick={handleClose}>Cancel</Button> : null}
      </DialogActions>
    </Dialog>
  );
};

export default InputModal;
