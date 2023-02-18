import axios from "axios";
import { Component } from "react";

import Head from "./Head";




class SignUp extends Component
{  
    constructor(props){
        super(props)
        this.state={user:{
            firstname:"",
            lastname:"",
            email:"",
            type:"",
            password:"",
            phone:"",
            address:""
            },
        cp:false
    }
    }

    handelFN=(e)=>{
        this.setState({
            ...this.state,
            user:{
                ...this.state.user,
                firstname: e.target.value
            }
           

        })
    }
    handelLN=(e)=>{
        this.setState({
            ...this.state,
            user:{
                ...this.state.user,
                lastname: e.target.value
            }
           

        })
    }
    handelEm=(e)=>{
        this.setState({
            ...this.state,
            user:{
                ...this.state.user,
                email: e.target.value
            }
           

        })
    }
    handelTP=(e)=>{
        this.setState({
            ...this.state,
            user:{
                ...this.state.user,
                type: e.target.value
            }
           

        })
    }
    handelPS=(e)=>{
        this.setState({
            ...this.state,
            user:{
                ...this.state.user,
                password: e.target.value
            }
           

        })
        
    }
    handelCP=(e)=>{
       
        if(e.target.value===this.state.user.password)
        this.setState({
            ...this.state,
            cp:true
           

        })
    }
    handelPH=(e)=>{
        this.setState({
            ...this.state,
            user:{
                ...this.state.user,
                phone: e.target.value
            }
           

        })
    }
    handelAD=(e)=>{
        this.setState({
            ...this.state,
            user:{
                ...this.state.user,
                address: e.target.value
            }
           

        })
    }
    
        
    handelSB=async (e)=>{
        e.preventDefault();
        
        if(this.state.cp)
        {
           await axios.post('http://127.0.0.1:80/user/createUser',this.state.user).then((res)=>{
           
           if(res.data==='email already in use'){
                alert(res.data)
            }
        
            else 
            {   
                localStorage.setItem('token',res.data.mytoken)
                window.location.href='/landing'
            }
           })
           
        }
    }
    render(){
        return <div>
                    <Head />
                    <div className="container ">
                        <div className="row justify-content-center">
                        <div className="form col-12 col-sm-8 col-md-4 text-center">
                            <div className="form-body  ctn mb-5">
                            <a className="close" href="./">
                                           x
                            </a>
                                <h4>Here to get started</h4>
                                <div className="username">
                                    <input className="form__input" type="text" id="firstName" placeholder="First Name"onChange={this.handelFN}/>
                                </div>
                                <div className="lastname">
                                    <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName"onChange={this.handelLN}/>
                                </div>
                                <div className="phone">
                                    <input className="form__input" type="text" id="phone" placeholder="Phone Number"onChange={this.handelPH}/>
                                </div>
                                <div className="adress">
                                    <input className="form__input" type="text" id="address" placeholder="adress"onChange={this.handelAD}/>
                                </div>
                                <div className="email">
                                    <input  type="email" id="email" className="form__input" placeholder="Email"onChange={this.handelEm}/>
                                </div>
                                <div className="password">
                                    <input className="form__input" type="password"  id="password" placeholder="Password"onChange={this.handelPS}/>
                                </div>
                                <div className="confirm-password">
                                    <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"onChange={this.handelCP}/>
                                </div>
                                <div className="form-check row ">
                                    <input className=" form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"defaultChecked onChange={this.handelTP}value='ent' />
                                    <label className="col-3 form-check-label" >
                                         Investisseur
                                    </label>
                                    <br/>
                                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"onClick={this.handelTP}value='ent' />
                                    <label className="col-3 form-check-label">
                                         Entrepreneur
                                    </label>
                                </div>
                                <button id="submit"type="submit"onClick={this.handelSB}>Sign Up </button>
                               
                            </div>
          
                        </div>  
                    </div>
                    </div>
                        
               </div>
    }
}

export default SignUp