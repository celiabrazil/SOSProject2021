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
      family: "Georgia",
      size: "18px",
      height: "20px",
    },
  },
};


function LogIn() {
    const [value, setValue] = React.useState('');
 
    const [checked, setChecked] = React.useState(true);
  return (
    <Grommet theme={theme}>
        <Box background="brand" height="xxsmall">
            Header
        </Box>
        
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
                                label="Remember me"
                                onChange={(event) => setChecked(event.target.checked)}
                            />
                        </Box>
                        <Box // Forgot Password
                            background="#303030"
                            align="center"
                            >
                            <Anchor href="#" label="Forgot Password?" />
                        </Box>
                    </Grid>

                <Button 
                    primary label="Login" 
                    href="./profile"
                    alignSelf="center"
                    size="xxlarge"
                    margin="small"
                    color="#6B9155"/>

                <Button // Create an Account Button
                    primary label="Create an Account" 
                    href="/profile"
                    alignSelf="center"
                    size="xlarge"
                    margin="large"
                    color="#98A0A6"
                />
                <Heading
                    alignSelf="center"
                    size="small"
                >OR</Heading>
                <Text
                    alignSelf="center"
                >Login Using</Text>
                
                <Button // Google Button
                    primary label="Google" 
                    href="/profile"
                    size="xlarge"
                    alignSelf="center"
                    margin="large"
                    color="#98A0A6"
                />

            </Box>
            <Box // right side of page
                background="#6B9155">
                <Box height="small"/>
                <Box pad="small" background="dark-3" width="small" round="small" alignSelf="center" align="center">
                    <Box pad="small" background="#98A0A6" width="small" round="small" align="center">
                        <Text size="large">Did you know?</Text>
                    </Box>
                </Box>
                <Box height="xxsmall"/>
                <Box pad="medium" background="dark-3" width="medium" round="small" alignSelf="center">
                    <Paragraph size="xxlarge">EV batteries can still have close to 70% battery life left when it is no longer useful in an electric vehicle.</Paragraph>
                </Box>
            </Box>
        </Grid>
    </Grommet>
    );

}

export default LogIn;