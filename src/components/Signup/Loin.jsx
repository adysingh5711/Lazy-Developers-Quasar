import "./Loin.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Loin = () => {
  const [username, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("/api/v1/users/signup", {
        // isko dekhenge
        username,
        email,
        password,
      })
      .then((result) => {
        console.log(result);
        if (result.status === 200) {
          alert("E-mail already registered! Please Login to proceed.");
          navigate("/login");
        } else {
          alert("Registered successfully! Please Login to proceed.");
          navigate("/login");
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
        <div className="register">Register</div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="clarity-logo mb-3 text-start">
          <label htmlFor="exampleInputname" className="form-label"></label>
          <input
            type="text"
            placeholder="Your Username"
            className="clarity-logo-child form-control"
            id="exampleInputname"
            onChange={(event) => setName(event.target.value)}
            required
          />
        </div>
        <div className="loin-inner mb-3 text-start">
          <label htmlFor="exampleInputEmail1" className="form-label"></label>
          <input
            type="email"
            placeholder="username@gmail.com"
            className="frame-child form-control"
            id="exampleInputEmail1"
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <div className="frame-parent mb-3 text-start">
          <label htmlFor="exampleInputPassword1" className="form-label"></label>
          <div className="password-parent">
            <div className="password">Password</div>
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
        </div>
        <button type="submit" className="btn btn-primary rectangle-group">
          <div className="frame-inner"></div>
          <div className="sign-up">Sign up</div>
        </button>
      </form>

      <div className="already-have-an-account-yet-parent">
        <div className="already-have-an">Already have an account?</div>
        <div className="login-now">
          <Link to="/login">Login Now</Link>
        </div>
      </div>
    </div>
  );
};

export default Loin;
