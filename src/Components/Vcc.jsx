import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
// import vcc1 from '../imgs/vcc1.png';
function Vcc(props) {
  return (
    <>
      <div className="container">
        <div className="vcc">
          <div className="vcc1">
            <h1 className="Mont">VCC TV</h1>
            <p className="MontMed mt-40">
              View More <img src="../imgs/rytarow.png" alt="arrow" />{" "}
            </p>
          </div>
          <div className="row">
            <div className="col-6">
              <img
                src={props.item.stories_list[0].file_url}
                className="roundcard2"
                width="100%"
                alt=" card img"
              />
            </div>
            <div className="col-6">
              <div>
                {props.item.stories_list[0].industry_details[0].slug ?<Link
                  to={props.item.stories_list[0].industry_details[0].slug}
                  style={{ color: "#096FFA" ,textTransform : "uppercase"}}
                  className="Montbold"
                >
                  <p>{props.item.stories_list[0].industry_details[0].name}</p>
                </Link> : ""}
              </div>
              <div className="mt-20">
                {props.item.stories_list[0].slug ? <Link to={props.item.stories_list[0].slug}>
                  <p className="Montbold" style={{ fontSize: "24px" }}>
                    {props.item.stories_list[0].title}
                  </p>
                </Link> : ""}
              </div>
              <div className="mt-20">
                <p>{props.item.stories_list[0].summary}</p>
              </div>
              <div>
                <ul className=" cardul MontMed ">
                  <li>
                    {moment(props.item.stories_list[0].publish).format(
                      "Do MMMM YYYY"
                    )}{" "}
                  </li>
                  <li>{props.item.stories_list[0].author_details[0].name}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Vcc;
