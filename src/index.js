import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Overlay } from "./lib";

const CustomComponent = () => {
  return <div>Custom component to show on the overlay</div>;
};

class App extends Component {
  state = {
    disabled:false
  };

  toggleOverlay = () =>{
    this.setState((prevState)=>{
      return({overlayHidden:!prevState.overlayHidden});
    })
  };

  render() {
    return (
      <>
        <button onClick={this.toggleOverlay}>Toggle</button>
        <Overlay
          disabled
          loading={true}
          loadingStyle={{ type: "bars", color: "green" }}
          overlayData={<CustomComponent />}
          customStyle={{ backgroundColor: "rgba(211,231,22,0.6)" }}
        >
          <h1 style={{ height: "200px" }}>
            I am loading some data here from server
          </h1>
        </Overlay>
      </>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById("root")
);
