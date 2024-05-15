import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import FrameComponent3 from "../components/FrameComponent3";
import "./ExplorePage.css";

const ExplorePage = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onVerticalNavigationContainer4Click = useCallback(() => {
    navigate("/contract-signing-page");
  }, [navigate]);

  const onButton2Click = useCallback(() => {
    navigate("/pms-entry-page");
  }, [navigate]);

  const onButton1Click = useCallback(() => {
    navigate("/selected-pms-page-2");
  }, [navigate]);

  return (
    <div className="explore-page">
      <div className="sidebar-parent">
        <div className="sidebar">
          <div className="menu">
            <div className="leading-content">
              <div className="header">
                <div className="logo">
                  <img
                    className="mask-group-icon"
                    loading="lazy"
                    alt=""
                    src="/mask-group.svg"
                  />
                  <h3 className="payrole">DataLeasing</h3>
                </div>
              </div>
              <div className="workspace">
                <div className="divider" />
                <div className="workspace1">
                  <div className="rounded-rectangle" />
                  <input className="dropbox-1-1" type="checkbox" />
                  <img className="twilio-1-icon" alt="" src="/twilio-1.svg" />
                  <div className="text-and-icon">
                    <div className="text2">
                      <div className="dropbox">Dropbox</div>
                    </div>
                    <img
                      className="icon-chevron-down"
                      alt=""
                      src="/icon--chevrondown.svg"
                    />
                  </div>
                </div>
                <div className="divider1" />
              </div>
              <div className="navigation">
                <div className="vertical-navigation">
                  <div className="content">
                    <img className="icon" alt="" src="/icon.svg" />
                    <div className="text3">Home</div>
                  </div>
                </div>
                <div className="vertical-navigation1">
                  <div className="content1">
                    <img className="icon1" alt="" src="/icon-1.svg" />
                    <div className="text4">Earnings</div>
                  </div>
                </div>
                <div className="vertical-navigation2">
                  <div className="content2">
                    <img className="icon2" alt="" src="/icon-2.svg" />
                    <div className="text5">Top strategy sellers</div>
                  </div>
                </div>
                <div className="vertical-navigation3">
                  <div className="content3">
                    <img className="icon3" alt="" src="/icon-3.svg" />
                    <div className="text6">Transactions</div>
                  </div>
                </div>
                <div
                  className="vertical-navigation4"
                  onClick={onVerticalNavigationContainer4Click}
                >
                  <div className="content4">
                    <img className="icon4" alt="" src="/icon-4.svg" />
                    <div className="text7">Check out</div>
                  </div>
                </div>
                <div className="vertical-navigation5">
                  <div className="content5">
                    <img className="icon5" alt="" src="/icon-5.svg" />
                    <div className="text8">Insurance</div>
                  </div>
                </div>
                <div className="vertical-navigation6">
                  <div className="content6">
                    <img className="icon6" alt="" src="/icon-6.svg" />
                    <div className="text9">Cards</div>
                  </div>
                </div>
              </div>
              <div className="navigation1">
                <div className="vertical-navigation7">
                  <div className="content7">
                    <img className="icon7" alt="" src="/icon-7.svg" />
                    <div className="text10">Settings</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="button5" onClick={onButton2Click}>
          <img className="icon8" alt="" src="/icon1.svg" />
          <div className="create-a-contract-wrapper">
            <div className="create-a-contract">CREATE</div>
          </div>
          <img className="icon9" alt="" src="/icon1.svg" />
        </button>
      </div>
      <main className="navbar-container">
        <header className="navbar">
          <div className="title">
            <h1 className="heading">Top Trade strategy leasers</h1>
            <div className="sub">Here’s your dashboard overview.</div>
            <div className="breadcrumbs">
              <div className="contract">Contract</div>
              <img className="icon10" alt="" src="/icon-8.svg" />
              <div className="contract1">General Info</div>
              <img className="icon11" alt="" src="/icon-8.svg" />
              <div className="contract2">Scope of Work</div>
              <img className="icon12" alt="" src="/icon-8.svg" />
              <div className="contract3">Payment Details</div>
              <img className="icon13" alt="" src="/icon-8.svg" />
              <div className="general-info">Sign</div>
            </div>
          </div>
          <div className="right-menu">
            <div className="button6">
              <img className="icon14" alt="" src="/icon1.svg" />
              <div className="create-a-contract1">CREATE</div>
              <img className="icon15" alt="" src="/icon1.svg" />
            </div>
            <div className="icon16">
              <img className="icon17" alt="" src="/icon-13.svg" />
            </div>
            <div className="user">
              <div className="avatar">
                <img
                  className="image-icon"
                  loading="lazy"
                  alt=""
                  src="/image@2x.png"
                />
                <img className="check-icon" alt="" src="/check.svg" />
              </div>
              <div className="text11">
                <div className="chris-miguel">Chris Miguel</div>
                <div className="freelancer">Freelancer</div>
              </div>
            </div>
          </div>
        </header>
        <section className="frame-wrapper8">
          <div className="frame-parent10">
            <div className="frame-wrapper9">
              <div className="frame-parent11">
                <FrameComponent3
                  aSecurities="4A Securities"
                  group39787="/group-39787.svg"
                  onButton1Click={onButtonClick}
                />
                <div className="frame-parent12">
                  <div className="frame-wrapper10">
                    <div className="arch-finance-ltd-parent">
                      <div className="arch-finance-ltd">ARCH Finance LTD</div>
                      <button className="button7" onClick={onButton1Click}>
                        <img className="icon18" alt="" src="/icon1.svg" />
                        <div className="create-a-contract2">Details</div>
                        <img className="icon19" alt="" src="/icon1.svg" />
                      </button>
                    </div>
                  </div>
                  <div className="frame-parent13">
                    <div className="portfolio-manager-aravind-sh-parent">
                      <div className="portfolio-manager-container">
                        <span>Portfolio Manager :</span>
                        <span> Aravind Share Brokers Private Limited</span>
                      </div>
                      <div className="frame-wrapper11">
                        <div className="registration-number-inp00000-parent">
                          <div className="registration-number-container">
                            <span>{`Registration Number : `}</span>
                            <span>INP000004730</span>
                          </div>
                          <div className="frame-wrapper12">
                            <img
                              className="group-icon"
                              alt=""
                              src="/group-39787-1.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="frame-wrapper13">
                    <div className="frame-parent14">
                      <div className="profit-wrapper">
                        <div className="profit">{`PROFIT `}</div>
                      </div>
                      <div className="ellipse-parent">
                        <div className="ellipse-div" />
                        <div className="loss-wrapper">
                          <div className="loss">LOSS</div>
                        </div>
                        <div className="frame-parent15">
                          <div className="frame-parent16">
                            <div className="profit-container">
                              <div className="profit1">{`PROFIT `}</div>
                            </div>
                            <div className="frame-child1" />
                            <div className="div">78.34%</div>
                          </div>
                          <div className="div1">20.14%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="icbaseline-star" />
                </div>
              </div>
            </div>
            <div className="frame-parent17">
              <div className="frame-wrapper14">
                <div className="frame-parent18">
                  <div className="frame-parent19">
                    <div className="frame-parent20">
                      <div className="frame-parent21">
                        <div className="frame-parent22">
                          <div className="frame-parent23">
                            <div className="logics-ltd-wrapper">
                              <div className="logics-ltd">101 LOGICS LTD</div>
                            </div>
                          </div>
                          <button className="button8">
                            <img className="icon20" alt="" src="/icon1.svg" />
                            <div className="create-a-contract3">Details</div>
                            <img className="icon21" alt="" src="/icon1.svg" />
                          </button>
                        </div>
                        <div className="registration-number-container1">
                          <span>{`Registration Number : `}</span>
                          <span>INP000004730</span>
                        </div>
                      </div>
                      <div className="portfolio-manager-raman-container">
                        <span>Portfolio Manager :R</span>
                        <span>Aman traders Private Limited</span>
                      </div>
                    </div>
                    <div className="value-comparer">
                      <img
                        className="value-comparer-child"
                        alt=""
                        src="/group-39787-1.svg"
                      />
                    </div>
                  </div>
                  <div className="icbaseline-star1" />
                  <div className="frame-wrapper15">
                    <div className="frame-parent24">
                      <div className="profit-frame">
                        <div className="profit2">{`PROFIT `}</div>
                      </div>
                      <div className="ellipse-group">
                        <div className="frame-child2" />
                        <div className="loss-container">
                          <div className="loss1">LOSS</div>
                        </div>
                        <div className="frame-parent25">
                          <div className="frame-parent26">
                            <div className="profit-wrapper1">
                              <div className="profit3">{`PROFIT `}</div>
                            </div>
                            <div className="frame-child3" />
                            <div className="div2">78.34%</div>
                          </div>
                          <div className="div3">20.14%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <FrameComponent3
                aSecurities="AAR Traders"
                group39787="/group-39787-1.svg"
                propFlex="0.9281"
                propGap="2rem"
                propMinWidth="6.688rem"
                propPadding="var(--padding-13xl) 0rem 0rem"
                propMinWidth1="1.387rem"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ExplorePage;
