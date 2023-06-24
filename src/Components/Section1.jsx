import moment from "moment";
import { Link } from "react-router-dom";
import Cards from "../Components/Cards.";
import { Adv } from "./Adv";
// import Adv2 from "./imgs/adv2.png";
import Adv3 from "../imgs/adv3.png";
const Section1 = (props) => {
  return (
    <>
      {props.item.stories_list[0] ? (
        <div className="container">
          <div className="sec1" key={props.item.stories_list[0].feid}>
            <div className="sec1sub1  ">
              {props.item.stories_list[0].industry_details[0].slug ?<Link
                to={props?.item.stories_list[0].industry_details[0].slug || ""}
                style={{ color: "#096FFA" , textTransform : "uppercase"}}
                className="Montbold"
              >
                {props.item.stories_list[0].industry_details[0].name}
              </Link> : ""}
              {props.item.stories_list[0].slug ?<Link to={props?.item.stories_list[0].slug || ""}>
                <h2 className="Mont" style={{ marginTop: "20px" }}>
                  {props.item.stories_list[0].title}
                </h2>
              </Link>: ""}
              <p className="MontReg sec1para" style={{ marginTop: "20px" }}>
                {props.item.stories_list[0].summary}
              </p>
              <ul className="MontMed cardulsec1">
                <li>
                  {moment(props.item.stories_list[0].publish).format(
                    "Do MMMM YYYY"
                  )}
                </li>
                <li>
                  {props.item.stories_list[0].author_details[0].slug ?<Link to={props?.item.stories_list[0].author_details[0].slug || ""}>
                    {props.item.stories_list[0].author_details[0].name}
                  </Link> : ""}
                </li>
              </ul>
              <div>
                <button
                  className="buttonSec1 Montbold hide"
                  width="100%"
                  style={{ marginTop: "10px" }}
                >
                  <Link to="/" style={{ color: "#FFFFFF" }}>
                    READ MORE
                  </Link>
                </button>
              </div>
            </div>
            <div className="sec1img">
              {props.item.stories_list[0].slug ?<Link to={props?.item.stories_list[0].slug || ""}>
                <img
                  src={props.item.stories_list[0].file_url}
                  width="100%"
                  className="sec1img1"
                  alt="sec1 img"
                />
              </Link> :""}
            </div>
           
          </div>
        </div>
      ) : null}
      {props.item.stories_list ? (
          <div className=" row container " key={props.item.stories_list.feid}>
          <Adv className ="adv3 none "  src ={Adv3} width = "80%" />
          <div className="Cardflex ">

         
            {props.item.stories_list.map((item, index) => {
              if (index === 0 ) return null;
              return (
                <>
                  <div className="col-3 postion ">
                    <Cards
                      className="cardflx "
                      // imgslug = {item.slug}
                      src={item.file_url}
                      wth = "Cardsec1"
                      // width ="100%"
                      premium = {item.premium}
                      slug = {item.industry_details[0].slug}
                      title={item.industry_details[0].name}
                      slug2 ={item.slug}
                      cardpara = "cardpara sec1font"
                      body={item.title}
                      publish={item.publish}
                      authorslug = {item.author_details[0].slug}
                      author={item.author_details[0].name}
                    />
                    
                  </div>
                </>
              );
            })}
          </div>
          </div>
      ) : null}
    </>
  );
};

export default Section1;
