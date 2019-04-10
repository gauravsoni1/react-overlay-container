import React from "react";
import "./overlayStyle.css";

import ReactLoading from "react-loading";

const Overlay = props => {
  const styles = {
    overlayContainer: {
      position: "relative"
    },

    overlay: {
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      top: "0",
      left: "0",
      zIndex: "100",
      backgroundColor: "rgba(135, 134, 134, 0.838)",
      height: "100%",
      width: "100%",
      ...props.customStyle
    }
  };

  return (
    <div style={styles.overlayContainer}>
      {props.children}
      <div style={styles.overlay}>
        {props.overlayData}
        {props.loading ? <ReactLoading {...props.loadingStyle} /> : null}
      </div>
    </div>
  );
};

export default Overlay;
