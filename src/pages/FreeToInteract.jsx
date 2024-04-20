import {
  Header,
  Container,
  FrameComponent,
  FrameComponent3,
} from "../components/Home/index.js";
import "./FreeToInteract.css";

const FreeToInteract = () => {
  return (
    <div className="free-to-interact">
      <div className="logic-tree">
        <img className="logic-tree-child" alt="" src="/group-8438@2x.png" />
        <div className="wrapper-ellipse-42">
          <img
            className="wrapper-ellipse-42-child"
            alt=""
            src="/ellipse-42.svg"
          />
        </div>
        <div className="wrapper-ellipse-43">
          <img
            className="wrapper-ellipse-43-child"
            loading="lazy"
            alt=""
            src="/ellipse-43.svg"
          />
        </div>
      </div>
      <div className="wrapper-ellipse-44-wrapper">
        <div className="wrapper-ellipse-44">
          <img
            className="wrapper-ellipse-44-child"
            loading="lazy"
            alt=""
            src="/ellipse-44.svg"
          />
        </div>
      </div>
      <main className="landing-page">
        <Header />
        <Container />
        <FrameComponent3 />
        <FrameComponent />
      </main>
    </div>
  );
};

export default FreeToInteract;
