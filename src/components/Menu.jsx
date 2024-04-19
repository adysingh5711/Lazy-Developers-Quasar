import { useMemo } from "react";
import "./Menu.css";

const Menu = ({
  topViewFruitySaladWithFre,
  completedSalad,
  propPadding,
  propBackgroundImage,
}) => {
  const menuStyle = useMemo(() => {
    return {
      padding: propPadding,
      backgroundImage: propBackgroundImage,
    };
  }, [propPadding, propBackgroundImage]);

  return (
    <div className="menu" style={menuStyle}>
      <img
        className="top-view-fruity-salad-with-fre-icon"
        alt=""
        src={topViewFruitySaladWithFre}
      />
      <h3 className="completed-salad">{completedSalad}</h3>
      <b className="b">$ 3.99</b>
    </div>
  );
};

export default Menu;
