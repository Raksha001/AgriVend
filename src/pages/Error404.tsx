import React from "react";
import Layout from "../components/Layout";
import Error from "../assets/images/error.png";
import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <Layout>
      <div className="d-flex p-5 align-justify-center">
        <div className="d-flex row col-md-3 mt-5 text-center">
          <h2 className="text-primary" style={{ letterSpacing: "0.2rem" }}>
            GOT LOST?
          </h2>
          <img src={Error} className="img-fluid" alt="error" />
          <div className="d-grid">
            <button className="btn btn-primary fw-bold" type="button">
              <Link
                to="/about"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Go to home
              </Link>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
