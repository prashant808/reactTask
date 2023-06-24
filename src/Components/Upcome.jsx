import React from 'react'
import {useRef} from 'react';
import {Carouseldata8} from '../Carousel1data';
import {Link} from 'react-router-dom'
function Upcome(props) {
  const ref = useRef(null);

  const  scroll = (scrollOffset)=> {
    ref.current.scrollLeft += scrollOffset;
  };

  return (
    <>   
    <div className='container postion'>
    <div className='relate2'>
    <button  onClick={() => scroll(200)} className='round'><img src='../imgs/slideicon.png' alt='icon' /></button>
    </div>
    <div className='relateryt3'>
    <button  onClick={() => scroll(-200)} className='round'><img src='../imgs/slideicon.png' className='sIcon' alt='icon' /></button>
    </div>
      <div className='slideflex'>
    <h1 className='Mont mt-40' >{props.maintitle}</h1>
    <p className='MontMed mt-40'>View More <img src='../imgs/rytarow.png' alt='arrow' /> </p>
    </div>
    <div ref={ref} className=' mt-40 flexupcome  '>
       
       {Carouseldata8.map((item)=>{
        return<div className='upcome flex boxshdw2'>
             <div> 
                 <img src={item.src}   className='Cardeditorup' width={item.width} height={props.height} alt = "cardimg" />
             </div>
             <div style={{paddingLeft:"10px"}}>
             <div className='cardtitle  p-20' style={{marginTop :"5px"}}>
             <Link to="/" style={{color:"#096FFA"}} className="Montbold">{item.title}</Link>
             </div>
             <div className='cardbody mt-10 p-20 MontMed'>
              <p style={{fontSize:"10px"}}>{item.body}</p>
             </div>
                  <ul className='cardul p-20'>
                    <li>
                      27th july 2022
                    </li>
                    <li>
                      Joseph rai
                    </li>
                  </ul>
             </div>
         </div>
       })}
       </div>
       </div>
    </>
  )
}

export default Upcome