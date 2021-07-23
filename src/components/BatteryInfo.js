import React from "react";
import { Box, Grid, Button, Text, Carousel, Image, Heading } from "grommet";

import "../App.css";
import Speedometer from "./Speedometer";

function BatteryInfo(props) {
  return (
    <Box border={{ color: "brand", size: "small" }} background="#F8F8F8">
      <Grid //upper half
      >
        <Grid columns={["1/4", "3/4"]} gap="small">
          <Box
            border={{ color: "brand", size: "small" }} //Photots
            marigin="large"
            background="#F8F8F8"
          >
            <Carousel //Put the images in the public folder (it works best with JPEG files), then copy this format:
              fill="true"
              marigin="large"
            >
              <Image fit="cover" src={props.Img1} />
              <Image fit="cover" src={props.Img2} />
            </Carousel>
          </Box>
          <Box
            border={{ color: "brand", size: "small" }} //right side
          >
            <Grid
              columns={{
                count: 2,
                size: "auto",
              }}
              gap="small"
            >
              <Box
                border={{ color: "brand", size: "small" }} //Name of Vehicle
                background="#F8F8F8"
              >
                <Heading size="xxlarge" alignSelf="center">
                  {props.carName}
                </Heading>
              </Box>
              <Box
                border={{ color: "brand", size: "small" }} //Stars - add the image
                background="#F8F8F8"
              >
                <Text>Stars</Text>
              </Box>
            </Grid>

            <Box
              border={{ color: "brand", size: "small" }}
              background="#F8F8F8"
              height="xsmall" //Spacer
            >
              <Text> </Text>
            </Box>

            <Grid //Buttons
              columns={{
                count: 3,
                size: "auto",
              }}
              gap="small"
            >
              <Box
                border={{ color: "brand", size: "small" }}
                background="#F8F8F8"
              >
                <Button //24
                  primary
                  label={props.battery1}
                  alignSelf="center"
                  size="xxlarge"
                  margin="small"
                  color="#6B9155"
                />
                <Text alignSelf="center">{props.battery1cost}</Text>
              </Box>

              <Box
                border={{ color: "brand", size: "small" }}
                background="#F8F8F8"
              >
                <Button //40
                  primary
                  label={props.battery2}
                  alignSelf="center"
                  size="xxlarge"
                  margin="small"
                  color="#6B9155"
                />
                <Text alignSelf="center">{props.battery2cost}</Text>
              </Box>

              <Box
                border={{ color: "brand", size: "small" }}
                background="#F8F8F8"
              >
                <Button //62
                  primary
                  label={props.battery3}
                  alignSelf="center"
                  size="xxlarge"
                  margin="small"
                  color="#6B9155"
                />
                <Text alignSelf="center">{props.battery3cost}</Text>
              </Box>
            </Grid>
            <Box
              border={{ color: "brand", size: "small" }} //environmental scale
              background="#F8F8F8"
              align="end"
            >
              <Speedometer scaleValue="777" style={{ textAlign: "right" }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BatteryInfo;

// Img1="./2020_nissan_leaf_angularfront.jpeg" Img2="./nissanleafbattery.jpeg" carName="Nissan Leaf" battery1="24 kWh" battery1cost="$5500" battery2="40 kWh" battery2cost="$6500-$7500" battery3="62 kWh" battery3cost="$8500-$9500" scaleValue="777"
