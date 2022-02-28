import React from "react";
import Layout from "../components/Layout";
import Complete from "../assets/images/complete.png";

export default function Completed() {
  return (
    <Layout>
      <div className="row">
        <div className="d-flex col-md-4 mt-4 justify-content-start align-items-start">
          {/* <div className="ms-4">
            <p className="mt-2 fs-5">Completed</p>
          </div> */}
        </div>
        <div className="d-flex col-md-8 mt-4 justify-content-between align-items-center">
          <img
            src={Complete}
            className="img-fluid "
            height="55%"
            width="100%"
            alt="farm"
          />
          <p className="mt-2 fs-5">Completed</p>
        </div>
      </div>
    </Layout>
  );
}
