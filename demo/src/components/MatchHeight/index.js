import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import MatchHeightManager from "./MatchHeightManager";

const MatchHeight = ({ children, channel = "default", ...rest }) => {
  // const [height, setHeight] = useState("auto");
  const ref = useRef(null);

  useEffect(() => {
    // Register element
    MatchHeight.manager.register(channel, ref.current);
    MatchHeight.manager.updateHeights(channel);

    return () => {
      MatchHeight.manager.deregister(channel, ref.current);
    };
  });

  return (
    <div ref={ref} {...rest}>
      {children}
    </div>
  );
};

MatchHeight.manager = new MatchHeightManager();

MatchHeight.propTypes = {
  children: PropTypes.node,
  channel: PropTypes.string,
};

MatchHeight.defaultProps = {
  children: "",
  channel: "default",
};

export default MatchHeight;
