import "./ContinueButton.css";

const ContinueButton = () => {
  return (
    <div className="continue-button">
      <div className="please-copy-your">Please copy your secret key</div>
      <div className="continue-button-inner">
        <textarea className="rectangle-textarea" rows={15} cols={41} />
      </div>
      <div className="continue-button-child">
        <button className="continue-wrapper">
          <div className="continue">Continue</div>
        </button>
      </div>
    </div>
  );
};

export default ContinueButton;
