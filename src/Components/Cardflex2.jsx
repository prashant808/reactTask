import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import Premium from "./Premium";
function Cardflex2(props) {
  return (
    <>
      <h1>{props.sectitle}</h1>
      <div className={props.className}>
      <div className="postion">
      <img
          src={props.src}
          className="Cardeditor"
          width={props.width}
          height={props.height}
          alt="cardimg"
        />
      {props.premium === "1" ? (
                      <Premium className="Montbold Premiumtag1-2" />
                    ) : null}
      </div>
       
        <div style={{ paddingLeft: "5px" }}>
          <div className="cardtitle  p-20" style={{ marginTop: "5px" }}>
           {props.slug ? <Link
              to={props?.slug || ""}
              style={{ color: "#096FFA" }}
              className="Montbold"
            >
              {props.title}
            </Link> : ""}
          </div>
          <div className="cardbody  mt-10 p-20 MontMed">
           {props.slug ? <Link to={props?.slug || ""}>
              <p  className={props.cardpara}>{props.body}</p>
            </Link> : ""}
          </div>
          <ul className=" carduled mt-10 p-20 MontMed ">
            <li>{moment(props.publish).format("Do MMM YYYY")}</li>
            <li>
              {props.authorslug ? <Link to={props?.authorslug || ""}>{props.author}</Link>: ""}
            </li>
            <li style={{paddingLeft : "10px"}}>
            <p className={props.tooltip}>
              {props.secondname}
              <span class="tooltiptext">{props.author2} </span>
           </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Cardflex2;
