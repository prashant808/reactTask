import React from "react";
import { useRef } from "react";
import Cards from "./Cards.";
import "../App.css";
import { Link } from "react-router-dom";

function Slider1(props) {
  const ref = useRef(null);
 

  // function count(){
  //   setCounter(counter+1)
  // }

  // setCounter(prev => prev+1)

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
    ref.current.scrollLeft.classList.toggle('slidehide')

    
  };

  return (
    <>
      {props.item.stories_list[0] ? (
        <div
          className="container postion  "
          key={props.item.stories_list[0].feid}
        >
          <div className="relate1">
            <button onClick={() => scroll(325)} className="round">
              <img src="../imgs/slideicon.png" alt="icon" />
            </button>
          </div>
          
          <div className="relateryt">
            <button onClick={() => scroll(-325)} className="round " >
              <img src="../imgs/slideicon.png" className="sIcon" alt="icon" />
            </button>
          
          </div>
          <div className="slideflex">
            <Link to={props.item.section_slug}>
              <h1 className="Mont mt-40">{props.item.section_name}</h1>
            </Link>
            <p className="MontMed mt-40">
              View More <img src="../imgs/rytarow.png" alt="arrow" />{" "}
            </p>
          </div>
          {/* <div className="blrrelate"></div> */}
          <div ref={ref} className=" mediascroller postion">
            {props.item.stories_list.map((item) => {
              return (
                <>
                  <div
                    className="Cards  "
                    key={props.item.stories_list[0].feid}
                  >
                    <Cards
                      className=" mt-10"
                      imgslug={item.slug}
                      wth="roundcard"
                      src={
                        item.file_url !== ""
                          ? item.file_url
                          : "../imgs/slide3.1.png"
                      }
                      premium = {item.premium}
                      width="100%"
                      slug2={item.slug}
                      cardpara="cardpara"
                      body={item.title}
                      publish={item.publish}
                      authorslug={item.author_details[0].slug}
                      tooltip={item.author_details.length > 1 ? "tooltip" : ""}
                      author={item.author_details[0].name}
                      author2={
                        item.author_details.length > 1
                          ? item.author_details[1].name
                          : " "
                      }
                      secondname={item.author_details.length > 1 ? "+1" : " "}
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
}

export default Slider1;
