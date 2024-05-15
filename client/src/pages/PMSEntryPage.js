import NavbarInstance from "../components/NavbarInstance";
import "./PMSEntryPage.css";

const PMSEntryPage = () => {
  return (
    <div className="pms-entry-page">
      <div className="pms-entry-page-child" />
      <NavbarInstance />
      <main className="pms-entry-page-inner">
        <form className="frame-form">
          <div className="create-your-data-to-lease-wrapper">
            <h2 className="create-your-data">CREATE YOUR DATA TO LEASE</h2>
          </div>
          <div className="frame-parent6">
            <div className="firm-name-input-parent">
              <div className="firm-name-input">
                <div className="name-of-the-firmindividual-parent">
                  <div className="name-of-the">Name of the firm/individual</div>
                  <div className="frame-inner" />
                </div>
                <div className="email-id">Email Id *</div>
              </div>
              <div className="frame-parent7">
                <div className="rectangle-container">
                  <input className="rectangle-input" type="text" />
                  <div className="sebi-registration-number">
                    SEBI Registration number
                  </div>
                </div>
                <div className="phone-number">Phone Number *</div>
              </div>
            </div>
            <div className="professional-network-input">
              <input className="professional-network-input-child" type="text" />
              <input className="professional-network-input-item" type="text" />
            </div>
          </div>
          <div className="frame-parent8">
            <div className="frame-parent9">
              <div className="frame-wrapper6">
                <div className="sebi-certificate-number-if-an-parent">
                  <div className="sebi-certificate-number">
                    SEBI certificate number (if any)
                  </div>
                  <input className="registration-background" type="text" />
                </div>
              </div>
              <div className="account-link-box">
                <input className="video-channel-label" type="text" />
                <div className="pms-account-link">
                  PMS account link (if any)
                </div>
              </div>
            </div>
            <div className="common-background-parent">
              <div className="common-background">
                <input className="common-background-child" type="text" />
                <div className="youtube-account-linkif">
                  Youtube account link(if any)
                </div>
              </div>
              <div className="frame-wrapper7">
                <div className="company-label-parent">
                  <div className="company-label">
                    <div className="linkedin-account-link">
                      LinkedIn account link
                    </div>
                  </div>
                  <div className="link-input-box" />
                </div>
              </div>
            </div>
          </div>
          <div className="upload-button-label-wrapper">
            <button className="upload-button-label">
              <img
                className="upload-button-label-child"
                alt=""
                src="/rectangle-9.svg"
              />
              <div className="upload">UPLOAD</div>
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default PMSEntryPage;
