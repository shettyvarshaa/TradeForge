import { useMemo } from "react";
import "./FrameComponent3.css";

const FrameComponent3 = ({
  aSecurities,
  group39787,
  propFlex,
  propGap,
  propMinWidth,
  propPadding,
  propMinWidth1,
  onButton1Click,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      flex: propFlex,
      gap: propGap,
    };
  }, [propFlex, propGap]);

  const aSecuritiesStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const inputFilterStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const lOSSStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className="frame-parent33" style={frameDivStyle}>
      <div className="frame-parent34">
        <div className="frame-parent35">
          <div className="frame-parent36">
            <div className="frame-parent37">
              <div className="frame-parent38">
                <div className="a-securities-container">
                  <div className="a-securities1" style={aSecuritiesStyle}>
                    {aSecurities}
                  </div>
                </div>
              </div>
              <button className="button16" onClick={onButton1Click}>
                <img className="icon62" alt="" src="/icon1.svg" />
                <div className="create-a-contract7"><a href="/selected-pms-page-2">Details</a></div>
                <img className="icon63" alt="" src="/icon1.svg" />
              </button>
            </div>
            <div className="registration-number-container2">
              <span>{`Registration Number : `}</span>
              <span>INP000004730</span>
            </div>
          </div>
          <div className="portfolio-manager-container1">
            <span>Portfolio Manager :</span>
            <span> A C Choksi Share Brokers Private Limited</span>
          </div>
        </div>
        <div className="frame-wrapper21">
          <img
            className="frame-child7"
            loading="lazy"
            alt=""
            src={group39787}
          />
        </div>
      </div>
      <div className="icbaseline-star2" />
      <div className="function-tree">
        <div className="logic-gateway">
          <div className="input-filter" style={inputFilterStyle}>
            <div className="profit4">{`PROFIT `}</div>
          </div>
          <div className="ellipse-container">
            <div className="frame-child8" />
            <div className="loss-frame">
              <div className="loss2" style={lOSSStyle}>
                LOSS
              </div>
            </div>
            <div className="frame-parent39">
              <div className="frame-parent40">
                <div className="profit-wrapper2">
                  <div className="profit5">{`PROFIT `}</div>
                </div>
                <div className="frame-child9" />
                <div className="div4">78.34%</div>
              </div>
              <div className="div5">20.14%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
