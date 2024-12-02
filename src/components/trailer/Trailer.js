import {useParams} from 'react-router-dom';
import ReactPlayer from 'react-player';
import './Trailer.css';

import React from 'react'

const Trailer = () => {

    let params = useParams();
    let key = params.ytTrailerId;

  return (
    <div className='react-player-container'>
        { (key!=null)? <ReactPlayer controls="true" playing={true} url={`https://www.youtube.com/watch?v=${key}`} height='100%' width='100%' />
         : null}
    </div>
  )
}

export default Trailer