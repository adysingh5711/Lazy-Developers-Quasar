import "./FrameComponent.css";

const FrameComponent = () => {
  return (
    <footer className="hue-shifter">
      <div className="opacity-controller">
        <div className="visibility-toggle">
          <h3 className="jez-tech">
            <span>{`JEZ `}</span>
            <span className="tech1">TECH</span>
          </h3>
          <div className="input-filter">
            <div className="jez-tech-is-container">
              <p className="jez-tech-is">{`Jez Tech is the pioneer of `}</p>
              <p className="healthy-fruit-salad">{`healthy fruit salad with `}</p>
              <p className="high-nutrition">high nutrition.</p>
            </div>
          </div>
          <div className="copyright-jez-tech">©Copyright Jez Tech</div>
        </div>
        <div className="error-handler">
          <div className="feature">Feature</div>
          <div className="menu2">Menu</div>
          <div className="promo">Promo</div>
          <div className="contact1">Contact</div>
          <div className="about-us1">About us</div>
        </div>
        <div className="get-in-touch-parent">
          <div className="get-in-touch">Get in Touch</div>
          <div className="communication-location-on-parent">
            <img
              className="communication-location-on"
              loading="lazy"
              alt=""
              src="/communication--location-on@2x.png"
            />
            <div className="ohio-st-south-gate-ca-90280-wrapper">
              <div className="ohio-st-south-container">
                <p className="ohio-st-south">8819 Ohio St. South Gate,</p>
                <p className="ca-90280">CA 90280</p>
              </div>
            </div>
          </div>
          <div className="communication-email-parent">
            <img
              className="communication-email"
              loading="lazy"
              alt=""
              src="/communication--email@2x.png"
            />
            <div className="ourstudiohellocom-wrapper">
              <div className="ourstudiohellocom">Ourstudio@hello.com</div>
            </div>
          </div>
          <div className="communication-call-parent">
            <img
              className="communication-call"
              loading="lazy"
              alt=""
              src="/communication--call@2x.png"
            />
            <div className="wrapper">
              <div className="div3">+1 386-688-3295</div>
            </div>
          </div>
        </div>
        <div className="frame-parent3">
          <div className="vector-parent">
            <img
              className="vector-icon"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
            <img
              className="linkedin-2-1"
              loading="lazy"
              alt=""
              src="/linkedin-2-1.svg"
            />
            <img
              className="instagram-2-1"
              loading="lazy"
              alt=""
              src="/instagram-2-1.svg"
            />
          </div>
          <div className="follow-our-social">Follow our social media.</div>
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent;
