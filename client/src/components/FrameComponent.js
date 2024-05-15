import Navbar from "./Navbar";
import "./FrameComponent.css";

const FrameComponent = () => {
  return (
    <div className="navbar-parent1">
      <Navbar heading="Seller profile" />
      <div className="a-securities-wrapper">
        <h1 className="a-securities">4A Securities</h1>
      </div>
    </div>
  );
};

export default FrameComponent;
