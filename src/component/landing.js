import jwt_decode from "jwt-decode";
import { Component} from "react";

import React from 'react';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
  } from 'mdb-react-ui-kit';
import axios from "axios";
  
class Landing extends Component
{ 
    constructor(props)
    {super(props)
     this.state={
                  user:jwt_decode(localStorage.getItem("token")),
                  newProject: {
                    creator :jwt_decode(localStorage.getItem("token")).email,
                    pname :"",
                    category :"",
                    NeededCapital :0,
                    collectedCapital :0,
                    description :""
                  },
                  projects:[]
                }
    
    }
   
    handelPn=(e)=>{
      this.setState({
        ...this.state,
        newProject:{
            ...this.state.newProject,
            pname: e.target.value
        }
    })}
    handelCt=(e)=>{
      this.setState({
        ...this.state,
        newProject:{
            ...this.state.newProject,
            category: e.target.value
        }
    })}
    handelNc=(e)=>{
      this.setState({
        ...this.state,
        newProject:{
            ...this.state.newProject,
            NeededCapital: e.target.value
        }
    })}
    handelDs=(e)=>{
      this.setState({
        ...this.state,
        newProject:{
            ...this.state.newProject,
            description: e.target.value
        }
    })}
    Createproject=async (e)=>{
      e.preventDefault();
      console.log(this.state.newProject)
      await axios.post('http://127.0.0.1:80/project/newProject',this.state.newProject).then((res)=>{
        
        if(res.data==='success'){
             alert(res.data)
         }
     
         else 
         {   
          alert('an error has occured please try again')
         }
    })}
    
  
componentDidMount()
{ 
  axios.get('http://127.0.0.1:80/project/getByUser/'+this.state.user.email,this.state.user.email).then((result)=>{
    this.setState({
      ...this.state,
      projects:result.data
 })})
}
   render(){
    console.log(this.state.projects)
    const projectlist=this.state.projects.map((item,index)=>{
      return <MDBCard key={index} className="mb-4">
      <MDBCardBody>
        <MDBRow>
          <MDBCol sm="3">
            <MDBCardText>Project Name</MDBCardText>
          </MDBCol>
          <MDBCol sm="9">
            <MDBCardText className="text-muted">{item.pname}</MDBCardText>
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow>
          <MDBCol sm="3">
            <MDBCardText>Category</MDBCardText>
          </MDBCol>
          <MDBCol sm="9">
            <MDBCardText className="text-muted">{item.category}</MDBCardText>
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow>
          <MDBCol sm="3">
            <MDBCardText>Needed Capital</MDBCardText>
          </MDBCol>
          <MDBCol sm="9">
            <MDBCardText className="text-muted">{item.NeededCapital}</MDBCardText>
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow>
          <MDBCol sm="3">
            <MDBCardText>Collected Capital</MDBCardText>
          </MDBCol>
          <MDBCol sm="9">
            <MDBCardText className="text-muted">{item.collectedCapital}</MDBCardText>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>
    })
    console.log(projectlist)
    return <div>
      <div id="newproject" className="modal col-sm-8 offset-sm-2 " role="dialog">
                            <div className="modal-dailog modal-lg modal-dialog-center" >
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title">Create new Project</h4>
                                        <button type="button" className="close" data-dismiss="modal">
                                            &times;
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="form-row">
                                                <div className="form-group col-sm-4">
                                                        
                                                        <input type="text" className="form-control form-control-sm mr-1" placeholder="Project name" onChange={this.handelPn} />
                                                </div>
                                                <div className="form-group col-sm-4">
                                                    <input type="text" className="form-control form-control-sm mr-1"  placeholder="Category" onChange={this.handelCt} />
                                                </div>
                                                <div className="form-group col-sm-4">
                                                    <input type="number" className="form-control form-control-sm mr-1"  placeholder="Needed Capital: $" onChange={this.handelNc} />
                                                </div>
                                            </div>
                                            <div className="form-row">

                                              <textarea className="col-11 m-2" placeholder="Project Description :" onChange={this.handelDs} />
                                            </div>
                                            <div className="form-row">
                                                <button type="button" className="btn btn-secondary btn-sm ml-auto" data-dismiss="modal">Cancel</button>
                                                <button type="submit" className="btn btn-primary btn-sm ml-1" onClick={this.Createproject}>submit</button>        
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
            <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <h2 className="text-muted mb-1">{this.state.user.firstname}</h2>
                <h2 className="text-muted mb-4">{this.state.user.lastname}</h2>
                <div className="d-flex justify-content-center mb-2">
                  <MDBBtn rounded className='mx-2' color='danger' onClick={()=>{
                localStorage.removeItem('token')
                window.location='/'
                }}>Signout</MDBBtn>
                 
                </div>
              </MDBCardBody>
            </MDBCard>
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBBtn className='mx-2'color='primary'data-toggle="modal" data-target="#newproject">New project</MDBBtn>
                <MDBBtn className='mx-2'color='success'>See ALL project</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Full Name</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{this.state.user.firstname} {this.state.lastname}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{this.state.user.email}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{this.state.user.phone}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{this.state.user.address}</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>

            {projectlist}

          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
     
    </div>
  }
    
}

export default (Landing)