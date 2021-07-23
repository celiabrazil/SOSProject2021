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
  return (
    <Grommet theme={theme}>
        <Box height="xsmall" background="#F8F8F8">
            Header
        </Box>
            
        <Box background="#F8F8F8" >
            <Grid //upper half 
            > 
                <Grid
                    columns={['1/4', '3/4']}
                    gap="small"
                >
                    <Box //Photots
                    marigin="large"
                    background="#F8F8F8"
                    >
                        <Carousel //Put the images in the public folder (it works best with JPEG files), then copy this format:
                            
                            fill="true"
                            marigin="large"
                        >
                            <Image
                                fit="cover"
                                src={"./2020_nissan_leaf_angularfront.jpeg"}
                            />
                            <Image
                                fit="cover"
                                src={"./nissanleafbattery.jpeg"}
                            />                        
                            
                        </Carousel>
                    </Box>
                    <Box //right side 
                    >
                        <Grid
                            columns={{
                                count: 2,
                                size: 'auto',
                            }}
                            gap="small"
                        >
                            <Box //Name of Vehicle
                            background="#F8F8F8"
                            >
                                <Heading
                                    size="xxlarge"
                                    alignSelf="center"
                                >Nissan Leaf</Heading>    
                            </Box>   
                            <Box //Stars - add the image
                            background="#F8F8F8"
                            >
                                <Text>Stars</Text>    
                            </Box>    
                        </Grid>

                        <Box background="#F8F8F8" height="xsmall" //Spacer
                        >
                            <Text>  </Text>
                        </Box>

                        <Grid //Buttons
                            columns={{
                                count: 3,
                                size: 'auto',
                            }}
                            gap="small"
                        >
                            <Box background="#F8F8F8" >
                                <Button //24
                                    primary label="24 kWh" 
                                    alignSelf="center"
                                    size="xxlarge"
                                    margin="small"
                                    color="#6B9155"
                                />
                                <Text
                                    alignSelf="center"
                                >$5500</Text>  
                            </Box>
            
                            <Box background="#F8F8F8" >
                                <Button //40
                                    primary label="40 kWh" 
                                    alignSelf="center"
                                    size="xxlarge"
                                    margin="small"
                                    color="#6B9155"
                                />
                                <Text
                                    alignSelf="center"
                                >$6500-$7500</Text>  
                            </Box>
                        
                            <Box background="#F8F8F8">
                                <Button //62
                                    primary label="62 kWh" 
                                    alignSelf="center"
                                    size="xxlarge"
                                    margin="small"
                                    color="#6B9155"
                                />
                                <Text 
                                    alignSelf="center"
                                >$8500-$9500</Text>  
                            </Box>  
                            
                            
                        </Grid>
                            <Box //environmental scale
                            background="#F8F8F8" >
                                <Text>Environmetal Scale Box</Text>
                            </Box>
                    </Box>  
                </Grid>  
            </Grid>

            <Box background="#F8F8F8" height="xsmall" >
                <Text>  </Text>
            </Box>

            <Grid //lower half
            columns={{
                count: 3,
                size: 'auto',
            }}
            gap="small">
                
                <Box //add the information for each battery here! 
                    background="#F8F8F8">
                    <Heading alignSelf="center">24 kWh</Heading>
                    <Box margin="xxsmall"><Text alignSelf="center" >Lithium-ion Battery</Text></Box>
                    <Box margin="xxsmall"><Text alignSelf="center" >Horsepower: 110 HP</Text></Box>
                    <Box margin="xxsmall"><Text alignSelf="center" >Miles on a Single Charge (EPA Range): 124 miles</Text></Box>
                    <Box margin="xxsmall"><Text alignSelf="center" >Peak Power: 80 kW</Text></Box>
                    <Box margin="xxsmall"><Text alignSelf="center" >Time until Full Charge: 3.5 hours</Text></Box>
                </Box>
                <Box background="#F8F8F8">
                    <Heading alignSelf="center" >40 kWh</Heading>
                    <Box margin="xxsmall"><Text alignSelf="center" >Lithium-ion Battery</Text></Box>
                    <Box margin="xxsmall"><Text alignSelf="center" >Horsepower: 147 HP</Text></Box>
                    <Box margin="xxsmall"><Text alignSelf="center" >Miles on a Single Charge (EPA Range): 149 miles</Text></Box>
                    <Box margin="xxsmall"><Text alignSelf="center" >Peak Power: 110 kW</Text></Box>
                    <Box margin="xxsmall"><Text alignSelf="center" >Time until Full Charge: 8 hours</Text></Box>
                </Box>
                <Box background="#F8F8F8">
                    <Heading alignSelf="center" >62 kWh</Heading>
                    <Box margin="xxsmall"><Text alignSelf="center" >Lithium-ion Battery</Text></Box>
                    <Box margin="xxsmall"><Text alignSelf="center" >Horsepower: 214 HP</Text></Box>
                    <Box margin="xxsmall"><Text alignSelf="center" >Miles on a Single Charge (EPA Range): 226 miles</Text></Box>
                    <Box margin="xxsmall"><Text alignSelf="center" >Peak Power: 160 kW</Text></Box>
                    <Box margin="xxsmall"><Text alignSelf="center" >Time until Full Charge: 11.5 hours</Text></Box>
                </Box>
                
            </Grid>
        </Box>

        <Box background="#F8F8F8" height="xsmall" >
            <Text>  </Text>
        </Box>

    </Grommet>
    );

}

export default NissanLeaf;