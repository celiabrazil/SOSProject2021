import React, { useCallback } from "react";
import BatteryPercent from "./BatteryPercent";
import { useHistory } from 'react-router-dom';
import {
  Box,
  Grid,
  Image,
  Carousel,
  Grommet,
  Anchor,
} from "grommet";

import "../App.css";

const theme = {
  global: {
    colors: {
      brand: "#228BE6",
    },
    font: {
      family: "Arvo",
      size: "18px",
      height: "20px",
    },
  },
};
<Grommet theme={theme}></Grommet>;

function Home(props) {
  const history = useHistory();
  const handleOnClickOne = useCallback(() => history.push('/NissanLeaf'), [history]);
  //const handleOnClickTwo = useCallback(() => history.push('/NissanLeaf'), [history]);

  return (
    <Grommet plain>
      <Anchor href="#"> 

      <Box height="medium" width="full" >
        <Carousel play="4000" fill>
        <Box>        
        <Image
            fit="cover"
            src={"./teslamodel3.jpg"}
            href={"google.com"}
          /></Box>

          <Image
            fit="cover"
            src={"./chargingvehicles.jpg"}
            href={"https://www.caranddriver.com/features/g15378765/worth-the-watt-a-brief-history-of-the-electric-car-1830-to-present/"}
          />
          <Image
            fit="cover"
            src={"./audia6etron.jpg"}
          />
        </Carousel>
      </Box>

      </Anchor>


      <Grid
        rows={["1/2", "1/2"]}
        columns={["1/2", "1/2"]}
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
          background="url('nissanleaf.jpg')"
          onClick={handleOnClickOne}
          height="medium"
          
        />
        <a href="https://greencarjournal.com/features/behold-the-top-green-models-for-2021/">
          <Box
            gridArea="two"
            height="medium"
            width="full"
            background="url('evonly.jpg')"
  
          />
        </a>

        <Box //Battery Percentage
          background="#F8F8F8"
          alignSelf="center"
          alignContent="center"
          pad="xxsmall"
          wrap="true"

        >
          <BatteryPercent
            minimum="20"
            maximum="70"
            car="Vehicles Battery Usuage"
          />
        </Box>

        <a href="https://www.nbcnews.com/business/autos/mercedes-benz-go-all-electric-2030-n1274708">
          <Box 
            gridArea="four"
            height="medium"
            width="full"
            background="url('mercedesbenz.jpg')"

          />
        </a>

      </Grid>
    </Grommet>
  );
}

export default Home;

/*
          <BatteryPercent
            minimum="20"
            maximum="70"
            car="General Electric Vehicles Battery usuage"
          />
*/
