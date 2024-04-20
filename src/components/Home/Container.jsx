import "./Container.css";

const Container = () => {
  return (
    <section className="container">
      <div className="why-learn-with-us-for-fun-parent">
        <h1 className="why-learn-with-container">
          <p className="why-learn-with">WHY LEARN WITH US</p>
          <p className="for-fun">
            <span>FOR</span>
            <span className="fun"> FUN</span>
          </p>
        </h1>
        <div className="we-continue-to">
          We continue to consistently choose and maintain the quality of the
          content provided and make sure its enjoyable.
        </div>
      </div>
      <div className="card-parent">
        <div className="card">
          <div className="icon-parent">
            <img className="icon" loading="lazy" alt="" src="/icon.svg" />
            <div className="frame-container">
              <div className="engaging-content-parent">
                <h3 className="engaging-content">Engaging Content</h3>
                <div className="immerse-yourself-in-container">
                  <p className="immerse-yourself-in">{`Immerse yourself in interactive `}</p>
                  <p className="lessons-and-challenges">
                    lessons and challenges for fun and
                  </p>
                  <p className="effective-learning">effective learning.</p>
                </div>
              </div>
              <div className="learn-more-parent">
                <div className="learn-more">Learn more</div>
                <img
                  className="iconlylightarrow-right"
                  loading="lazy"
                  alt=""
                  src="/iconlylightarrow--right.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="card1">
          <div className="icon-group">
            <img className="icon1" alt="" src="/icon-1.svg" />
            <div className="frame-div">
              <div className="track-your-progress-parent">
                <h3 className="track-your-progress">Track Your Progress</h3>
                <div className="stay-on-top-container">
                  <p className="stay-on-top">{`Stay on top of your learning journey `}</p>
                  <p className="with-intuitive-progress">{`with intuitive progress tracking and `}</p>
                  <p className="detailed-analytics">detailed analytics.</p>
                </div>
              </div>
              <button className="learn-more-group">
                <div className="learn-more1">Learn more</div>
                <img
                  className="iconlylightarrow-right1"
                  alt=""
                  src="/iconlylightarrow--right-1.svg"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="card2">
          <div className="icon-container">
            <img className="icon2" alt="" src="/icon-2.svg" />
            <div className="frame-parent1">
              <div className="join-the-community-parent">
                <h3 className="join-the-community">Join the Community</h3>
                <div className="connect-with-fellow">
                  Connect with fellow learners, share insights, and collaborate
                  for mutual success.
                </div>
              </div>
              <div className="learn-more-container">
                <div className="learn-more2">Learn more</div>
                <img
                  className="iconlylightarrow-right2"
                  alt=""
                  src="/iconlylightarrow--right-2.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Container;
