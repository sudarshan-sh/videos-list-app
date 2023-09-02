import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "../components";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return "Loading...";

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos.map((singleVideo, index) => (
        <Box key={index}>
          {singleVideo.id.channelId ? (
            <ChannelCard channelDetail={singleVideo} />
          ) : (
            <VideoCard video={singleVideo} />
          )}
          {/* {singleVideo.id.channelId && <ChannelCard channelDetail={singleVideo} />} */}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
