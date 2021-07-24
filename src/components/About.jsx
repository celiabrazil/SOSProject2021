import React from "react";
import styled from "styled-components";

const Style = styled.div`
  text-align: center;
`;

function About() {
  return (
    <Style>
      <div className="about m-5 p-5">
        {
          //Logo Here
        }
        <br />
        <br />
        <h1>About us</h1>
        <br />
        <p>
          <h5>Misson Statement</h5>
          Our goal is to provide a means for connecting EV car owners with Car
          Dealership/companies looking into repurposing the batteries and
          providing the customers with information about EV batteries. We have a
          environmental index rating to have the provide customers with the
          environmental friendliness of the batteries.
        </p>
        <img src="/CompanyLogo.png" alt="Company Logo" />
      </div>
    </Style>
  );
}

export default About;
