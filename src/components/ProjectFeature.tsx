import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import Image from "next/image";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
});

const ProjectFeature = ({
  title,
  renderDescription,
  youtubeVideoId,
  youtubeWidth,
  youtubeHeight,
}: {
  title: string;
  youtubeVideoId: string;
  youtubeWidth: number;
  youtubeHeight: number;
  renderDescription: () => React.ReactNode;
}) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        flex: 1,
        mb: 5,
      }}
    >
      <Typography
        variant="h3"
        mb={1}
        sx={{
          color: "primary.main",
        }}
      >
        {title}
      </Typography>
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

export default ProjectFeature;
