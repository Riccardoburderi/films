import React from 'react';
import './../index.css'; 

export default function Movielist({movie}){     //possiamo passare anche solo una parte dei props => destruttutrazione => {nome props che vogliamo}
        return (
            <>
                <div className="col-12 card ">
                    <img className="card-img-top" alt={movie.Title} src={movie.Poster}/>
                    <div className="card-body">
                        <h5 className="card-title">{movie.Title}</h5>
                        <p className="card-text">ID film: {movie.imdbID}</p>
                    </div>
                </div>
            </>
        )
    
}

