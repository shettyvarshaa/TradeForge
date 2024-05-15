import { useCallback } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Component2state from "../components/Component2state";
import { useNavigate } from "react-router-dom";
import "./ContractSigningPageAgreed.css";

const ContractSigningPageAgreed = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/registration");
  }, [navigate]);

  const onButton1Click = useCallback(() => {
    navigate("/post-payment-page");
  }, [navigate]);

  return (
    <div className="contract-signing-page-agreed">
      <Sidebar
        text="Check out"
        verticalNavigation
        verticalNavigationHeight="unset"
        iconAlignSelf="unset"
        iconLineHeight="1.625rem"
        iconMinWidth="4rem"
        iconPadding="var(--padding-433xl) var(--padding-base) 0rem"
      />
      <main className="navbar-group">
        <Navbar heading="CHECK OUT" />
        <section className="frame-wrapper5">
          <div className="frame-parent5">
            <div className="data-rental-agreement-wrapper">
              <h1 className="data-rental-agreement1">Data rental agreement</h1>
            </div>
            <div className="this-data-rental-agreement-th-parent">
              <div className="this-data-rental-container1">
                <p className="blank-line2">&nbsp;</p>
                <p className="this-data-rental1">
                  This Data Rental Agreement (the "Agreement") is entered into
                  between [Your Company Name], with its principal place of
                  business at [Your Address] (the "Provider"), and [Renter's
                  Name], an individual residing at [Renter's Address] (the
                  "Renter").
                </p>
                <p className="blank-line3">&nbsp;</p>
                <p className="data-description1">*1. Data Description:</p>
                <p className="the-provider-agrees1">
                  The Provider agrees to rent out anonymized data to the Renter.
                  The data may include but is not limited to various types of
                  information such as demographic data, transaction records,
                  survey responses, or any other data specified by the Provider.
                </p>
                <p className="rental-period1">*2. Rental Period:</p>
                <p className="the-rental-period1">
                  The rental period shall commence upon the signing of this
                  Agreement and continue for a duration of 120 days/2 Months
                  i.e. from 01/JAN/2024 to 30/MARCH/2024.
                </p>
                <p className="rental-fee1">*3. Rental Fee:</p>
                <p className="in-consideration-for1">
                  In consideration for the rental of the data, the Renter agrees
                  to pay the Provider a rental fee of the fixed amount 100 gwei.
                </p>
                <p className="permitted-use1">*4. Permitted Use:</p>
                <p className="the-renter-agrees2">
                  The Renter agrees to use the rented data solely for
                  educational purposes and not for any other purpose.
                </p>
                <p className="compliance-with-laws1">
                  *5. Compliance with Laws:
                </p>
                <p className="the-renter-agrees3">
                  The Renter agrees to comply with all applicable laws,
                  regulations, and ethical standards governing the use and
                  handling of the rented data.
                </p>
                <p className="entire-agreement1">*6. Entire Agreement:</p>
                <p className="this-agreement-constitutes1">
                  This Agreement constitutes the entire agreement between the
                  parties regarding the rental of the data and supersedes all
                  prior agreements and understandings, whether written or oral,
                  relating to the subject matter hereof.
                </p>
                <p className="in-witness-whereof1">
                  IN WITNESS WHEREOF, the parties hereto have executed this
                  Agreement as of the date first above written.
                </p>
              </div>
              <div className="component-state-wrapper">
                <div className="component-state">
                  <div className="input-field">
                    <div className="input-field-parent">
                      <div className="input-field1">
                        <Component2state />
                      </div>
                      <h3 className="i-agree-to1">
                        I agree to the terms and conditions
                      </h3>
                    </div>
                  </div>
                  <div className="sign-button">
                    <button className="button3" onClick={onButtonClick}>
                      <div className="sign-contract">SIGN CONTRACT</div>
                    </button>
                  </div>
                  <button className="button4" onClick={onButton1Click}>
                    <div className="pay-through-metamask1">
                      Pay through Metamask
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContractSigningPageAgreed;
