import { Alert } from "@mui/material";

export enum ToastType {
  DANGER = "error",
  INFO = "info",
  SUCCESS = "success",
  WARNING = "warning",
}

interface IProps {
  severity: ToastType;
  message: React.ReactNode | string;
  closeToast?: () => void;
  children?: React.ReactNode;
}


const AlertComponent = ({severity,message,closeToast,children}:IProps) =>{

    return <Alert>
        
    </Alert>
}