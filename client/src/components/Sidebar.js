import { useMemo } from "react";
import "./Sidebar.css";

const Sidebar = ({
  text,
  verticalNavigation,
  verticalNavigationHeight,
  iconAlignSelf,
  iconLineHeight,
  iconMinWidth,
  iconPadding,
}) => {
  const contentStyle = useMemo(() => {
    return {
      height: verticalNavigationHeight,
    };
  }, [verticalNavigationHeight]);

  const textStyle = useMemo(() => {
    return {
      alignSelf: iconAlignSelf,
      lineHeight: iconLineHeight,
      minWidth: iconMinWidth,
    };
  }, [iconAlignSelf, iconLineHeight, iconMinWidth]);

  const navigationStyle = useMemo(() => {
    return {
      padding: iconPadding,
    };
  }, [iconPadding]);

  return (
    <div className="sidebar2">
      <div className="menu2">
        <div className="leading-content2">
          <div className="header2">
            <div className="logo2">
              <img
                className="mask-group-icon2"
                loading="lazy"
                alt=""
                src="/mask-group.svg"
              />
              <h3 className="payrole2">DataLeasing</h3>
            </div>
          </div>
          <div className="workspace4">
            <div className="divider4" />
            <div className="workspace5">
              <div className="rounded-rectangle2" />
              <input className="dropbox-1-12" type="checkbox" />
              <img className="twilio-1-icon2" alt="" src="/twilio-1.svg" />
              <div className="text-and-icon2">
                <div className="text25">
                  <div className="dropbox2">Dropbox</div>
                </div>
                <img
                  className="icon-chevron-down2"
                  alt=""
                  src="/icon--chevrondown.svg"
                />
              </div>
            </div>
            <div className="divider5" />
          </div>
          <div className="navigation4">
            <div className="vertical-navigation16">
              <div className="content16">
                <img className="icon30" alt="" src="/icon.svg" />
                <div className="text26">Home</div>
              </div>
            </div>
            <div className="vertical-navigation17">
              <div className="content17">
                <img className="icon31" alt="" src="/icon-1.svg" />
                <div className="text27">Earnings</div>
              </div>
            </div>
            <div className="vertical-navigation18">
              <div className="content18">
                <img className="icon32" alt="" src="/icon-2.svg" />
                <div className="text28">Top strategy sellers</div>
              </div>
            </div>
            <div className="vertical-navigation19">
              <div className="content19">
                <img className="icon33" alt="" src="/icon-3.svg" />
                <div className="text29">Transactions</div>
              </div>
            </div>
            {!verticalNavigation && (
              <div className="vertical-navigation20">
                <div className="content20" style={contentStyle}>
                  <img className="icon34" alt="" src="/icon-4.svg" />
                  <div className="text30" style={textStyle}>
                    {text}
                  </div>
                </div>
              </div>
            )}
            <div className="vertical-navigation21">
              <div className="content21">
                <img className="icon35" alt="" src="/icon-5.svg" />
                <div className="text31">Insurance</div>
              </div>
            </div>
            <div className="vertical-navigation22">
              <div className="content22">
                <img className="icon36" alt="" src="/icon-6.svg" />
                <div className="text32">Cards</div>
              </div>
            </div>
          </div>
          <div className="navigation5" style={navigationStyle}>
            <div className="vertical-navigation23">
              <div className="content23">
                <img className="icon37" alt="" src="/icon-7.svg" />
                <div className="text33">Settings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
