import "./Loin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Loin = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/api/v1/users/login", { username, password })
      .then((result) => {
        if (result.status === 200) {
          console.log("Login Success");
          alert("Login successful!");
          navigate("/home");
        } else {
          alert("Incorrect password! Please try again.");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="loin">
      <div className="loin-child" />
      <div className="eco-playground-parent">
        <b className="eco-playground">
          <span>{`ECO `}</span>
          <span className="playground">Playground</span>
        </b>
        <b className="login">Login</b>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="frame-parent mb-3 text-start">
          <div className="username-parent">
            <label
              htmlFor="exampleInputUsername1"
              className="form-label"
            ></label>
            <input
              type="username"
              placeholder="Enter Username"
              className="frame-child form-control"
              id="exampleInputUsername1"
              onChange={(event) => setUsername(event.target.value)}
              required
            />
          </div>
          <div className="password-parent">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label"
            ></label>
            <div className="rectangle-parent">
              <div className="frame-item" />
              <input
                type="password"
                placeholder="Password"
                className="form-control password1"
                id="exampleInputPassword1"
                onChange={(event) => setPassword(event.target.value)}
                required
              />
              <img
                className="clarityeye-hide-line-icon"
                loading="lazy"
                alt=""
                src="/clarityeyehideline.svg"
              />
            </div>
          </div>
          <div className="forgot-password">Forgot Password?</div>
        </div>
        <button type="submit" className="btn btn-primary rectangle-group">
          <div className="frame-inner"></div>
          <b className="sign-in">Sign in</b>
        </button>
      </form>

      <div className="register-link">
        <div className="dont-have-an">Don&apos;t have an account yet?</div>
        <div className="register-for-free">
          <Link to="/register" className="btn btn-secondary">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Loin;
