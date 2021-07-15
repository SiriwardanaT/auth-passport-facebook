import React, { Component } from 'react'
import '../component/login.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import icon from '../assest/node.png'
export default class login extends Component {
 
    render() {
        const FACEBOOKIRL = "http://localhost:3001/auth/facebook/callback";
        const GITHUBURL = "http://localhost:3001/auth/github/callback";
        return (
            <div className="login_container">
                
                <form className="form">
                    <img src={icon} alt=""  width="50" ></img>
                    <h3>Login</h3>
                    <div class="mb-3">
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                    </div>
                    <div class="mb-3">
                        <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="password"></input>
                    </div>

                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button type="button" class="btn btn-light">Login</button>   
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto" id="facebook">
                        <a href={FACEBOOKIRL}><button type="button" class="btn btn-primary" id="facebook1">
                            <i class="bi bi-facebook">
                               
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                            </svg>
                            </i>
                            continue with facebook
                        </button></a>
                        <a href={GITHUBURL}><button type="button" class="btn btn-warning" id="github">
                            <svg className="gitsvg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                            continue with github
                        </button></a>
                       

                        
                    </div>
                </form>      
            </div>
        )
    }
}
