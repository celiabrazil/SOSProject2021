import React from "react";
import {
  Box,
  Grid,
  Grommet,
  Button,
  Text,
  Paragraph,
  TextInput,
  Anchor,
  Heading,
  CheckBox,
} from "grommet";

import "../App.css";


const theme = {
  global: {
    colors: {
      brand: "#228BE6",
    },
    font: {
      family: 'Arvo',
      size: "18px",
      height: "20px",
    },

  },

  checkBox: {
    border: {
      color: {
        light: '#006400',
      },
      // width: 'xsmall',
      radius: '2px',
    },
    color: {
      light: '#006400',
      dark: '#006400',
    },
  },
};


  


function LogIn() {
    const [value, setValue] = React.useState('');
 
    const [checked, setChecked] = React.useState(true);
  return (
    <Grommet theme={theme}>  
        <Box background="#F8F8F8">
            <Grid //main grid
                columns={{
                    count: 2,
                    size: 'auto',
                }}
                gap="small"
                >
                <Box //left side of page
                    background="#303030">
                    <Heading margin="medium"
                    alignSelf="center"
                    >Login</Heading> 
                    <Box pad="large" background="#303030" gap="medium">
                        <TextInput //Username Input
                            placeholder="Username"
                            size="large"
                            value={value}
                            onChange={event => setValue(event.target.value)} // username variable
                        />
                        <TextInput //Password Input
                            placeholder="Password"
                            size="large"
                            value={value}
                            onChange={event => setValue(event.target.value)} // password variable
                        />
                    </Box>
            
                        <Grid // second grid
                            columns={{
                                count: 2,
                                size: 'auto',
                            }}
                            gap="small"
                            >
                            <Box // Tick box
                                background="#303030"
                                align="center"
                                >
                                <CheckBox // Tick Box
                                    checked={checked}
                                    color="#006400"
                                    label="Remember me"
                                    onChange={(event) => setChecked(event.target.checked)}
                                />
                            </Box>
                            <Box // Forgot Password
                                background="#303030"
                                align="center"
                                >
                                <Anchor href="#" label="Forgot Password?" color="#006400"/>
                            </Box>
                        </Grid>

                    <Button 
                        primary label="Login" 
                        href="./profile"
                        alignSelf="center"
                        size="xxlarge"
                        margin="small"
                        color="#006400"/>

                    <Button // Create an Account Button
                        primary label="Create an Account" 
                        alignSelf="center"
                        size="xlarge"
                        margin="large"
                        color="#98A0A6"
                    />
                    <Heading
                        alignSelf="center"
                        size="small"
                        color="#228B22"
                    >OR</Heading>
                    <Text
                        alignSelf="center"
                        color="#228B22"
                    >Login Using</Text>
                    
                    <Button // Google Button
                        primary label="Google" 
                        size="xlarge"
                        alignSelf="center"
                        margin="medium"
                        color="#98A0A6"
                    />

                </Box>
                <Box // right side of page
                    background="#F8F8F8"> 
                    <Box height="small"/>
                    <Box pad="small" background="#006400" width="small" round="small" alignSelf="center" align="center">
                        <Box pad="small" background="#228B22" width="small" round="small" align="center">
                            <Text size="medium" textAlign="center">Did you know?</Text>
                        </Box>
                    </Box>
                    <Box height="xxsmall"/>
                    <Box pad="medium" background="#006400" width="medium" round="small" alignSelf="center">
                        <Paragraph size="xxlarge">EV batteries can still have close to 70% battery life left when it is no longer useful in an electric vehicle.</Paragraph>
                    </Box>
                </Box>
            </Grid>
        </Box>
    </Grommet>
    );

}

export default LogIn;