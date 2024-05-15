import "./Navbar.css";

const Navbar = ({ heading }) => {
  return (
    <header className="navbar1">
      <div className="title1">
        <h1 className="heading1">{heading}</h1>
        <div className="sub1">Here’s your dashboard overview.</div>
        <div className="breadcrumbs1">
          <div className="contract4">Contract</div>
          <img className="icon38" alt="" src="/icon-8.svg" />
          <div className="contract5">General Info</div>
          <img className="icon39" alt="" src="/icon-8.svg" />
          <div className="contract6">Scope of Work</div>
          <img className="icon40" alt="" src="/icon-8.svg" />
          <div className="contract7">Payment Details</div>
          <img className="icon41" alt="" src="/icon-8.svg" />
          <div className="general-info1">Sign</div>
        </div>
      </div>
      <div className="right-menu1">
        <div className="button10">
          <img className="icon42" alt="" src="/icon1.svg" />
          <div className="create-a-contract4">CREATE</div>
          <img className="icon43" alt="" src="/icon1.svg" />
        </div>
        <div className="icon44">
          <img className="icon45" alt="" src="/icon-13.svg" />
        </div>
        <div className="user1">
          <div className="avatar1">
            <img
              className="image-icon1"
              loading="lazy"
              alt=""
              src="/image@2x.png"
            />
            <img className="check-icon1" alt="" src="/check.svg" />
          </div>
          <div className="text34">
            <div className="chris-miguel1">Chris Miguel</div>
            <div className="freelancer1">Freelancer</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
