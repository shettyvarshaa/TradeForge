import { useCallback } from "react";
import FrameComponent4 from "../components/FrameComponent4";
import { useNavigate } from "react-router-dom";
import "./SelectedPMSPage1.css";

const SelectedPMSPage1 = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/contract-signing-page");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="selected-pms-page-2">
      <h1 className="you-tube-account1">You tube account</h1>
      <h1 className="portfolio-manager-monthly1">
        Portfolio Manager Monthly Report
      </h1>
      <div className="sidebar1">
        <div className="menu1">
          <div className="leading-content1">
            <div className="header1">
              <div className="logo1">
                <img
                  className="mask-group-icon1"
                  loading="lazy"
                  alt=""
                  src="/mask-group.svg"
                />
                <h3 className="payrole1">DataLeasing</h3>
              </div>
            </div>
            <div className="workspace2">
              <div className="divider2" />
              <div className="workspace3">
                <div className="rounded-rectangle1" />
                <input className="dropbox-1-11" type="checkbox" />
                <img className="twilio-1-icon1" alt="" src="/twilio-1.svg" />
                <div className="text-and-icon1">
                  <div className="text12">
                    <div className="dropbox1">Dropbox</div>
                  </div>
                  <img
                    className="icon-chevron-down1"
                    alt=""
                    src="/icon--chevrondown.svg"
                  />
                </div>
              </div>
              <div className="divider3" />
            </div>
            <div className="navigation2">
              <div className="vertical-navigation8">
                <div className="content8">
                  <img className="icon22" alt="" src="/icon.svg" />
                  <div className="vertical-navigation-content">Home</div>
                </div>
              </div>
              <div className="vertical-navigation9">
                <div className="content9">
                  <img className="icon23" alt="" src="/icon-1.svg" />
                  <div className="text13">Earnings</div>
                </div>
              </div>
              <div className="vertical-navigation10">
                <div className="content10">
                  <img className="icon24" alt="" src="/icon-2.svg" />
                  <div className="text14">Top strategy sellers</div>
                </div>
              </div>
              <div className="vertical-navigation11">
                <div className="content11">
                  <img className="icon25" alt="" src="/icon-3.svg" />
                  <div className="text15">Transactions</div>
                </div>
              </div>
              <div className="vertical-navigation12">
                <div className="content12">
                  <img className="icon26" alt="" src="/icon-4.svg" />
                  <div className="text16">Check out</div>
                </div>
              </div>
              <div className="vertical-navigation13">
                <div className="content13">
                  <img className="icon27" alt="" src="/icon-5.svg" />
                  <div className="text17">Insurance</div>
                </div>
              </div>
              <div className="vertical-navigation14">
                <div className="content14">
                  <img className="icon28" alt="" src="/icon-6.svg" />
                  <div className="text18">Cards</div>
                </div>
              </div>
            </div>
            <div className="navigation3">
              <div className="vertical-navigation15">
                <div className="content15">
                  <img className="icon29" alt="" src="/icon-7.svg" />
                  <div className="breakout-strategy1">Settings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-parent27">
        <FrameComponent4 />
        <div className="frame-wrapper16">
          <main className="frame-main">
            <div className="frame-parent28">
              <div className="overview-of-the-data-container">
                <h1 className="overview-of-the1">Overview of the data</h1>
              </div>
              <h3 className="breakout-strategy2">Breakout strategy</h3>
            </div>
            <section className="linked-in-parent">
              <div className="linked-in">
                <h3 className="a-breakout-strategy1">{`With over 15 years of SEBI-certified experience in financial advice and portfolio management across various sectors, including real estate and the stock market, I'm dedicated to guiding traders through market complexities.  Unlock the market's potential with my proven Breakout Strategy, capitalizing on momentum by entering trades strategically when prices break out of established ranges. `}</h3>
                <div className="rectangle-parent1">
                  <div className="rectangle-div" />
                  <button className="button9" onClick={onButtonClick}>
                    <div className="rent-to-view1">
                      Rent to view the strategy
                    </div>
                    <div className="text-container">
                      <div className="text19">
                        <div className="badge-text-green-container">
                          <div className="badge-text-green1">
                            <div className="text20">+23%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="frame-wrapper17">
                <button className="group-button" onClick={onGroupButtonClick}>
                  <div className="frame-child4" />
                  <div className="go-back1">Go back</div>
                </button>
              </div>
            </section>
            <h1 className="linkedin1">LinkedIn</h1>
            <h1 className="asset-allocation1">Asset allocation</h1>
          </main>
        </div>
      </div>
      <img
        className="asset-allocation-conservative-icon1"
        loading="lazy"
        alt=""
        src="/assetallocationconservative-1@2x.png"
      />
    </div>
  );
};

export default SelectedPMSPage1;
