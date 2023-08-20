import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail }) => {
  const {
    id: { channelId },
    snippet: { thumbnails, title },
  } = channelDetail;

  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
      }}
    >
      <Link to={`channel/${channelId}`}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={thumbnails?.high?.url || demoProfilePicture}
            alt={title}
            sx={{ borderRadius: "50%", width: "180px", height: "180px", mb: 2, border: "1px solid #e3e3e3" }}
          />
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
