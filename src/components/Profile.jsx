import React from "react";
import {
  Box,
  Grid,
  Avatar,
  Grommet,
  Button,
  Text,
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

function Profile() {
    const [value, setValue] = React.useState('');
  return (
    <Grommet theme={theme}>
        
        <Grid
            rows={['xxsmall', 'small', 'xsmall']}
            columns={['1/4', '3/4']}
            areas={[
                ['header', 'header'],
                ['sidebar', 'main'],
                ['footer', 'footer'],
            ]}
            gap="small"
            >
            <Box background="brand" gridArea="header">
                Header
            </Box>

            <Box background="000000" gridArea="sidebar" align="center">
                <Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" size="300px" >  
                </Avatar>
            </Box>

            <Box background="000000" gridArea="main">
                <Grid
                    columns={{
                        count: 2,
                        size: 'auto',
                    }}
                    gap="small"
                >
                    <Box direction="row"  gap="small" align="center" >
                       <Box>
                       <Text margin="medium"  size="xxlarge" alignSelf="center" align="center">
                            Dale Earnhardt
                        </Text>  
                        <Text margin="1px"  size="medium" alignSelf="center" align="center">
                            daleearnhardt@gmail.com
                        </Text> 
                       </Box>

                    </Box>

                    <Box background="000000" align="center" >
                        <Button 
                            primary label="New Sale" 
                            size="large"
                            margin="medium"
                            color="#98A0A6"
                        >
                        </Button>
                    </Box>
                </Grid>
            </Box>

            <Box background="000000" gridArea="footer">
            </Box>
        </Grid>
        
        
        
        <Grid
            columns={{
                count: 3,
                size: 'auto',
            }}
            gap="large"
            >
            <Box background="000000" height="medium">
                <Text size="large" alignSelf="center" align="center">Current Listings</Text>
                <Box background="#98A0A6" height="small" round="small" >
                    <Text>  </Text>
                </Box>
                <Box background="000000" height="xsmall">
                    <Text>  </Text>
                </Box>
                <Box background="#98A0A6" height="small" round="small">
                    <Text>  </Text>
                </Box>
                <Box background="000000" height="xsmall" round="small">
                    <Text>  </Text>
                </Box>
            </Box>
            <Box background="000000" height="medium">
                <Text size="large" alignSelf="center" align="center">Past Sales</Text>
                <Box background="#98A0A6" height="small" round="small">
                    <Text>  </Text>
                </Box>
                <Box background="000000" height="xsmall">
                    <Text>  </Text>
                </Box>
                <Box background="#98A0A6" height="small" round="small">
                    <Text>  </Text>
                </Box>
                <Box background="000000" height="xsmall">
                    <Text>  </Text>
                </Box>
            </Box>
            <Box background="000000" height="medium">
                <Text size="large" alignSelf="center" align="center">Past Purchases</Text>
                <Box background="#98A0A6" height="small" round="small">
                    <Text>  </Text>
                </Box>
                <Box background="000000" height="xsmall">
                    <Text>  </Text>
                </Box>
                <Box background="#98A0A6" height="small" round="small">
                    <Text>  </Text>
                </Box>
                <Box background="000000" height="xsmall">
                    <Text>  </Text>
                </Box>
            </Box>
        </Grid>
        

    </Grommet>
    );

}

export default Profile;


