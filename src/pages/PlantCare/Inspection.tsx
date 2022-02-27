import React from "react";
import Layout from "../../components/Layout";
import Carrot from "../../assets/images/carrot.png";
import { FaCamera } from "react-icons/fa";

export default function Inspection() {
  return (
    <Layout>
      <div className="container-fluid">
        <p className="mt-4 text-primary fs-3">Inspection</p>
        <div className="row mt-4">
          <div className="col-md-5">
            <div className="d-grid  mt-5 m-3 gap-3">
              <button className="btn btn-primary rounded-3 fw-bold fs-5 p-4 d-flex align-justify-center">
                <FaCamera className="fs-3" />
                &nbsp; Take from Camera
              </button>
              <button className="btn btn-primary rounded-3 fw-bold fs-5 p-4 d-flex align-justify-center">
                <FaCamera className="fs-3" />
                &nbsp; Upload Picture
              </button>
            </div>
          </div>
          <div className="col-md-7">
            <h3
              className="fw-bold px-2 text-center text-primary mb-2"
              style={{ letterSpacing: "0.2rem" }}
            >
              Show us your Carrots
            </h3>
            <img src={Carrot} className="img-fluid m-4" alt="carrot" />
          </div>
        </div>
      </div>
    </Layout>
  );
}
