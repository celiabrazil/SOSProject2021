import React from "react";
import styled from "styled-components";

const Style = styled.div`
  text-align: center;
`;

class BatteryPercent extends React.Component {
  state = {
    value: 100,
    text: "Scroll to see what you can do with you Battery usage %",
  };

  handleOnChange = (e) => {
    let text = "";
    if (e.target.value <= 70 && e.target.value > 20) {
      text =
        "The battery can be repurposed into solar battery or for street lights. Look up for a company looking for used batteries through our website";
    } else if (e.target.value < 20) {
      text =
        "Cannot be used anymore. Contact nearest dealership to dispose the battery";
    } else {
      text = "Still usable for you car";
    }
    this.setState({ value: e.target.value, text: text });
  };

  render() {
    return (
      <Style>
        <h1 className="Heading">Tesla Model X Usable Battery percent</h1>
        <br></br>
        <input
          type="range"
          min={0}
          max={100}
          value={this.state.value}
          className="BatteryPercent"
          onChange={this.handleOnChange}
        />
        <div className="PercentValue">{this.state.value}</div>
        <br />
        <h5>
          <div>{this.state.text}</div>
        </h5>
      </Style>
    );
  }
}

export default BatteryPercent;
