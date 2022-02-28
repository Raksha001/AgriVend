import React from "react";
import LFarm from "../assets/images/login-farm.png";
import bg from "../assets/images/bg.png";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <section
      className="d-flex align-justify-center"
      style={{
        background: `url("${bg}")no-repeat center/cover`,
        height: "100vh",
        width: "100%",
      }}
    >
      <div
        className="bg-white"
        style={{
          minHeight: "75vh",
          width: "85%",
          borderRadius: "10px",
          boxShadow:
            "0 8px 16px 0 rgba(0, 0, 0, 0.15), 0 6px 20px 0 rgba(0, 0, 0, 0.16)",
        }}
      >
        <div className="row">
          <div className="d-flex col-md-5 align-justify-center">
            <div className="row m-md-5 m-2">
              <h1
                className="fw-bold text-center mb-md-5 mb-3 text-primary"
                style={{ letterSpacing: "0.4rem" }}
              >
                AGRIVEND
              </h1>
              <h4 className="text-primary">Sign Up</h4>
              <br />
              <div className="form-floating mb-3">
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
                  Username
                </label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control border-0 bg-dull"
                  style={{ borderRadius: "10px" }}
                  id="floatingEmail"
                  placeholder="Email"
                />
                <label
                  htmlFor="floatingEmail"
                  className="text-primary mx-2 fw-bold"
                >
                  Email ID
                </label>
              </div>
              <div className="form-floating mb-3">
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
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control border-0 bg-dull"
                  style={{ borderRadius: "10px" }}
                  id="floatingConfirmPassword"
                  placeholder="Confirm Password"
                />
                <label
                  htmlFor="floatingConfirmPassword"
                  className="text-primary mx-2 fw-bold"
                >
                  Confirm Password
                </label>
              </div>
              <div className="d-grid w-100">
                <button
                  className="btn btn-primary fw-bold text-start"
                  type="button"
                >
                  <Link
                    to="/about"
                    className="text-white"
                    style={{ textDecoration: "none" }}
                  >
                    Sign Up
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="d-flex col-md-7 align-justify-center">
            <img src={LFarm} className="img-fluid" alt="farm" />
          </div>
        </div>
      </div>
    </section>
  );
}
