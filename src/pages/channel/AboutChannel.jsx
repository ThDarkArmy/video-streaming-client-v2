import React from "react";
import { Box, Divider, Grid, Link, Typography } from "@mui/material";
import { darkchannelnamecolor, darktitlecolor } from "../../colors/colors";
import { useTheme } from "@mui/material/styles";
import { formatDate, formatNumber } from "../../utils/utils";

const AboutChannel = ({ channel }) => {
    const theme = useTheme();
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item container xs={12} sm={7} md={7} lg={7} xl={7}>
          <Box sx={{ paddingLeft: 5, paddingRight: 5, [theme.breakpoints.down("sm")]:{paddingLeft: 1} }}>
            <Box>
              <Typography
                variant="body1"
                color="initial"
                sx={{ mt: 2 }}
                style={{ color: darktitlecolor }}
              >
                Description
              </Typography>
              <Typography
                variant="body2"
                color="initial"
                sx={{ mt: 2 }}
                style={{ color: darktitlecolor }}
              >
                {channel?.description}
              </Typography>
            </Box>
            <Box sx={{ mt: 5 }}>
              <Typography
                variant="body1"
                style={{ fontWeight: 500, color: darktitlecolor }}
              >
                Details
              </Typography>
              <Typography sx={{mt: 2, fontSize: 12}} style={{color: darkchannelnamecolor}}>For business enquiries: {channel?.email}</Typography>
              <Typography sx={{mt: 2, fontSize: 12}} style={{color: darkchannelnamecolor}}>Location: {channel?.location}</Typography>
            </Box>
            <Box sx={{ mt: 7 }}>
              <Typography
                variant="body1"
                style={{ fontWeight: 500, color: darktitlecolor }}
              >
                Links
              </Typography>
              {channel?.links.map(item=><Link key={item.title} to={item.url} sx={{mr: 2, textDecoration: "none", fontSize: 12, cursor: "pointer"}}>{item.title}</Link>)}
            </Box>
          </Box>
        </Grid>
        <Grid item container xs={12} sm={5} md={5} lg={5} xl={5}>
          <Box sx={{ paddingLeft: "20%", [theme.breakpoints.down("sm")]:{paddingLeft: 1} }}>
            <Typography variant="body1" color="initial" sx={{ mt: 2 }} style={{color: darktitlecolor}}>
              Stats
            </Typography>
            <Divider sx={{ mt: 1, bgcolor: darkchannelnamecolor, height: "0.1px" }} />
            <Typography variant="body2" color="initial" sx={{ mt: 1 }} style={{color: darktitlecolor}}>
              Joined: {formatDate(channel?.createdAt)}
            </Typography>
            <Divider sx={{ mt: 1, bgcolor: darkchannelnamecolor, height: "0.1px"  }} />
            <Typography variant="body2" color="initial" sx={{ mt: 1 }} style={{color: darktitlecolor}}>
              { formatNumber(channel?.views)} views
            </Typography>
            <Divider sx={{ mt: 1, bgcolor: darkchannelnamecolor, height: "0.1px"  }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutChannel;
