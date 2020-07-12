import React from "react";

const GameBox = (Component) => {
  return function WrappedComponent(props) {
    return <Component {...props} />;
  };
};

export default GameBox;
