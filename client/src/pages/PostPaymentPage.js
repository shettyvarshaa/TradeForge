import ContinueButton from "../components/ContinueButton";
import "./PostPaymentPage.css";

const PostPaymentPage = () => {
  return (
    <div className="post-payment-page">
      <img
        className="sidebar-icon"
        loading="lazy"
        alt=""
        src="/sidebar@2x.png"
      />
      <div className="post-payment-page-inner">
        <div className="success-message-parent">
          <div className="success-message">
            <div className="you-have-successfully">
              You have successfully signed the contract !
            </div>
          </div>
          <div className="your-secret-key-wrapper">
            <h2 className="your-secret-key">YOUR SECRET KEY</h2>
          </div>
          <ContinueButton />
        </div>
      </div>
    </div>
  );
};

export default PostPaymentPage;
