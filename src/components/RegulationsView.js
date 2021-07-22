import React from "react";

class RegulationsView extends React.Component {
  render() {
    const information = this.props.information;

    return (
      <div className="InformationLink">
        {information.id ? (
          <>
            <div className="field">
              <span className="Recycle">Recycling: </span>
              <span className="link">
                <a href={information.recycle} target="_blank">
                  <b>Click to search the nearest recycling center</b>
                </a>
              </span>
            </div>

            <br />

            <div className="field">
              <span className="Dispose">Disposing: </span>
              <span className="link">
                <b>{information.dispose}</b>
              </span>
            </div>

            <br />

            <div className="field content">
              <span className="Transport">Transporting: </span>
              <span className="link">
                <a href={information.recycle} target="_blank">
                  <b>
                    Click to view the regulation regarding transporting EV
                    batteries
                  </b>
                </a>
              </span>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default RegulationsView;
