import { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import Carrot from "../../assets/images/carrot.png";
import { FaCamera, FaCloudUploadAlt } from "react-icons/fa";

export default function Inspection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  return (
    <Layout>
      <div className="container-fluid">
        <p className="mt-4 text-primary fs-3">Inspection</p>
        <div className="row mt-4 align-justify-center">
          <div className="col-md-5">
            <form>
              <div className="form-group">
                <div className="d-grid m-4 gap-4">
                  <label
                    htmlFor="upload"
                    className="btn btn-primary rounded-3 fw-bold fs-5 p-4 d-flex align-justify-center"
                  >
                    <input
                      type="file"
                      onChange={(e: any) => setSelectedImage(e.target.files[0])}
                      id="upload"
                      accept="image/*;capture=camera"
                      hidden
                    />
                    <FaCamera className="fs-3" />
                    &nbsp; Take from Camera
                  </label>
                  <label
                    htmlFor="upload"
                    className="btn btn-primary rounded-3 fw-bold fs-5 p-4 d-flex align-justify-center"
                  >
                    <input
                      type="file"
                      onChange={(e: any) => setSelectedImage(e.target.files[0])}
                      id="upload"
                      accept="image/*"
                      hidden
                    />
                    <FaCloudUploadAlt className="fs-3" />
                    &nbsp; Upload Picture
                  </label>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-7">
            <h3
              className="fw-bold px-2 text-center text-primary mb-2"
              style={{ letterSpacing: "0.2rem" }}
            >
              Show us your Carrots
            </h3>
            <div className="d-flex text-center p-4 align-justify-center">
              <div className="col-md-5">
                {" "}
                {imageUrl && selectedImage ? (
                  <>
                    <img
                      src={imageUrl}
                      alt={selectedImage}
                      className="img-fluid"
                    />
                  </>
                ) : (
                  <img src={Carrot} alt="carrot" className="img-fluid" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
