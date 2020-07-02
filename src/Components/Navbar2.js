import React from 'react';
import './navbar2.css';
import Searchbar from './Searchbar';
import {NavLink} from 'react-router-dom';

export default class Navbar2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
      }
      /* */
    render() {
        return (
            <div className="nav d-flex align-items-center px-3">
                {/**
                 * this.props.map((el)=>{
                 * return <p><NavLink exact to={el.to}>{el.label}</NavLink></p>
                 * })
                 * const routes = [{to:'/',label:'Home'},{to:'/serie',label:'Serie'},{to:'/contattaci',label:'Contattaci'},{to:'/chisiamo',label:'Chi siamo '}]
                 */}
                <p><NavLink exact activeClassName="active" to="/">Home</NavLink></p>
                <p><NavLink activeClassName="active" to="/serie">Serie</NavLink></p>
                <p><NavLink activeClassName="active" to="/contattaci">Contattaci</NavLink></p>
                <p><NavLink activeClassName="active" to="/chisiamo">Chi siamo</NavLink></p>

                <Searchbar onsearch={this.props.onsearch}></Searchbar>
            </div>
        )
    }
}