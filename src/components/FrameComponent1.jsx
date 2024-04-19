import "./FrameComponent1.css";

const FrameComponent1 = () => {
  return (
    <section className="subscribe-wrapper">
      <div className="subscribe">
        <img
          className="aligner-icon"
          loading="lazy"
          alt=""
          src="/frame-51.svg"
        />
        <div className="distributor">
          <div className="resizer">
            <div className="spacer">
              <div className="our-subscribe">Our Subscribe</div>
              <h1 className="subscribe-to-get-container">
                <p className="subscribe-to-get">{`Subscribe To Get The Latest `}</p>
                <p className="learning-tips-from">Learning Tips from us</p>
              </h1>
            </div>
            <div className="we-recommended-you-container">
              <p className="we-recommended-you">{`We recommended you to subscribe to our promo program, `}</p>
              <p className="drop-your-email">
                drop your email below to get daily update about us
              </p>
            </div>
          </div>
          <div className="effect-manager">
            <div className="blur-filter">
              <div className="enter-your-email">Enter your email address</div>
            </div>
            <button className="contrast-controller">
              <div className="subscribe1">Subscribe</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
