import React from "react";
import moment from "moment";
import Premium from "./Premium";
import { Link } from "react-router-dom";
function Cards(props) {
  
  return (
    <>
     <Link to={props?.slug2 || " "}> 
      <div className={props.className}>
      <div className="postion">
      <img
          src={props.src}
          className={props.wth}
          width={props.width}
          height={props.height}
          alt="cardimg"
        />
        {props.premium === "1" ? (
                      <Premium className="Montbold Premiumtag" />
                    ) : null}
      </div>
       
        <div className="crdbdy">

          <div className="cardtitle">
            {props.slug ? (
              <Link
                to={props?.slug || " "}
                style={{ color: "#096FFA" }}
                className="Montbold"
              >
                {props.title}
              </Link>
            ) : null}
          </div>
          <div className="cardbody  MontMed ">
            {props.slug2 ? (
              <Link to={props?.slug2 || " "}>
                <p className={props.cardpara}>{props.body}</p>
              </Link>
            ) : " "}
          
            <div className="cardfoot">
        <ul className=" cardul MontMed " >
            <li>{moment(props.publish).format("Do MMM YYYY")}</li>
            <li  >
            
            {props.authorslug ?<Link to={props?.authorslug || ""}>{props.author} </Link>: ""}
            

            </li>
            <li style={{paddingLeft : "10px"}}>
            <Link to={props?.authorslug || ""} className={props.tooltip}>
              {props.secondname}
              <span class="tooltiptext">{props.author2} </span>
           </Link>
            </li>
           
          </ul>
        </div>
          </div>
         
        </div>
       
      </div>
      </Link>
    </>
  );
}

export default Cards;
