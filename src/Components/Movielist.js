
import React from 'react';
import Movieitem from './Movieitem';

function Movielist(props) {
  if (!props.movies) {
    return null;
  } 
  
  return (
    <div className="row justify-content-around">
    {
    props.movies.map((movie)=>{
    return <Movieitem key={movie.imdbID} movie={movie}></Movieitem>
    })
    }
</div>
  )
}

export default Movielist;