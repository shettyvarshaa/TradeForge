import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./FrameComponent1.css";

const FrameComponent1 = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/explore-page");
  }, [navigate]);

  const onButton1Click = useCallback(() => {
    navigate("/explore-page");
  }, [navigate]);

  return (
    <div className="post-sign-in-welcome-page-inner">
      <div className="frame-parent30">
        <div className="welcome-to-tradeforge-group">
          <h1 className="welcome-to-tradeforge-container1">
            <span>{`Welcome to `}</span>
            <span className="tradeforge1">{`TradeForge `}</span>
          </h1>
          <div className="forging-trust-in-trading-data-container">
            <div className="forging-trust-in1">
              Forging trust in trading data
            </div>
          </div>
        </div>
        <div className="parent">
          <button className="button13" onClick={onButtonClick}>
            <div className="text36">
              <div className="get-started1">Get started</div>
              <div className="badge-text-green-wrapper1">
                <div className="badge-text-green4">
                  <div className="text37">+23%</div>
                </div>
              </div>
            </div>
          </button>
          <button className="button14" onClick={onButton1Click}>
            <div className="text38">
              <div className="browse-trade-secrets1">Browse trade secrets</div>
              <div className="badge-text-green-wrapper2">
                <div className="badge-text-green5">
                  <div className="text39">+23%</div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
