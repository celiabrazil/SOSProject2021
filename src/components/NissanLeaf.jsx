import React from "react";
import {
  Box,
  Grid,
  Grommet,
  Button,
  Text,
  Carousel,
  Image,
  Heading,
} from "grommet";

import "../App.css";
import BatteryInfo from "./BatteryInfo";

const theme = {
  global: {
    colors: {
      brand: "#228BE6",
    },
    font: {
      family: "Georgia",
      size: "18px",
      height: "20px",
    },
  },
};

function NissanLeaf() {
  const Image1 = "./2020_nissan_leaf_angularfront.jpeg";
  const Image2 = "./nissanleafbattery.jpeg";
  return (
    <Grommet theme={theme}>
      <BatteryInfo
        Img1="./2020_nissan_leaf_angularfront.jpeg"
        Img2="./nissanleafbattery.jpeg"
        carName="Nissan Leaf"
        battery1="24 kWh"
        battery1cost="$5500"
        battery2="40 kWh"
        battery2cost="$6500-$7500"
        battery3="62 kWh"
        battery3cost="$8500-$9500"
        scaleValue="777"
      />
      <Box>
        <Box
          border={{ color: "brand", size: "small" }}
          background="#F8F8F8"
          height="xsmall"
        >
          <Text> </Text>
        </Box>

        <Grid //lower half
          columns={{
            count: 3,
            size: "auto",
          }}
          gap="small"
        >
          <Box
            border={{ color: "brand", size: "small" }} //add the information for each battery here!
            background="#F8F8F8"
          >
            <Heading alignSelf="center">24 kWh</Heading>
            <Box border={{ color: "brand", size: "small" }} margin="xxsmall">
              <Text alignSelf="center">Lithium-ion Battery</Text>
            </Box>
            <Box border={{ color: "brand", size: "small" }} margin="xxsmall">
              <Text alignSelf="center">Horsepower: 110 HP</Text>
            </Box>
            <Box border={{ color: "brand", size: "small" }} margin="xxsmall">
              <Text alignSelf="center">
                Miles on a Single Charge (EPA Range): 124 miles
              </Text>
            </Box>
            <Box border={{ color: "brand", size: "small" }} margin="xxsmall">
              <Text alignSelf="center">Peak Power: 80 kW</Text>
            </Box>
            <Box border={{ color: "brand", size: "small" }} margin="xxsmall">
              <Text alignSelf="center">Time until Full Charge: 3.5 hours</Text>
            </Box>
          </Box>
          <Box border={{ color: "brand", size: "small" }} background="#F8F8F8">
            <Heading alignSelf="center">40 kWh</Heading>
            <Box border={{ color: "brand", size: "small" }} margin="xxsmall">
              <Text alignSelf="center">Lithium-ion Battery</Text>
            </Box>
            <Box border={{ color: "brand", size: "small" }} margin="xxsmall">
              <Text alignSelf="center">Horsepower: 147 HP</Text>
            </Box>
            <Box border={{ color: "brand", size: "small" }} margin="xxsmall">
              <Text alignSelf="center">
                Miles on a Single Charge (EPA Range): 149 miles
              </Text>
            </Box>
            <Box border={{ color: "brand", size: "small" }} margin="xxsmall">
              <Text alignSelf="center">Peak Power: 110 kW</Text>
            </Box>
            <Box border={{ color: "brand", size: "small" }} margin="xxsmall">
              <Text alignSelf="center">Time until Full Charge: 8 hours</Text>
            </Box>
          </Box>
          <Box border={{ color: "brand", size: "small" }} background="#F8F8F8">
            <Heading alignSelf="center">62 kWh</Heading>
            <Box border={{ color: "brand", size: "small" }} margin="xxsmall">
              <Text alignSelf="center">Lithium-ion Battery</Text>
            </Box>
            <Box border={{ color: "brand", size: "small" }} margin="xxsmall">
              <Text alignSelf="center">Horsepower: 214 HP</Text>
            </Box>
            <Box border={{ color: "brand", size: "small" }} margin="xxsmall">
              <Text alignSelf="center">
                Miles on a Single Charge (EPA Range): 226 miles
              </Text>
            </Box>
            <Box border={{ color: "brand", size: "small" }} margin="xxsmall">
              <Text alignSelf="center">Peak Power: 160 kW</Text>
            </Box>
            <Box border={{ color: "brand", size: "small" }} margin="xxsmall">
              <Text alignSelf="center">Time until Full Charge: 11.5 hours</Text>
            </Box>
          </Box>
        </Grid>
      </Box>
      <Box
        border={{ color: "brand", size: "small" }}
        background="#F8F8F8"
        height="xsmall"
      >
        <Text> </Text>
      </Box>
    </Grommet>
  );
}

export default NissanLeaf;
