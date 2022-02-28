import React from "react";
import Layout from "../components/Layout";
import Complete from "../assets/images/complete.png";

export default function Completed() {
  return (
    <Layout>
      <div className="d-flex p-5 align-justify-center">
        <div className="d-flex row col-md-3 mt-5 text-center">
          <img src={Complete} className="img-fluid" alt="completed" />
          <h2 className="text-primary mt-3" style={{ letterSpacing: "0.2rem" }}>
            Completed
          </h2>
        </div>
      </div>
    </Layout>
  );
}
