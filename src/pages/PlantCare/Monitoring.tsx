import React from "react";
import Layout from "../../components/Layout";
import Carrot from "../../assets/images/carrot.png";
import Prune from "../../assets/images/prune.png";
import Inspect from "../../assets/images/inspect.png";
import Sell from "../../assets/images/sell.png";

const details = [
  {
    title: "Pruning Plants",
    week: "1 week",
    description: "Prune Correctly",
    img: Prune,
  },
  {
    title: "Inspection",
    week: "2 weeks",
    description: "Prune Correctly",
    img: Inspect,
  },
  {
    title: "Sell",
    week: "3 weeks",
    description: "Fast Growth",
    img: Sell,
  },
];

export default function Monitoring() {
  return (
    <Layout>
      <div className="container-fluid">
        <p className="mt-4 text-center fs-3">
          Take care of the plants according to our plan and you will see the
          result!
        </p>
        <div className="row">
          <div className="col-md-4 mt-4">
            <h3
              className="fw-bold px-2 text-primary mb-2"
              style={{ letterSpacing: "0.2rem" }}
            >
              Carrots
            </h3>
            <img
              src={Carrot}
              className="img-fluid w-md-75 w-100 h-md-50 h-auto p-2 mb-2"
              alt="carrot"
            />
            <h5
              className="fw-bold px-2"
              color="dark"
              style={{ letterSpacing: "0.2rem" }}
            >
              Carrots Need Full Sun
            </h5>
            <br />
            <p className="mt-2 fs-5 px-2">
              Ensure that your carrots have full sun. Carrots do best under full
              sun. Carrot plants can survive partial shade but direct sunlight
              is always ideal.
            </p>
          </div>
          <div className="col-md-8 mt-4">
            {details &&
              details.length > 0 &&
              details.map((items, index) => {
                return (
                  <div
                    key={index}
                    className="card d-flex align-items-center justify-content-between bg-dull border-0 m-3 w-100"
                  >
                    <div className="card-body">
                      <h4 className="card-title fw-bolder">{items.title}</h4>
                      <h6 className="card-subtitle mb-2">{items.week}</h6>
                      <p className="card-text text-muted">
                        {items.description}
                      </p>
                    </div>
                    <img
                      src={items.img}
                      className="img-fluid p-2"
                      style={{ height: "75px", width: "75px" }}
                      alt="prune"
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </Layout>
  );
}
