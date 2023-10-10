import { SvgIcon, SvgIconProps } from "@mui/material";

const MSTeamsIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon {...props}>
      <path
        fill="#5c6bc0"
        d="M41.5 13A3.5 3.5 0 1 0 41.5 20 3.5 3.5 0 1 0 41.5 13zM4 40l23 4V4L4 8V40z"
      />
      <path
        fill="#fff"
        d="M21 16.27L21 19 17.01 19.18 16.99 31.04 14.01 30.95 14.01 19.29 10 19.45 10 16.94z"
      />
      <path
        fill="#5c6bc0"
        d="M36 14c0 2.21-1.79 4-4 4-1.2 0-2.27-.53-3-1.36v-5.28c.73-.83 1.8-1.36 3-1.36C34.21 10 36 11.79 36 14zM38 23v11c0 0 1.567 0 3.5 0 1.762 0 3.205-1.306 3.45-3H45v-8H38zM29 20v17c0 0 1.567 0 3.5 0 1.762 0 3.205-1.306 3.45-3H36V20H29z"
      />
    </SvgIcon>
  );
};

export default MSTeamsIcon;
