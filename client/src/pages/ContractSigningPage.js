import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import RightMenu from "../components/RightMenu";
import "./ContractSigningPage.css";

const ContractSigningPage = () => {
  return (
    <div className="contract-signing-page">
      <Sidebar
        text="Check out"
        verticalNavigation={false}
        verticalNavigationHeight="1.625rem"
        iconAlignSelf="stretch"
        iconLineHeight="160%"
        iconMinWidth="unset"
        iconPadding="var(--padding-499xl) var(--padding-base) 0rem"
      />
      <main className="component">
        <Navbar heading="CHECK OUT" />
        <RightMenu />
      </main>
    </div>
  );
};

export default ContractSigningPage;
