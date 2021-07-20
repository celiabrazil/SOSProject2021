import React from "react";
import styled from "styled-components";

const Style = styled.div``;

function About() {
  return (
    <Style>
      <div className="about">
        <img
          className="img-fluid rounded mb-4 mb-lg-0"
          src="http://placehold.it/900x400"
          alt=""
        />

        {
          //Logo Here
        }
        <br />
        <br />
        <h1>About us</h1>
        <p>
          <h5>Misson Statement</h5>
          Statement
        </p>
      </div>
    </Style>
  );
}

export default About;
