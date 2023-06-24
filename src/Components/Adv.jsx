import React from "react";
import social1 from "../imgs/social1.png";
import social2 from "../imgs/social2.png";
import Adv3 from "../imgs/adv3.png";
function Adv(props) {
  return (
    <>
      {" "}
      <div className="container">
        <div className={props.className}>
          <p className="adtxt Mont">Advertisement</p>
          <div style={{ textAlign: "center" }}>
            <img
              src={props.src}
              className="adimg1"
              width={props.width}
              alt="add 1"
            />
          </div>
        </div>
      </div>
    </>
  );
}
function Social() {
  return (
    <>
      <div className="container mt-20 ">
        <div className="row " style={{ padding: "15px" }}>
          <div className="col-4">
            <div className="socialpos">
              <img src={social1} width="100%" className="ad" alt="socialimg" />
              <div className="socialpos2">
                <a href="/" className="Montbold" style={{ color: "#888888" }}>
                  VCCircle.com
                </a>
                <p style={{ color: "#484848", fontSize: "12px" }}>
                  {" "}
                  World Bank arm IFC to double down its investments into funds
                  in 2022
                </p>
              </div>
            </div>
          </div>
          <div className="col-1 ">
            <hr className="vrt2" style={{ marginLeft: "64px" }}></hr>
          </div>
          <div className="col-3  postion">
            <div className="socialicon">
              <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
            </div>
            <h1 className="centerh">Infographic</h1>
            <img className="mt-20" src={social2} width="100%" alt="socialimg" />
          </div>
          <div className="col-1 ">
            <hr className="vrt2"></hr>
          </div>
          <div className="col-3">
            <div className="adv3">
              <p className="adtxt Mont">Advertisement</p>
              <div style={{ textAlign: "center" }}>
                <img src={Adv3} className="adimg4" width="90%" alt="add 1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { Adv, Social };
