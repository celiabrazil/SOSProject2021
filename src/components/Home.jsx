import React from "react";
import BatteryPercent from "./BatteryPercent";
// import { Link } from "react-router-dom";
import {
  Box,
  Grid,
  Image,
  Carousel,
  Grommet,
  // Header,
  // Button,
  // Menu,
  // Footer,
  // Text,
  // Anchor,
} from "grommet";

import "../App.css";

const theme = {
  global: {
    colors: {
      brand: "#228BE6",
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px",
    },
  },
};
<Grommet theme={theme}></Grommet>;

function Home() {
  return (
    <Grommet plain>
      <Box height="medium" width="full" overflow="hidden">
        <Carousel play="4000">
          <Image
            fit="cover"
            src={"./bnwi8.jpeg"}
            onClick={() => window.alert("I am working, yeah.")}
          />
          <Image
            fit="cover"
            src={"./evonly.jpeg"}
            onClick={() => window.alert("I am working, yeah.")}
          />
          <Image
            fit="cover"
            src={"./chargingvehicles.jpeg"}
            onClick={() => window.alert("I am working, yeah.")}
          />
        </Carousel>
      </Box>

      <Grid
        rows={["medium", "medium"]}
        columns={["large", "900px"]}
        gap="xxsmall"
        areas={[
          { name: "one", start: [0, 0], end: [0, 0] },
          { name: "two", start: [1, 0], end: [1, 0] },
          { name: "three", start: [0, 1], end: [0, 1] },
          { name: "four", start: [1, 1], end: [1, 1] },
        ]}
      >
        <Box
          gridArea="one"
          onClick={() => window.alert("I am working, yeah.")}
          // height="medium"
          // width="900px"
          background="url('teslachargingstation.jpeg')"
          height="medium"
          width="large"
        />

        <Box
          gridArea="two"
          onClick={() => window.alert("I am working, yeah.")}
          // height="medium"
          // width="900px"
          background="url('trafficintersecion.jpeg')"
          height="medium"
          width="large"
        />

        <Box>
          <BatteryPercent
            minimum="20"
            maximum="70"
            car="General Electric Vehicles Battery usuage"
          />
        </Box>

        <Box
          gridArea="four"
          onClick={() => window.alert("I am working, yeah.")}
          // height="medium"
          // width="900px"
          background="url('smoke.jpeg')"
          height="medium"
          width="large"
        />
      </Grid>
    </Grommet>
  );
}

export default Home;
