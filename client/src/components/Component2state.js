import { useMemo } from "react";
import "./Component2state.css";

const Component2state = ({ propPosition, propTop, propLeft }) => {
  const component2state3Style = useMemo(() => {
    return {
      position: propPosition,
      top: propTop,
      left: propLeft,
    };
  }, [propPosition, propTop, propLeft]);

  return (
    <div className="component-2state3" style={component2state3Style}>
      <div className="component-2state3-child" />
      <img className="vector-icon" loading="lazy" alt="" src="/vector.svg" />
    </div>
  );
};

export default Component2state;
