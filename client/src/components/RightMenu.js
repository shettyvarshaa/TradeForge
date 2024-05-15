import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./RightMenu.css";

const RightMenu = () => {
  const navigate = useNavigate();

  const onComponent5Click = useCallback(() => {
    navigate("/contract-signing-page-agreed");
  }, [navigate]);

  return (
    <section className="right-menu2">
      <div className="navigation-parent">
        <div className="navigation6">
          <h1 className="data-rental-agreement2">Data rental agreement</h1>
        </div>
        <div className="content24">
          <div className="this-data-rental-container2">
            <p className="blank-line4">&nbsp;</p>
            <p className="this-data-rental2">
              This Data Rental Agreement (the "Agreement") is entered into
              between [Your Company Name], with its principal place of business
              at [Your Address] (the "Provider"), and [Renter's Name], an
              individual residing at [Renter's Address] (the "Renter").
            </p>
            <p className="blank-line5">&nbsp;</p>
            <p className="data-description2">*1. Data Description:</p>
            <p className="the-provider-agrees2">
              The Provider agrees to rent out anonymized data to the Renter. The
              data may include but is not limited to various types of
              information such as demographic data, transaction records, survey
              responses, or any other data specified by the Provider.
            </p>
            <p className="rental-period2">*2. Rental Period:</p>
            <p className="the-rental-period2">
              The rental period shall commence upon the signing of this
              Agreement and continue for a duration of 120 days/2 Months i.e.
              from 01/JAN/2024 to 30/MARCH/2024.
            </p>
            <p className="rental-fee2">*3. Rental Fee:</p>
            <p className="in-consideration-for2">
              In consideration for the rental of the data, the Renter agrees to
              pay the Provider a rental fee of the fixed amount 100 gwei.
            </p>
            <p className="permitted-use2">*4. Permitted Use:</p>
            <p className="the-renter-agrees4">
              The Renter agrees to use the rented data solely for educational
              purposes and not for any other purpose.
            </p>
            <p className="compliance-with-laws2">*5. Compliance with Laws:</p>
            <p className="the-renter-agrees5">
              The Renter agrees to comply with all applicable laws, regulations,
              and ethical standards governing the use and handling of the rented
              data.
            </p>
            <p className="entire-agreement2">*6. Entire Agreement:</p>
            <p className="this-agreement-constitutes2">
              This Agreement constitutes the entire agreement between the
              parties regarding the rental of the data and supersedes all prior
              agreements and understandings, whether written or oral, relating
              to the subject matter hereof.
            </p>
            <p className="in-witness-whereof2">
              IN WITNESS WHEREOF, the parties hereto have executed this
              Agreement as of the date first above written.
            </p>
          </div>
          <div className="content-inner">
            <div className="component-parent">
              <div className="component1">
                <div className="new-component-parent">
                  <div className="new-component">
                    <input
                      className="component-51"
                      type="checkbox"
                      onClick={onComponent5Click}
                    />
                  </div>
                  <h3 className="i-agree-to2">
                    I agree to the terms and conditions
                  </h3>
                </div>
              </div>
              <button className="button11">
                <div className="sign-contract1">SIGN CONTRACT</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RightMenu;
