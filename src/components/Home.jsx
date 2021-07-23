import React, { useCallback } from "react";
import BatteryPercent from "./BatteryPercent";
import { useHistory, Link, withRouter } from 'react-router-dom';
import {
  Box,
  Grid,
  Image,
  Carousel,
  Grommet,
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

function Home(props) {
  const history = useHistory();
  const handleOnClickOne = useCallback(() => history.push('/NissanLeaf'), [history]);
  const handleOnClickTwo = useCallback(() => history.push('/NissanLeaf'), [history]);

  return (
    <Grommet plain>
      <Box height="medium" width="full" >
        <Carousel play="4000" fill>
          <Image
            fit="cover"
            src={"./teslamodel3.jpg"}
          />
          <Image
            fit="cover"
            src={"./chargingvehicles.jpg"}
          />
          <Image
            fit="cover"
            src={"./audia6etron.jpg"}
          />
        </Carousel>
      </Box>




      <Grid
        rows={["1/2", "1/2"]}
        columns={["1/2", "1./2"]}
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

        <Box //Put battery percentage - messes up all of the sizing
        >
            
        </Box>

        <a href="https://www.nbcnews.com/business/autos/mercedes-benz-go-all-electric-2030-n1274708">
          <Box width="400px"
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
