import React from "react";
import LFarm from "../assets/images/login-farm.png";
import bg from "../assets/images/bg.png";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <section
        className="d-flex align-justify-center vh-100"
        style={{
          background: `url("${bg}")no-repeat center/cover`,
        }}
      >
        <div
          className="bg-white align-items-center h-75"
          style={{
            minHeight: "85vh",
            width: "85%",
            borderRadius: "10px",
            boxShadow:
              "0 8px 16px 0 rgba(0, 0, 0, 0.15), 0 6px 20px 0 rgba(0, 0, 0, 0.16)",
          }}
        >
          <div className="row h-100">
            <div className="d-flex col-md-6 align-justify-center">
              <div className="row m-md-5 m-2">
                <h1
                  className="fw-bold mb-md-5 mb-3 text-primary text-center text-md-start reemkufi"
                  style={{ letterSpacing: "0.4rem" }}
                >
                  AGRIVEND
                </h1>
                <h4 className="text-primary raleway-r mb-4">Login</h4>
                <br />
                <div className="form-floating mb-3 raleway-b">
                  <input
                    type="text"
                    className="form-control border-0 bg-dull"
                    style={{ borderRadius: "10px" }}
                    id="floatingUsername"
                    placeholder="Username"
                  />
                  <label
                    htmlFor="floatingUsername"
                    className="text-primary mx-2 fw-bold"
                  >
                    User Name
                  </label>
                </div>
                <div className="form-floating raleway-b">
                  <input
                    type="password"
                    className="form-control border-0 bg-dull"
                    style={{ borderRadius: "10px" }}
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label
                    htmlFor="floatingPassword"
                    className="text-primary mx-2 fw-bold"
                  >
                    Password
                  </label>
                </div>
                <p className="mt-2 fs-7 fw-bold text-primary text-end raleway-b">
                  <Link
                    to="/signup"
                    className="text-primary"
                    style={{ textDecoration: "none" }}
                  >
                    Create an Account
                  </Link>
                </p>
                <div className="raleway-b">
                  <button
                    className="btn btn-primary fw-bold text-center w-md-25"
                    type="button"
                  >
                    <Link
                      to="/about"
                      className="text-white"
                      style={{ textDecoration: "none" }}
                    >
                      Sign In
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className="d-flex col-md-6 align-justify-center">
              <img src={LFarm} className="img-fluid" alt="farm" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
