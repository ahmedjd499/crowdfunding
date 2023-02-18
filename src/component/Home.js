import axios from "axios";
import {  useEffect, useState } from "react";

import '../Home.css'
import Foot from "./Foot";
import Head from "./Head";


function Home (){
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const handelEM=(e)=>{
        setEmail(e.target.value)
    }
    const handelPS=(e)=>{
        setPassword(e.target.value)
    }
    const handelLogin=(e)=>{
        e.preventDefault();
        
        
        axios.post('http://127.0.0.1:80/user/login',{
            email:email,
            password:password
        }).then(result=>{
            if(result.status===200)
            {
                localStorage.setItem('token',result.data.mytoken)
                window.location.href='/landing'
            }
        })
    }
    useEffect(()=>{
        if(localStorage.getItem('token'))
        {
            window.location.href='/landing'
        }
    },[])
    if(!localStorage.getItem('token'))
      return <div>
                 <Head />
                 <div id="content"className="">
                    <div className="ctn mt-5 containner">
                        <div className="row justify-content-center">
                            <p className="col-12 col-sm-10 ">
                            Looking to invest in small companies? or Looking for financial help ? <br></br>
                            here you can Use Our Advanced Deal Search Filters to Discover New Opportunities! Become a Contributor! or post projects ideasa and wait for financing !
                            </p>
                        </div>
                        <div className="mt-5">
                         <a href="/signup">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>Start CrowdFunding 
                         </a>
                       
                        </div>
                        <div className="row justify-content-center mt-3">
                            <div>
                            Already registred?
                            <button className="signinbutton" data-toggle="modal" data-target="#signin"> Log In !</button>
                            </div>
                        </div>
                        </div>
                        <div id="signin" className="modal col-sm-8 offset-sm-2 " role="dialog">
                            <div className="modal-dailog modal-lg modal-dialog-center" >
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title">Login</h4>
                                        <button type="button" className="close" data-dismiss="modal">
                                            &times;
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="form-row">
                                                <div className="form-group col-sm-4">
                                                        <label className="sr-only">Email address</label>
                                                        <input type="email" className="form-control form-control-sm mr-1" id="exampleInputEmail3" placeholder="Enter email" onChange={(e)=>handelEM(e)}/>
                                                </div>
                                                <div className="form-group col-sm-4">
                                                    <label className="sr-only" >Password</label>
                                                    <input type="password" className="form-control form-control-sm mr-1" id="exampleInputPassword3" placeholder="Password"onChange={(e)=>handelPS(e)}/>
                                                </div>
                                                
                                            </div>
                                            <div className="form-row">
                                                <button type="button" className="btn btn-secondary btn-sm ml-auto" data-dismiss="modal">Cancel</button>
                                                <button type="submit" className="btn btn-primary btn-sm ml-1"onClick={(e)=>handelLogin(e)}>Sign in</button>        
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 <Foot />

                
                            
             </div>
    }
  
  
  export default Home;
  