import React from "react";
import Layout from "../../components/Layout";
import Carrot from "../../assets/images/carrot.png";
import Tomato from "../../assets/images/tomato.png";
import LadiesFinger from "../../assets/images/ldf.png";
import Brocolli from "../../assets/images/brocolli.png";
import Sunflower from "../../assets/images/sunflower.jpg";
import Rose from "../../assets/images/rose.jpg";
import Prune from "../../assets/images/prune.png";
import Inspect from "../../assets/images/inspect.png";
import Sell from "../../assets/images/sell.png";

// const details = [
//   {
//     title: "Plant your carrots in early spring.",
//     description:
//       "Carrots can tolerate a wide range of soil temperatures and can even survive a light frost. The ideal soil temperature for carrots is between 50 and 85°F. In most climates, the ideal season for planting carrot seeds is early spring.",
//   },
//   {
//     title: "Carrots need full sun",
//     description:
//       "Ensure that your carrots have full sun. Carrots do best under full sun. Carrot plants can survive partial shade but direct sunlight is always ideal.",
//   },
//   {
//     title: "Look for soft, permeable soil.",
//     description:
//       "solid can cause carrot roots to fork and deform. Planting radish seeds with your carrot seeds is a great way to loosen up the soil.Carrots are not suited for acidic soil and do best when planted in a garden with a soil pH between 6.0 and 6.8. ",
//   },
// ];
const details = [
  {
    title: "Carrots",
    img: Carrot,
  },
  {
    title: "Ladies Finger",
    img: LadiesFinger,
  },
  {
    title: "Tomato",
    img: Tomato,
  },
  {
    title: "Brocolli",
    img: Brocolli,
  },
  {
    title: "Sun Flower",
    img: Sunflower,
  },
  {
    title: "Rose",
    img: Rose,
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
