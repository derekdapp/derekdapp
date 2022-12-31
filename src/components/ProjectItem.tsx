import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import Image from "next/image";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
});

const ProjectItem = ({
  title,
  renderDescription,
  logoSrc,
  logoWidth,
  logoHeight,
  logoAlt,
  youtubeVideoId,
  youtubeWidth,
  youtubeHeight,
  roles,
  darkLogo = false,
}: {
  title: string;
  logoAlt: string;
  youtubeVideoId: string;
  youtubeWidth: number;
  youtubeHeight: number;
  logoSrc: string;
  logoWidth: number;
  logoHeight: number;
  renderDescription: () => React.ReactNode;
  roles: string;
  darkLogo?: boolean;
}) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: {
        xs: "column",
        md: "row",
      },
      justifyContent: "center",
      mt: 4,
      alignItems: "center",
    }}
  >
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flex: 1,
        mr: 5,
        mb: {
          xs: 5,
          md: 0,
        },
      }}
    >
      <Box
        sx={{
          mb: 1,
        }}
      >
        <Image
          src={logoSrc}
          alt={logoAlt}
          width={logoWidth}
          height={logoHeight}
        />
      </Box>
      <Typography
        variant="h3"
        mb={1}
        sx={{
          color: "primary.main",
        }}
      >
        {title}
      </Typography>
      <Box>
        <Typography variant="overline" mb={1}>
          Roles
        </Typography>
        <Typography
          variant="body1"
          mb={1}
          sx={{
            color: "text.secondary",
          }}
        >
          {roles}
        </Typography>
      </Box>
      <Box>{renderDescription()}</Box>
    </Box>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: youtubeHeight,
        width: youtubeWidth,
        maxWidth: "100%",
      }}
    >
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${youtubeVideoId}`}
        loop
        width="100%"
        height="100%"
      />
    </Box>
  </Box>
);

export default ProjectItem;
