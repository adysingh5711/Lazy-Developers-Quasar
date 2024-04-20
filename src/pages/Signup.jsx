import Loin from "../components/Signup/Loin";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="desktop-7">
      <main className="login-page-design-1">
        <img
          className="e31fb982e6d87f239196db2b3e9ccc-icon"
          alt=""
          src="/89e31fb982e6d87f239196db2b3e9ccc-copy-2@2x.png"
        />
        <div className="loin-wrapper">
          <Loin />
        </div>
        <div className="penguin">
          <img className="leaves-icon" alt="" src="/leaves@2x.png" />
          <img
            className="penguin-icon"
            loading="lazy"
            alt=""
            src="/penguin@2x.png"
          />
        </div>
      </main>
    </div>
  );
};

export default Signup;
