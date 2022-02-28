import React from "react";
import Layout from "../../components/Layout";
import Carrot from "../../assets/images/carrot.png";
import Prune from "../../assets/images/prune.png";
import Inspect from "../../assets/images/inspect.png";
import Sell from "../../assets/images/sell.png";
import { Link } from "react-router-dom";

const details = [
  {
    link: "/prune",
    title: "Pruning Plants",
    week: "1 week",
    description: "Prune Correctly",
    img: Prune,
  },
  {
    link: "/inspect",
    title: "Inspection",
    week: "2 weeks",
    description: "Prune Correctly",
    img: Inspect,
  },
  {
    link: "/sell",
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
        <div className="row mt-4">
          <div className="col-md-5">
            <h3
              className="fw-bold px-2 text-primary mb-2"
              style={{ letterSpacing: "0.2rem" }}
            >
              Carrots
            </h3>
            <img
              src={Carrot}
              className="img-fluid w-100 h-md-50 h-auto p-2 mb-2"
              alt="carrot"
            />
            <h5
              className="fw-bold px-2"
              color="dark"
              style={{ letterSpacing: "0.2rem" }}
            >
              Carrots Need Full Sun
            </h5>
            <p className="mt-2 fs-5 px-2">
              Ensure that your carrots have full sun. Carrots do best under full
              sun. Carrot plants can survive partial shade but direct sunlight
              is always ideal.
            </p>
          </div>
          <div className="col-md-7">
            {details &&
              details.map((items, index) => {
                return (
                  <div
                    key={index}
                    className="card shadow-1 bg-dull border-0 m-3"
                  >
                    <Link
                      to={items.link}
                      className="text-dark"
                      style={{ textDecoration: "none" }}
                    >
                      <div className="card-body d-flex align-items-center justify-content-between">
                        <div>
                          <h4 className="card-title fw-bolder">
                            {items.title}
                          </h4>
                          <h6 className="card-subtitle mb-2">{items.week}</h6>
                          <p className="card-text text-muted">
                            {items.description}
                          </p>
                        </div>
                        <img
                          src={items.img}
                          className="img-fluid"
                          style={{ height: "75px", width: "75px" }}
                          alt="prune"
                        />
                      </div>
                    </Link>
                  </div>
                );
              })}
            <div className="d-grid m-3">
              <button className="btn btn-primary text-end" type="button">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
