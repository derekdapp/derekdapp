import { Box } from "@mui/material";
import React from "react";
import { SxProps, Theme } from "@mui/material/styles";

const Section = ({
  children,
  maxWidth = "md",
  containerProps = {
    sx: [],
  },
}: {
  children: React.ReactNode;
  maxWidth?: string | number;
  containerProps?: {
    sx?: SxProps<Theme>;
  };
}) => (
  <Box
    {...containerProps}
    sx={[
      {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        px: 4,
      },
      ...(Array.isArray(containerProps.sx)
        ? containerProps?.sx
        : [containerProps?.sx]),
    ]}
  >
    <Box
      sx={{
        width: "100%",
        maxWidth: maxWidth as string | number,
      }}
    >
      {children}
    </Box>
  </Box>
);

export default Section;
