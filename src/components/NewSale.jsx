import React, { useCallback } from "react";
import {
  Box,
  Button,
  Grid,
  FileInput,
  Grommet,
  TextInput,
  Text,
  TextArea,
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

function NewSale() {
  const [value, setValue] = React.useState('');
  return (
    <Grommet plain>
        <Box background="brand" height="xsmall" background="000000">
            Header
        </Box>


        <Grid //top half
            columns={{
                count: 3,
                size: 'auto',
            }}
            gap="large"
        >
            <Box>
                <FileInput //Upload Images
                    multiple
                    onChange={(event, { files }) => {
                        console.log(event);
                        for (let i = 0; i < files.length; i += 1) {
                        const file = files[i];
                        console.log(file.name);
                        }
                    }}
                    />              
            </Box>

            <Box
                width="large"
            >
                <Grid
                    columns={{
                        count: 3,
                        size: 'auto',
                    }}
                    gap="large"
                    >
                
                    <Box>
                        <Box>
                            <TextInput //Manufacturer
                                    placeholder="Manufacturer"
                                    size="large"
                                    value={value}
                                    onChange={event => setValue(event.target.value)} 
                                />
                        </Box>
                            <Box background="000000" height="20px">
                                <Text>  </Text>
                            </Box>
                        <Box>
                            <TextInput //Car Name
                                    placeholder="Car Name"
                                    size="large"
                                    value={value}
                                    onChange={event => setValue(event.target.value)} 
                                />
                        </Box> 
                    </Box>                  
                    <Box>
                        <Box>
                            <TextInput //Price
                                    placeholder="Price"
                                    size="large"
                                    value={value}
                                    onChange={event => setValue(event.target.value)} 
                                />
                        </Box>
                        <Box background="000000" height="20px">
                                <Text>  </Text>
                            </Box>
                        <Box>
                            <TextInput //Battery Percentage
                                    placeholder="Battery Percentage"
                                    size="large"
                                    value={value}
                                    onChange={event => setValue(event.target.value)} 
                                />
                        </Box>                        
                    </Box>
                    <Box>
                        <Box>
                            <TextInput //Car Mileage
                                placeholder="Car Mileage"
                                size="large"
                                value={value}
                                onChange={event => setValue(event.target.value)} 
                            />
                        </Box>
                        <Box background="000000" height="20px">
                                <Text>  </Text>
                            </Box>
                        <Box>
                            <TextInput //Date Bought
                                    placeholder="Date Bought"
                                    size="large"
                                    value={value}
                                    onChange={event => setValue(event.target.value)} 
                                />
                        </Box>
                    </Box>
                </Grid>
            </Box>


            <Box>
                <Button 
                    primary label="Save" 
                    //href="./review"
                    alignSelf="center"
                    size="xxlarge"
                    margin="small"
                    color="#6B9155"/>
            </Box>

        </Grid>
            <Box margin="large" size="medium">
                <TextArea //Description
                    placeholder="Description"
                    size="large"
                    value={value}
                    onChange={event => setValue(event.target.value)} 
                    />
            </Box>
    </Grommet>
  );
}

export default NewSale;

