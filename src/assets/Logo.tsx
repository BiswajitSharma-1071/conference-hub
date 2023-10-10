import { SvgIcon, SvgIconProps } from "@mui/material";

const Logo = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <path
        d="M134.92,48.47l-14,13.75a29.93,29.93,0,0,1-41.88,0L65.33,48.72A12.72,12.72,0,0,0,48,48.07a12,12,0,0,0-.43,17.58L61.37,79.17a29.15,29.15,0,0,1,0,41.65L47.62,134.35a12,12,0,0,0,0,17.18h0a12.48,12.48,0,0,0,17.46,0l14-13.75a29.93,29.93,0,0,1,41.88,0l13.73,13.5a12.72,12.72,0,0,0,17.28.65,12,12,0,0,0,.43-17.58l-13.75-13.53a29.15,29.15,0,0,1,0-41.65l13.75-13.53a12,12,0,0,0,0-17.18h0A12.48,12.48,0,0,0,134.92,48.47Z"
        fill="none"
        stroke="#220728"
        stroke-miterlimit="10"
        stroke-width="6.75"
      />
      <path
        d="M58.32,76.18A30,30,0,1,1,75.88,59.09"
        fill="none"
        stroke="#220728"
        stroke-miterlimit="10"
        stroke-width="8"
      />
      <circle
        cx="100"
        cy="100"
        r="16"
        fill="none"
        stroke="#ffc548"
        stroke-miterlimit="10"
        stroke-width="8"
      />
      <path
        d="M124.12,59.1a30,30,0,1,1,17.56,17.08"
        fill="none"
        stroke="#220728"
        stroke-miterlimit="10"
        stroke-width="8"
      />
      <path
        d="M76.16,140.63A30,30,0,1,1,59,123.1"
        fill="none"
        stroke="#220728"
        stroke-miterlimit="10"
        stroke-width="8"
      />
      <path
        d="M140.95,123.1a30,30,0,1,1-17.11,17.53"
        fill="none"
        stroke="#220728"
        stroke-miterlimit="10"
        stroke-width="8"
      />
    </SvgIcon>
  );
};

export default Logo;
