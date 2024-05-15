import { useCallback } from "react";
import Sidebar from "../components/Sidebar";
import FrameComponent from "../components/FrameComponent";
import { useNavigate } from "react-router-dom";
import "./SelectedPMSPage.css";

const SelectedPMSPage = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/contract-signing-page");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/explore-page");
  }, [navigate]);

  return (
    <div className="selected-pms-page-1">
      <h1 className="you-tube-account">Youtube account</h1>
      <h1 className="portfolio-manager-monthly">
        <a href="">Portfolio Manager Monthly Report</a>
      </h1>
      <Sidebar text=" Check out" verticalNavigation={false} />
      <div className="frame-parent">
        <FrameComponent />
        <div className="frame-wrapper">
          <main className="frame-group">
            <div className="frame-container">
              <div className="overview-of-the-data-wrapper">
                <h1 className="overview-of-the">Overview of the data</h1>
              </div>
              <h3 className="breakout-strategy">Breakout strategy</h3>
            </div>
            <section className="frame-section">
              <div className="a-breakout-strategy-aims-to-en-parent">
                <h3 className="a-breakout-strategy">{`A breakout strategy aims to enter a trade as soon as the price manages to break out of its range. Traders are looking for strong momentum and the actual breakout is the signal to enter the position and profit from the market movement that follows. Traders may enter the positions in the market, which means they will have to closely monitor the price action, or by placing buy-stop and sell-stop orders. `}</h3>
                <div className="rectangle-parent">
                  <div className="frame-child" />
                  <button className="button" onClick={onButtonClick}>
                    <div className="rent-to-view">
                      Rent to view the strategy
                    </div>
                    <div className="text-wrapper">
                      <div className="text">
                        <div className="badge-text-green-wrapper">
                          <div className="badge-text-green">
                            <div className="text1">+23%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="frame-div">
                <button
                  className="rectangle-group"
                  onClick={onGroupButtonClick}
                >
                  <div className="frame-item" />
                  <div className="go-back">Go back</div>
                </button>
              </div>
            </section>
            <h1 className="linkedin">LinkedIn</h1>
            <h1 className="asset-allocation">Asset allocation</h1>
          </main>
        </div>
      </div>
      <img
        className="asset-allocation-conservative-icon"
        loading="lazy"
        alt=""
        src="/assetallocationconservative-1@2x.png"
      />
    </div>
  );
};

export default SelectedPMSPage;
