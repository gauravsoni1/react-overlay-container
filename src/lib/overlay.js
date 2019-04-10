import React from "react";

import ReactLoading from "react-loading";

const Overlay = props => {
  const styles = {
    overlayContainer: {
      position: "relative",
      width: "100%",
      height: "100%"
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
    <>
      {!props.disabled ? (
        <div style={styles.overlayContainer}>
          {props.children}
          <div style={styles.overlay}>
            {props.overlayData}
            {props.loading ? <ReactLoading {...props.loadingStyle} /> : null}
          </div>
        </div>
      ) : (
        props.children
      )}
    </>
  );
};

export default Overlay;
