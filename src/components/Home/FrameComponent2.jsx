import Menu from "./Menu";
import "./FrameComponent2.css";

const FrameComponent2 = () => {
  return (
    <section className="a-p-i-connector">
      <div className="web-scraper">
        <div className="sentiment-analyzer-wrapper">
          <div className="sentiment-analyzer">
            <div className="speech-recognizer">
              <div className="getsetgo">GET...SET...GO</div>
            </div>
            <h1 className="enjoy-the-best-container">
              <p className="enjoy-the-best">{`ENJOY THE BEST CONTENT AND GET `}</p>
              <p className="discounts-available">
                <span>{` `}</span>
                <span className="discounts">DISCOUNTS</span>
                <span className="available"> AVAILABLE</span>
              </p>
            </h1>
          </div>
        </div>
        <div className="table-maker">
          <div className="menu1">
            <img
              className="front-view-vegetable-salad-fro-icon"
              alt=""
              src="/frontviewvegetablesaladfromboiledvegetablesmixedinsideroundplatedarkbackground-1@2x.png"
            />
            <h3 className="mini-salad-yummy">{`Mini Salad Yummy `}</h3>
            <b className="font-selector">$ 2.99</b>
          </div>
          <div className="color-palette">
            <Menu
              topViewFruitySaladWithFre="/topviewfruitysaladwithfreshslicedfruits-1@2x.png"
              completedSalad="Completed Salad"
            />
            <Menu
              topViewFruitySaladWithFre="/topviewfruitysaladwithfreshslicedfruits-11@2x.png"
              completedSalad="Salad Yummy Red"
              propPadding="24.75rem 1.25rem 2.5rem 2.45rem"
              propBackgroundImage="url('/topviewfruitysaladwithfreshslicedfruits-11@2x.png')"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
