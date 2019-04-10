import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import React from "react";
import ReactLoading from "react-loading";

var Overlay = function Overlay(props) {
  var styles = {
    overlayContainer: {
      position: "relative",
      width: "100%",
      height: "100%"
    },
    overlay: _objectSpread({
      position: "absolute",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      top: "0",
      left: "0",
      zIndex: "100",
      backgroundColor: "rgba(135, 134, 134, 0.838)",
      height: "100%",
      width: "100%"
    }, props.customStyle)
  };
  return React.createElement(React.Fragment, null, !props.disabled ? React.createElement("div", {
    style: styles.overlayContainer
  }, props.children, React.createElement("div", {
    style: styles.overlay
  }, props.overlayData, props.loading ? React.createElement(ReactLoading, props.loadingStyle) : null)) : props.children);
};

export default Overlay;