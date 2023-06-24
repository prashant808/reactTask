import React from 'react'
import { Link } from 'react-router-dom'

function Premium(props) {
  return (
    <>
        <div className='Premium'>
            <Link to= "/" ><p className={props.className}>PREMIUM</p></Link>
        </div>
    </>
  )
}

export default Premium