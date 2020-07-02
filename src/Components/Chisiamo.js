import React from 'react';
import Navbar from './Navbar2';
const routes = [{to:'/',label:'Home'},{to:'/serie',label:'Serie'},{to:'/contattaci',label:'Contattaci'},{to:'/chisiamo',label:'Chi siamo '}]


export default function Chisiamo(props){

    return(
        <>
        <Navbar></Navbar>
        <h1>Chisiamo</h1>
        </>
    )
}