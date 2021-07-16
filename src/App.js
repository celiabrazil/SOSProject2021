import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Grid,
  Image,
  Carousel,
  Grommet,
  Header,
  Button,
  Menu,
  Footer,
  Text,
  Anchor,
} from "grommet";

import "./App.css";

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

const pointerEventsFriendlyTheme = {
  box: {
    extend: "pointer-events: none;",
  },
  anchor: {
    extend: "pointer-events: auto;",
  },
  button: {
    extend: "pointer-events: auto;",
  },
};

const AppBar = (props) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);

const Boxes = (props) => (
  <Grid
    rows={["250px", "full"]}
    columns={["medium", "full"]}
    gap="medium"
    areas={[
      { name: "slider", start: [0, 0], end: [1, 0] },
      { name: "one", start: [0, 1], end: [0, 1] },
      { name: "two", start: [1, 1], end: [1, 1] },
    ]}
  >
    <Box gridArea="slider" background="brand" height="200px" width="full" />

    <Box
      gridArea="one"
      height="400px"
      width="400px"
      background="url('city.jpeg')"
      height="400px"
      width="400px"
    />

    <Box
      gridArea="two"
      height="400px"
      width="400px"
      background="url('smoke.jpeg')"
      height="400px"
      width="400px"
    />
  </Grid>
);

function App() {
  return (
    <Grommet plain>
      <Header background="brand">
        <Menu label="account" items={[{ label: "logout" }]} />
      </Header>

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
          height="medium"
          width="900px"
          background="url('teslachargingstation.jpeg')"
          height="medium"
          width="large"
        />

        <Box
          gridArea="two"
          onClick={() => window.alert("I am working, yeah.")}
          height="medium"
          width="900px"
          background="url('trafficintersecion.jpeg')"
          height="medium"
          width="large"
        />

        <Box
          gridArea="three"
          onClick={() => window.alert("I am working, yeah.")}
          height="medium"
          width="900px"
          background="url('city.jpeg')"
          height="medium"
          width="large"
        />

        <Box
          gridArea="four"
          onClick={() => window.alert("I am working, yeah.")}
          height="medium"
          width="900px"
          background="url('smoke.jpeg')"
          height="medium"
          width="large"
        />
      </Grid>

      <Footer background="brand" pad="medium">
        <Text>Copyright</Text>
        <Anchor label="About" />
      </Footer>
    </Grommet>
  );
}

export default App;
