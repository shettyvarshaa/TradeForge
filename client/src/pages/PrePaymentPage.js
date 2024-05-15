import { useCallback } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Component2state from "../components/Component2state";
import { useNavigate } from "react-router-dom";
import "./PrePaymentPage.css";

const PrePaymentPage = () => {
  const navigate = useNavigate();

  const onButton1Click = useCallback(() => {
    navigate("/post-payment-page");
  }, [navigate]);

  return (
    <div className="pre-payment-page">
      <Sidebar
        text="Check out"
        verticalNavigation
        verticalNavigationHeight="unset"
        iconAlignSelf="unset"
        iconLineHeight="1.625rem"
        iconMinWidth="4rem"
        iconPadding="var(--padding-433xl) var(--padding-base) 0rem"
      />
      <main className="navbar-parent">
        <Navbar heading="CHECK OUT" />
        <section className="frame-wrapper1">
          <div className="frame-parent1">
            <div className="data-rental-agreement-parent">
              <h1 className="data-rental-agreement">Data rental agreement</h1>
              <div className="this-data-rental-container">
                <p className="blank-line">&nbsp;</p>
                <p className="this-data-rental">
                  This Data Rental Agreement (the "Agreement") is entered into
                  between [Your Company Name], with its principal place of
                  business at [Your Address] (the "Provider"), and [Renter's
                  Name], an individual residing at [Renter's Address] (the
                  "Renter").
                </p>
                <p className="blank-line1">&nbsp;</p>
                <p className="data-description">*1. Data Description:</p>
                <p className="the-provider-agrees">
                  The Provider agrees to rent out anonymized data to the Renter.
                  The data may include but is not limited to various types of
                  information such as demographic data, transaction records,
                  survey responses, or any other data specified by the Provider.
                </p>
                <p className="rental-period">*2. Rental Period:</p>
                <p className="the-rental-period">
                  The rental period shall commence upon the signing of this
                  Agreement and continue for a duration of 120 days/2 Months
                  i.e. from 01/JAN/2024 to 30/MARCH/2024.
                </p>
                <p className="rental-fee">*3. Rental Fee:</p>
                <p className="in-consideration-for">
                  In consideration for the rental of the data, the Renter agrees
                  to pay the Provider a rental fee of the fixed amount 100 gwei.
                </p>
                <p className="permitted-use">*4. Permitted Use:</p>
                <p className="the-renter-agrees">
                  The Renter agrees to use the rented data solely for
                  educational purposes and not for any other purpose.
                </p>
                <p className="compliance-with-laws">
                  *5. Compliance with Laws:
                </p>
                <p className="the-renter-agrees1">
                  The Renter agrees to comply with all applicable laws,
                  regulations, and ethical standards governing the use and
                  handling of the rented data.
                </p>
                <p className="entire-agreement">*6. Entire Agreement:</p>
                <p className="this-agreement-constitutes">
                  This Agreement constitutes the entire agreement between the
                  parties regarding the rental of the data and supersedes all
                  prior agreements and understandings, whether written or oral,
                  relating to the subject matter hereof.
                </p>
                <p className="in-witness-whereof">
                  IN WITNESS WHEREOF, the parties hereto have executed this
                  Agreement as of the date first above written.
                </p>
              </div>
            </div>
            <div className="frame-wrapper2">
              <div className="frame-parent2">
                <div className="frame-wrapper3">
                  <div className="frame-parent3">
                    <div className="frame-wrapper4">
                      <div className="component-2state3-parent">
                        <Component2state
                          propPosition="absolute"
                          propTop="0.063rem"
                          propLeft="0.063rem"
                        />
                        <div className="component-5">
                          <div className="component-5-child" />
                        </div>
                      </div>
                    </div>
                    <h3 className="i-agree-to">
                      I agree to the terms and conditions
                    </h3>
                  </div>
                </div>
                <div className="frame-parent4">
                  <div className="wrapper">
                    <button className="button1">
                      <div className="signed">SIGNED</div>
                    </button>
                  </div>
                  <button className="button2">
                    <div className="pay-through-metamask">
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

export default PrePaymentPage;
