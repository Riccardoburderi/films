import React from 'react';
import './App.css';
import Movielist from './Components/Movielist';
import Navbar from './Components/Navbar2';

const APIKEY = '42c2b0ab';
const APIURL = 'http://www.omdbapi.com/';

function fetchMovies(search){
  return fetch(APIURL+'?apikey='+APIKEY+'&s='+search).then((res)=>res.json());
}
const routes = [{to:'/',label:'Home'},{to:'/serie',label:'Serie'},{to:'/contattaci',label:'Contattaci'},{to:'/chisiamo',label:'Chi siamo'}];
const dropdown = [];

const config = {
  routes : routes,
  dropdown : dropdown,
  search : true,
  logo : {src:'https://via.placeholder.com/50',alt:'logo'}
}
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      movies : [],
      totalMovies : 0
    };

  }

  searchMovie = (termine = "")=>{
    if(termine.length < 3){
      return
    }
    fetchMovies(termine).then((res)=>{
      this.setState({
        movies:res.Search,
        totalMovies:res.totalSearch
      })
    });

  }
  render(){
    return (
      <>
      <Navbar config={config} onsearch={this.searchMovie}></Navbar>
      <div className="container">
        <div className="row text-center align-items-center">
          <div className="col-12">
            <h1 className="my-3 pt-5">I miei film preferiti</h1>
              <Movielist movies={this.state.movies}></Movielist>
          </div>
        </div>
      </div>
      </>
    )
  }
  componentDidMount(){
    this.searchMovie('adventure');
  }

}


export default App;
