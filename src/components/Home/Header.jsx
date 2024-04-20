import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  function handleSignUp() {
    navigate("/signup ");
  }
  return (
    <section className="header">
      <header className="top-header">
        <div className="logo">
          <h3 className="logo1">
            <span className="jez">
              <span>ECO</span>
              <span className="span">{`  `}</span>
            </span>
            <b className="tech">{`PLAYGROUND  `}</b>
          </h3>
        </div>
        <nav className="menu-header">
          <b className="home">Home</b>
          <div className="why-us">Why Us</div>
          <div className="contact">Contact</div>
        </nav>
        <button className="button">
          <div className="sign" onClick={handleSignUp}>
            Sign Up
          </div>
        </button>
      </header>
      <div className="header1">
        <div className="frame-parent">
          <div className="frame-group">
            <button className="gamified-learning-wrapper">
              <div className="gamified-learning">Gamified Learning</div>
            </button>
            <div className="learn-the-fun-and-healthy-way-parent">
              <h1 className="learn-the-fun-container">
                <p className="learn-the-fun">
                  <span className="learn1">Learn</span>
                  <span>{` the fun, `}</span>
                </p>
                <p className="and-healthy-way">{`and healthy way `}</p>
                <p className="with-jez-tech">With Jez Tech</p>
              </h1>
              <div className="imagine-you-dont-container">
                <p className="imagine-you-dont">{`Imagine you don't need a diet because we provide `}</p>
                <p className="healthy-and-delicious">
                  healthy and delicious food for you!
                </p>
              </div>
            </div>
            <button className="start-now-wrapper">
              <div className="start-now">Start Now</div>
            </button>
          </div>
          <div className="feature-information">
            <div className="customer">
              <div className="div">5.000+</div>
              <div className="customer1">Customer</div>
            </div>
            <div className="delivery">
              <div className="div1">8.000+</div>
              <div className="delivery1">Delivery</div>
            </div>
            <div className="ratings">
              <div className="div2">1.000+</div>
              <div className="ratings1">Ratings</div>
            </div>
          </div>
        </div>
        <div className="wrapper-frame-21">
          <img
            className="wrapper-frame-21-child"
            alt=""
            src="/frame-21@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
