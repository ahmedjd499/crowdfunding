import { Component } from "react";
import logo from '../logo.png'




class Head extends Component{
    render(){
       return <header className="jumbotron ">
        <div className="container ">
            <div className="row row-header ">
                <div className="col-12 col-sm-3 col-md-2 offset-sm-2">
                    <img src={logo} alt="qsdfgy" className="img-fluid"/>
                </div>
                <div className="col-12 col-sm-3 col-md-2 align-self-center">
                    <h1>Fundastic</h1>
                </div>
            </div>
        </div> 
     </header>
    }
}
export default Head 