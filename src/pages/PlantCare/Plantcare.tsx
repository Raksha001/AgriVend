import React from "react";
import Layout from "../../components/Layout";
import Carrot from "../../assets/images/carrot.png";
import Tomato from "../../assets/images/tomato.png";
import LadiesFinger from "../../assets/images/ldf.png";
import Brocolli from "../../assets/images/brocolli.png";
import Sunflower from "../../assets/images/sunflower.jpg";
import Rose from "../../assets/images/rose.jpg";
import { Link } from "react-router-dom";

const details = [
  {
    title: "Carrots",
    img: Carrot,
    link: "/monitor",
  },
  {
    title: "Ladies Finger",
    img: LadiesFinger,
    link: "/error404",
  },
  {
    title: "Tomato",
    img: Tomato,
    link: "/error404",
  },
  {
    title: "Brocolli",
    img: Brocolli,
    link: "/error404",
  },
  {
    title: "Sun Flower",
    img: Sunflower,
    link: "/error404",
  },
  {
    title: "Rose",
    img: Rose,
    link: "/error404",
  },
];

export default function Plantcare() {
  return (
    <Layout>
      <div className="container-fluid">
        <h1
          className="fw-bold px-2 py-5 text-primary mb-2"
          style={{ letterSpacing: "0.2rem" }}
        >
          Choose a plant that you want to grow
        </h1>
        <div className="container my-4">
          <div className="row">
            {details &&
              details.length > 0 &&
              details.map((items, index) => {
                return (
                  <div className="col-md-4">
                    <div
                      key={index}
                      className="card rounded-3 d-flex align-items-center justify-content-between bg-dull border-0 m-3 w-100 h-75 shadow p-3 mb-5 bg-white rounded"
                    >
                      <Link
                        to={items.link}
                        className="text-dark"
                        style={{ textDecoration: "none" }}
                      >
                        <div className="d-flex align-items-center justify-content-between">
                          <h1 className="card-title fw-bolder mt-2 py-5 mb-2 fs-5 px-2">
                            {items.title}
                          </h1>
                          <img
                            src={items.img}
                            className="img-fluid p-2 mx-3 align-items-right"
                            style={{
                              height: "130px",
                              width: "130px",
                              float: "right",
                            }}
                            alt="plant"
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </Layout>
  );
}
