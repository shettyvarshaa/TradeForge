import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SelectedPMSPage from "./pages/SelectedPMSPage";
import ContractSigningPage from "./pages/ContractSigningPage";
import PrePaymentPage from "./pages/PrePaymentPage";
import ContractSigningPageAgreed from "./pages/ContractSigningPageAgreed";
import PostPaymentPage from "./pages/PostPaymentPage";
import PostSignInWelcomePage from "./pages/PostSignInWelcomePage";
import PMSEntryPage from "./pages/PMSEntryPage";
import ExplorePage from "./pages/ExplorePage";
import SelectedPMSPage1 from "./pages/SelectedPMSPage1";
import CourseRegistration from "./pages/CourseRegistration";
import { contractABI } from "./abi";
import { Admin } from "./pages/Admin";

function App() {

  const [web3, setWeb3] = useState(null);
  const [courseContract, setCourseContract] = useState(null);
  const [courseFee, setCourseFee] = useState('');
  const contractAddress = '0x6f634154d73fe1cb92b48028c06faf49a3720f7c';

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(() => {
          const web3Instance = new Web3(window.ethereum);
          setWeb3(web3Instance);

          const courseInstance = new web3Instance.eth.Contract(contractABI, contractAddress);
          setCourseContract(courseInstance);

          courseInstance.methods.courseFee().call()
            .then(fee => {
              setCourseFee(web3Instance.utils.fromWei(fee, 'ether'));
            });
        })
        .catch(err => {
          // Handle error if the user rejects the connection request
          console.error(err);
        });
    } else {
      alert('Please install an another Ethereum wallet.');
    }
  }, []);

  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/contract-signing-page":
        title = "";
        metaDescription = "";
        break;
      case "/pre-payment-page":
        title = "";
        metaDescription = "";
        break;
      case "/contract-signing-page-agreed":
        title = "";
        metaDescription = "";
        break;
      case "/post-payment-page":
        title = "";
        metaDescription = "";
        break;
      case "/post-signin-welcome-page":
        title = "";
        metaDescription = "";
        break;
      case "/pms-entry-page":
        title = "";
        metaDescription = "";
        break;
      case "/explore-page":
        title = "";
        metaDescription = "";
        break;
      case "/selected-pms-page-2":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<ExplorePage />} />
      <Route path="/selected-pms-page-1" element={<SelectedPMSPage />} />
      <Route path="/contract-signing-page" element={<ContractSigningPage />} />
      <Route path="/pre-payment-page" element={<PrePaymentPage />} />
      <Route
        path="/contract-signing-page-agreed"
        element={<ContractSigningPageAgreed />}
      />
      <Route path="/registration" element={<CourseRegistration web3={web3} courseContract={courseContract} courseFee={courseFee} />} />
      <Route
        path="/post-signin-welcome-page"
        element={<PostSignInWelcomePage />}
      />
      <Route path="/pms-entry-page" element={<PMSEntryPage />} />
      <Route path="/selected-pms-page-2" element={<SelectedPMSPage1 />} />
      {/* <Route index element={<CourseRegistration web3={web3} courseContract={courseContract} courseFee={courseFee} />} /> */}
      <Route path="/admin" element={<Admin web3={web3} courseContract={courseContract} courseFee={courseFee} />} />
    </Routes>
  );
}
export default App;
