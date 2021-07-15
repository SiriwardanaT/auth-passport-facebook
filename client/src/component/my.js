import React, { Component } from 'react'
import axios from 'axios'
import icon from '../assest/node.png'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../component/profile.css'
import authimag from '../assest/authentication.svg'
export default class my extends Component {

    constructor(props){
         super(props);

         this.state = {
             username : "",
             profile_url : ""
         }
    }
    
    componentDidMount(){
        axios.get('http://localhost:3001/my',{withCredentials:true}).then((res)=>{
            console.log(res)
            if(res.data.id){
               this.setState({username:res.data.displayName})
               this.setState({profile_url:res.data.profile})
               
            }
            else{

            }

           

        }).catch((err)=>{
           // console.log(err)
        })
    }
    render() {
        return (
             
            <div className="my_container">
                 <div className="img_container">
                        <img src={authimag} width="600"></img>

                 </div>
                <div className="profile_container">
                     <center><img src={icon} alt=""  width="50" ></img></center>
                     <center><img className="profile" src={this.state.profile_url}></img></center>
                     <center><h1>welcome</h1></center>
                    <div className="username">
                        <center><h1>{this.state.username}</h1></center>
                    </div>

                </div>
                <a href="/login"><button id="logout" className="btn btn-warning">LogOut</button></a>
                
                


           </div>
        )
    }
}
