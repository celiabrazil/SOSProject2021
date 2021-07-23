import React from "react";
import { Figma, Github, Document } from "grommet-icons";
import { Box, Anchor } from "grommet";

var phantom = {
  display: "relative",
  padding: "10px",
  width: "100%",
  bottom: 0,
};

function Footer() {
  return (
    <div className="footer">
      <footer className="py-5 bg-dark " style={phantom}>
        <div className="container">
          <p className="m-0 text-center text-white">
            <Box direction="row" gap="small" justify="center">
              <Anchor
                target="_blank"
                href="https://www.figma.com/file/Ou4Mrw128p0QQTx8agtkOg/Prototype01?node-id=0%3A1"
                icon={<Figma color="white" size="large" />}
              />
              <Anchor
                target="_blank"
                href="https://github.com/celiabrazil/SOSProject2021"
                icon={<Github color="white" size="large" />}
              />
              <Anchor
                target="_blank"
                href="https://devpost.com/"
                icon={<Document color="white" size="large" />}
              />
            </Box>
            <br />
            Copyright &copy; Believe 2021
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
