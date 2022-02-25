import React from "react";
import Layout from "../components/Layout";
import Farm from "../assets/images/about-farm.svg";

export default function About() {
  return (
    <Layout>
      <div className="container-fluid w-100 position-relative">
        <div className="d-flex row mt-4 justify-content-start postion-absolute align-items-start">
          <h2
            className="fst-italic fw-bold"
            color="dark"
            style={{ letterSpacing: "0.2rem" }}
          >
            ‘NEXT GEN FARMING’
          </h2>
          <br />
          <p className="mt-2 fs-5">
            This is a farm Management site where as farmers
            <br /> you can know when to soil and when
            <br /> to toil by using the best features provided right
            <br /> from selling to buying as well.
          </p>
        </div>
        <div className="d-flex justify-content-end postion-absolute align-items-end">
          <img
            src={Farm}
            className="img-fluid float-end"
            height="25%"
            width="70%"
            alt="farm"
          />
        </div>
      </div>
    </Layout>
  );
}
