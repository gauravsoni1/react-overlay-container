import React from "react";
import ReactDOM from "react-dom";

import { Overlay } from "./lib";

const CustomComponent = () => {
  return <div>Custom component to show on the overlay</div>;
};

ReactDOM.render(
  <>
    <Overlay
      loading={true}
      loadingStyle={{ type: "bars", color: "green" }}
      overlayData={<CustomComponent/>}
      customStyle={{ backgroundColor: "rgba(211,231,22,0.6)" }}
    >
      <h1 style={{ height: "200px" }}>I am loading some data here from server</h1>
    </Overlay>
  </>,
  document.getElementById("root")
);
