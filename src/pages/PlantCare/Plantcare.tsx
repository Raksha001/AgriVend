import React from "react";
import Layout from "../../components/Layout";
import Carrot from "../../assets/images/carrot.png";
import Prune from "../../assets/images/prune.png";
import Inspect from "../../assets/images/inspect.png";
import Sell from "../../assets/images/sell.png";

const details = [
  {
    title: "Pruning Plants",
    img: Carrot,
  },
  {
    title: "Inspection",
    img: Inspect,
  },
  {
    title: "Sell",
    img: Sell,
  },
];

export default function Plantcare() {
  return (
    <Layout>
      <div className="container-fluid">
        <h3
          className="fw-bold px-2 text-primary mb-2 py-3"
          style={{ letterSpacing: "0.2rem" }}
        >
          Choose A Plant That You What To Grow!{" "}
        </h3>
        {/* <div className="row">
          <div className="col-md-4 mt-4">
            <img
              src={Carrot}
              className="img-fluid w-md-75 w-100 h-md-50 h-auto p-2 mb-2"
              alt="carrot"
            />
          </div> */}
        <div className="container">
          {details &&
            details.length > 0 &&
            details.map((items, index) => {
              return (
                <div className="row">
                  <div className="col-sm">
                    <div
                      key={index}
                      className="card d-flex rounded-3 justify-content-between border-0 m-3 w-50 h-50 shadow p-3 mb-5 bg-white rounded"
                    >
                      <div className="row no-gutters rounded-3">
                        <div className="col-md-8">
                          <div className="card-body">
                            <h4 className="card-title fw-bolder">
                              {items.title}
                            </h4>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <img
                            src={items.img}
                            className="img-fluid p-2"
                            //   margin-right="10px"
                            style={{
                              height: "100%",
                              width: "100%",
                              float: "right",
                            }}
                            alt="prune"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="">
                    <div
                      key={index}
                      className="card d-flex rounded-3 justify-content-between border-0 m-3 w-50 h-50 shadow p-3 mb-5 bg-white rounded"
                    >
                      <div className="row no-gutters rounded-3">
                        <div className="col-md-8">
                          <div className="card-body">
                            <h4 className="card-title fw-bolder">
                              {items.title}
                            </h4>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <img
                            src={items.img}
                            className="img-fluid p-2"
                            //   margin-right="10px"
                            style={{
                              height: "100%",
                              width: "100%",
                              float: "right",
                            }}
                            alt="prune"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      {/* </div> */}
    </Layout>
  );
}
