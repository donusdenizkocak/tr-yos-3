import React from "react";

const DepartmentUnvCard = () => {
  return (
    <>
      <button className="mt-2 mr-3 p-3 text-sm font-medium border-2 border-orange-500 rounded-md bg-orange-100 text-orange-500 hover:bg-orange-500 hover:text-white">
        H Add Favorite
      </button>

      <div className="pg-side-groups">
        <div className="pg-side-block">
          <div className="pg-side-block-head">
            <div className="pg-side-left">
              <div className="pg-side-thumb">
                <img
                  src="https://www.tr-yös.com/test/6984215678913/logo/acibadem-mehmet-ali-aydinlar-universitesi-logo-1683762727498.png"
                  className="img-fluid circle"
                  alt=""
                />
              </div>
            </div>
            <div className="pg-side-right">
              <div className="pg-side-right-caption">
                <h4>ACIBADEM MEHMET ALI AYDINLAR UNIVERSITY</h4>
                <span>
                  <i className="fa-solid fa-location-dot me-2"></i>Istanbul
                </span>
              </div>
            </div>
          </div>
          <div className="pg-side-block-body">
            <div className="pg-side-block-info">
              <div className="vl-elfo-group">
                <div className="vl-elfo-icon">
                  <i className="fa-solid fa-phone-volume"></i>
                </div>

                <div className="vl-elfo-caption">
                  <h6>Call Us</h6>
                  <p>
                    <a href="tel:(216) 500-4444">(216) 500-4444</a>
                  </p>
                </div>
              </div>
              <div className="vl-elfo-group">
                <div className="vl-elfo-icon">
                  <i className="fa-regular fa-envelope"></i>
                </div>
                <div className="vl-elfo-caption">
                  <h6>E-Mail</h6>
                  <p>
                    <a href="mailto:info@acibadem.edu.tr">
                      info@acibadem.edu.tr
                    </a>
                  </p>
                </div>
              </div>
              <div className="vl-elfo-group">
                <div className="vl-elfo-icon">
                  <i className="fa-solid fa-globe"></i>
                </div>
                <div className="vl-elfo-caption">
                  <h6>Website</h6>
                  <p>
                    <a href="https://www.acibadem.edu.tr" target="_blank">
                      https://www.acibadem.edu.tr
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="pg-side-block-buttons">
              <div className="single-button">
                <a
                  href="JavaScript:Void(0);"
                  data-bs-toggle="modal"
                  data-bs-target="#offer"
                  className="btn font--medium btn-light-success full-width"
                >
                  <i className="fa-solid fa-paper-plane me-2"></i>Send Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DepartmentUnvCard;
