import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Vcccards from "./Vcccards";
function VccSlide(props) {
  const ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <>
      {props.item.stories_list[0] ? (
        <div className="Vccslide container-fluid postion ">
          <div className="container"  key={props.item.stories_list[0].feid}>
            <div className="slideflex container mt-40">
              <div className="Vccpre">
                <Link to={props.item.section_slug}>
                  <h1 className="Mont  " style={{ color: "#FFFFFF" }}>
                    {props.item.section_name}{" "}
                    <img src="../imgs/crown.png" alt="crown" />
                  </h1>
                </Link> 
              </div>
              <div className="hide">
                <button className="buttonVcc Montbold">
                  <Link to="/" style={{ color: "#FFFFFF" }}>
                    Subscribe
                  </Link>
                </button>
              </div>
            </div>
            {/* <div className={props.className}></div> */}
            <div ref={ref} className="  mediascroller">
              <div className="relate">
                <button onClick={() => scroll(325)} className="round">
                  <img src="../imgs/slideicon.png" alt="icon" />
                </button>
              </div>
              <div className='relateryt2'>
    <button  onClick={() => scroll(-325)} className='round'><img src='../imgs/slideicon.png' className='sIcon' alt='icon' /></button>
    </div>
    {props.item.stories_list.map((item, index) => {
            return (
              <>
              <div className="">
                <Vcccards
                  className=" Vcccard mt-10"
                  src={item.file_url}
                  premium = {item.premium}
                  width="100%"
                  slug = {item.industry_details[0].slug}
                  title={item.industry_details[0].name}
                  slug2 = {item.slug}
                  cardpara = "cardpara"
                  body={item.title}
                  publish={item.publish}
                  authorslug = {item.author_details[0].slug}
                  author={item.author_details[0].name}
                  author2 = {item.author_details.length > 1 ? item.author_details[1].name : " "}
                      secondname = {item.author_details.length > 1 ? "+1": " "}
                />
                 
                </div>
              </>
            );
          })}     
            </div>
            <div className="none vccbtn2">
              <button className="buttonVcc Montbold">
                <Link to="/" style={{ color: "#FFFFFF" }}>
                  Subscribe
                </Link>
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default VccSlide;
