import { useState, useEffect } from "react";
import { Box, Typography, CircularProgress } from "@mui/material";

const UserScore = ({ vote_average, size, fSize }) => {
  const [voteAvrg, setVoteAvrg] = useState(0);

  let progressColor = "";

  if (voteAvrg < 4) {
    progressColor = "error";
  } else if (voteAvrg < 7) {
    progressColor = "warning";
  } else {
    progressColor = "success";
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setVoteAvrg((oldProgress) => {
        const diff = Math.random() * vote_average;
        return Math.min(oldProgress + diff, vote_average);
      });
    }, 300);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        display: "inline-flex",
        backgroundColor: "background.default",
        padding: ".25rem",
        borderRadius: "50%",
      }}
    >
      <CircularProgress
        variant="determinate"
        value={
          voteAvrg.toString().includes(".")
            ? parseInt(voteAvrg.toFixed(1).split(".").join(""))
            : parseInt(`${voteAvrg}0`)
        }
        color={progressColor}
        size={size}
      />

      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          varinat="caption"
          sx={{ fontSize: `${fSize}px`, fontWeight: "800" }}
        >
          {vote_average === 0 ? (
            "NR"
          ) : (
            <>
              {voteAvrg.toString().includes(".")
                ? parseInt(voteAvrg.toFixed(1).split(".").join(""))
                : `${voteAvrg}0`}
              <sup style={{ fontSize: ".35rem" }}>%</sup>
            </>
          )}
        </Typography>
      </Box>
    </Box>
  );
};
export default UserScore;
