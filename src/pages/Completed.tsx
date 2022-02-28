import React from "react";
import Layout from "../components/Layout";
import Farm from "../assets/images/about-farm.svg";

export default function Completed() {
  return (
    <Layout>
      <div className="row">
        <div className="d-flex col-md-4 mt-4 justify-content-start align-items-start">
          <div className="ms-4">
            <h2
              className="fst-italic fw-bold"
              color="dark"
              style={{ letterSpacing: "0.2rem" }}
            >
              ‘NEXT GEN FARMING’
            </h2>
            <br />
            <p className="mt-2 fs-5">
              This is a farm Management site where as <br /> farmers you can
              know when to soil and when
              <br /> to toil by using the best features provided
              <br /> right from selling to buying as well.
            </p>
          </div>
        </div>
        <div className="d-flex col-md-8 mt-4 justify-content-end align-items-end">
          <img
            src={Farm}
            className="img-fluid "
            height="55%"
            width="100%"
            alt="farm"
          />
        </div>
      </div>
    </Layout>
  );
}
