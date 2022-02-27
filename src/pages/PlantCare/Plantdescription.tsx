import React from "react";
import Layout from "../../components/Layout";
import Carrot from "../../assets/images/carrot.png";
import Prune from "../../assets/images/prune.png";
import Inspect from "../../assets/images/inspect.png";
import Sell from "../../assets/images/sell.png";
import Droplet from "../../assets/images/droplet.png";
import Seed from "../../assets/images/seed.png";
import Temp from "../../assets/images/temp.png";
import Sunlight from "../../assets/images/sunlight.png";

const details = [
  {
    title: "Plant your carrots in early spring.",
    description:
      "Carrots can tolerate a wide range of soil temperatures and can even survive a light frost. The ideal soil temperature for carrots is between 50 and 85°F. In most climates, the ideal season for planting carrot seeds is early spring.",
  },
  {
    title: "Carrots need full sun",
    description:
      "Ensure that your carrots have full sun. Carrots do best under full sun. Carrot plants can survive partial shade but direct sunlight is always ideal.",
  },
  {
    title: "Look for soft, permeable soil.",
    description:
      "solid can cause carrot roots to fork and deform. Planting radish seeds with your carrot seeds is a great way to loosen up the soil.Carrots are not suited for acidic soil and do best when planted in a garden with a soil pH between 6.0 and 6.8. ",
  },
];

export default function Plantdescription() {
  return (
    <Layout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 mt-4">
            <h1
              className="fw-bold px-2 text-primary mb-2"
              style={{ letterSpacing: "0.2rem" }}
            >
              CARROTS
            </h1>
            <img
              src={Carrot}
              className="img-fluid w-md-75 w-100 h-md-50 h-auto p-2 mb-2"
              alt="carrot"
            />
            <div className="d-flex">
              <div className="container">
                <div className="d-flex">
                  <img
                    src={Droplet}
                    className="img-fluid p-2"
                    style={{ height: "75px", width: "75px" }}
                    alt="prune"
                  />
                  <p className="mt-2 py-2 fs-5 px-2">1-2inch/week</p>
                </div>
                <div className="d-flex">
                  <img
                    src={Seed}
                    className="img-fluid p-2"
                    style={{ height: "75px", width: "75px" }}
                    alt="prune"
                  />
                  <p className="mt-2 py-2 fs-5 px-2">Soft, permeable soil</p>
                </div>
              </div>
              <div className="container">
                <div className="d-flex">
                  <img
                    src={Sunlight}
                    className="img-fluid p-2"
                    style={{ height: "75px", width: "75px" }}
                    alt="prune"
                  />
                  <p className="mt-2 py-2 fs-5 px-2">Direct sunlight</p>
                </div>
                <div className="d-flex">
                  <img
                    src={Temp}
                    className="img-fluid p-2"
                    style={{ height: "75px", width: "75px" }}
                    alt="prune"
                  />
                  <p className="mt-2 py-2 fs-5 px-2">50-85°F</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 mt-4">
            <h4
              className="fw-bold px-2 text-primary mb-2"
              style={{ letterSpacing: "0.2rem" }}
            >
              PRUNING
            </h4>
            {details &&
              details.length > 0 &&
              details.map((items, index) => {
                return (
                  <div
                    key={index}
                    className="card rounded d-flex align-items-center justify-content-between bg-dull border-0 m-3 w-100 shadow p-3 mb-5 bg-white rounded"
                  >
                    <div className="card-body">
                      <h4 className="card-title fw-bolder">{items.title}</h4>
                      <p className="card-text text-muted">
                        {items.description}
                      </p>
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
