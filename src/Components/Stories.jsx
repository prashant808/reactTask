import React from "react";
import Cardflex2 from "./Cardflex2";
function Stories(props) {
  return (
    <>
       {props.item.stories_list[0] ? (
         <div className="container" key={props.item.stories_list[0].feid}>

         <h1>{props.item.section_name}</h1>
        <div className="row">
        {props.item.stories_list.map((item,index)=>{
          return(
            <>
            <div className="col-6 postion">
            <Cardflex2
              className="flex mt-10"
              src={item.file_url}
              premium = {item.premium}
              slug = {item.industry_details[0].slug}
              title={item.industry_details[0].name}
              slug2={item.slug}
              cardpara = "cardpara sec1font"
              body={item.title}
              publish={item.publish}
              authorslug = {item.author_details[0].slug}
              author={item.author_details[0].name}
              author2 = {item.author_details.length > 1 ? item.author_details[1].name : " "}
                      secondname = {item.author_details.length > 1 ? "+1": " "}
            />
            
          </div>
            </>
          )
        })

        }
         
        </div>
      </div> ) : null }
     
    </>
  );
}

export default Stories;