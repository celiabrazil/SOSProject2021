import React from "react";
import styled from "styled-components";
import { Menu, Select } from "grommet";
import RegulationsView from "./RegulationsView";

const PageStyle = styled.div`
  text-align: center;
  margin-top: 10%;
  margin-bottom: 10%;
  const Style = styled.div
  font-family: 'Arvo';
`;
const countryInformation = [
  {
    id: "001",
    country: "United States",
    recycle: "https://search.earth911.com/?what=Lithium-ion+Batteries",
    dispose:
      "Do not dispose the battery in your trash. Contact the dealership you got the battery from to dispose the battery.",
    transport: "https://www.phmsa.dot.gov/lithiumbatteries",
  },
  {
    id: "002",
    country: "Canada",
    recycle: "https://search.earth911.com/?what=Lithium-ion+Batteries",
    dispose:
      "Do not dispose the battery in your trash. Contact the dealership you got the battery from to dispose the battery.",
    transport:
      "https://tc.canada.ca/en/dangerous-goods/shipping-importing-devices-containing-lithium-batteries#s4",
  },
];

class Regulations extends React.Component {
  state = {
    id: "",
    country: "",
    recycle: "",
    dispose: "",
    transport: "",
  };

  handleOnClick(e) {
    console.log("Clicked" + e);
    countryInformation.map((i) => {
      if (i.country === e) {
        console.log(i);
        this.setState(i);
      }
    });
  }

  render() {
    return (
      <PageStyle>
        <h1>
          Select country for information on Recycling/Disposing EV batteries
        </h1>
        <Select
          placeholder="Choose a country"
          options={["United States", "Canada"]}
          onChange={({ option }) => this.handleOnClick(option)}
        />
        <br />
        <br />
        <RegulationsView information={this.state} />
      </PageStyle>
    );
  }
}

export default Regulations;
