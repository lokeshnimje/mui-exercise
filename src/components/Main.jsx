import React from "react";
import {
  Container,
  Grid,
  Box,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Paper,
} from "@mui/material";

const boxSx = {
    ".image": {
        borderBottom: '3px solid white',
        filter: 'grayscale(100%)'
    },
    "&:hover .image": {
        borderBottom: '3px solid #118997',
        filter: 'grayscale(0%)'
    },
    "&:hover .typo": {
        color: '#118997',
    }
}

function Main() {
  return (
    <Container maxWidth="lg" style={{ marginTop: "20px" }}>
      <Grid container>
        <Grid item xs={12}>
          <Box
            component="div"
            width="100%"
            height="15px"
            bgcolor="#095368"
          ></Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={boxSx} >
              <CardMedia className="image"
                component="img"
                height="300"
                image={require('../images/img1.jpeg')}
                alt="Image"
              />
              <CardContent>
                <Typography className="typo"
                  gutterBottom
                  variant="h5"
                  textAlign="left"
                  paddingInline="10px"
                  lineHeight="26px"
                  color='#838384'
                  fontWeight='bold'
                >
                  Top coders filtered through 3 layers of exhausting testing
                </Typography>
                <Typography 
                  variant="body1"
                  color="#838384"
                  textAlign="left"
                  pt="10px"
                  paddingInline="10px"
                >
                  A 3-step process that combines most <br />
                  advanced
                  <Typography variant="inline" color="#118997">
                    {" "}
                    Ai-tests
                  </Typography>{" "}
                  with
                  <Typography variant="inline" color="#118997">
                    {" "}
                    human interviews
                  </Typography>
                </Typography>
              </CardContent>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={boxSx}>
              <CardMedia className="image"
                component="img"
                height="300"
                image={require('../images/img2.jpeg')}
                alt="Image"
              />
              <CardContent>
                <Typography className="typo"
                  gutterBottom
                  variant="h5"
                  fontWeight="bold"
                  textAlign="left"
                  color="#838384"
                  paddingInline="10px"
                  lineHeight="26px"
                >
                  On-bench, expert developers <br /> available for immediate{" "}
                  <br /> deployment
                </Typography>
                <Typography
                  variant="body1"
                  color="#838384"
                  textAlign="left"
                  pt="10px"
                  paddingInline="10px"
                >
                  We maintain an
                  <Typography variant="inline" color="#118997">
                    {" "}
                    on-bench{" "}
                  </Typography>
                  pool of expert
                  <Typography variant="inline" color="#118997">
                    {" "}
                    global remmote teams
                  </Typography>
                  .Just plug and play!
                </Typography>
              </CardContent>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={boxSx}>
              <CardMedia className="image"
                component="img"
                height="300"
                image={require('../images/img3.webp')}
                alt="image"
              />
              <CardContent>
                <Typography className="typo"
                  gutterBottom
                  variant="h5"
                  fontWeight="bold"
                  textAlign="left"
                  color="#838384"
                  paddingInline="10px"
                  lineHeight="26px"
                >
                  Your remote team the cloud: flexible hiring tenures
                </Typography>
                <Typography
                  variant="body1"
                  color="#838384"
                  textAlign="left"
                  pt="10px"
                  paddingInline="10px"
                >
                  Feel free to
                  <Typography variant="inline" color="#118997">
                    {" "}
                    releasee{" "}
                  </Typography>
                  one or some or all developers.
                  <Typography variant="inline" color="#118997">
                    {" "}
                    Hire again
                  </Typography>
                  . No hard feelings.
                </Typography>
              </CardContent>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Main;
