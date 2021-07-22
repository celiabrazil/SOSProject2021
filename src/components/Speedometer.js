import React from "react";
import ReactSpeedometer from "react-d3-speedometer";

const Speedometer = ({ scaleValue }) => {
  return (
    <div>
      <ReactSpeedometer
        width={500}
        needleHeightRatio={0.7}
        value={scaleValue}
        currentValueText="Environmental Scale"
        customSegmentLabels={[
          {
            text: "Very Bad",
            position: "INSIDE",
            color: "#555",
          },
          {
            text: "Bad",
            position: "INSIDE",
            color: "#555",
          },
          {
            text: "Ok",
            position: "INSIDE",
            color: "#555",
            fontSize: "19px",
          },
          {
            text: "Good",
            position: "INSIDE",
            color: "#555",
          },
          {
            text: "Great",
            position: "INSIDE",
            color: "#555",
          },
        ]}
        ringWidth={47}
        needleTransitionDuration={3333}
        needleTransition="easeElastic"
        needleColor={"black"}
        textColor={"#d8dee9"}
      />
    </div>
  );
};

export default Speedometer;
