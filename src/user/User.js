
                import { Component } from "react";
                 import { Link } from "react-router-dom";
                // import Admin from "../Admin/Admin";
                // import "./User.css"
                  // import Menu from "../Menu/Menu";
                  export default class User extends Component {
               render() {
                    return <div>

     <div className="container mt-5">
     <div className="card bg-light text-dark"><br/>
        <h1 style={{ textAlign: 'center' }}>Login Here!</h1>

            <form >
                <div className="form-outline mb-4 col-sm-4 ">
                    <label class="form-label"for="exampleInputEmail1">Email</label>
                    <input type="email" className="form-control"placeholder="Enter email" name="email"required />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>

                <div className="form-outline mb-4 col-sm-4">
                    <label for="exampleInputPassword1">Password:</label>
                    <input type="password" className="form-control"placeholder="Enter password" name="pwd"required /><br/><br/>
                    </div>
                <div className="col-md-2 ">
        
          <Link to="#!">Forgot password?</Link>
        </div>
        
                <div class="form-group form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>

                <div className="pt-1 mb-3">
                    <button type="submit"className="btn btn-danger btn-lg btn-block ">Login</button>
                    <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to="/Register"
                class="link-danger">Register</Link></p>
                </div>
                
            </form>

            <Link to="/admin">Admin Panel</Link>
            </div>
        </div>
        </div>
}
}


              {/* <div className="loginBox"> */}
              {/* <span class="border border-dark"> */}
              {/* <span className="border">
                <div className="container-sm mt-5"style={{height:"600px",width:"600px"}}>
                <ul className="nav nav-pills nav-justified mb-3"role="tablist">

                    <li className="nav-item" role="presentation">
                        <Link className="nav-link active"data-mdb-toggle="pill" to="/User" role="tab"
                            aria-controls="pills-login" aria-selected="true">Login</Link>
                    </li>
                    <li className="nav-item" role="presentation">
                        <Link className="nav-link"data-mdb-toggle="pill" to="/Register" role="tab"
                            aria-controls="pills-register" aria-selected="false">Register</Link>
                    </li>
                </ul>


                <div className="tab-content">
                    <div className="tab-pane fade show active" role="tabpanel" aria-labelledby="tab-login">
                        <form>
                            <div className="text-center mb-3 login-form">
                                <p>Sign in with:</p>
                                <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-facebook-f"></i>
                                </button>

                                <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-google"></i>
                                </button>

                                <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-twitter"></i>
                                </button>

                                <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-github"></i>
                                </button>
                            </div>

                            <p className="text-center">or:</p>


                            <div className="form-outline mb-4">
                                <input type="email"className="form-control" placeholder="Email or username"/>
                                <label className="form-label" for="loginName"></label>
                            </div>


                            <div className="form-outline mb-4">
                                <input type="password"className="form-control" placeholder="Password"/>
                                <label className="form-label" for="loginPassword"></label>
                            </div>


                            <div className="row mb-4">
                                <div className="col-md-6 d-flex justify-content-center">

                                    <div className="form-check mb-3 mb-md-0">
                                        <input className="form-check-input" type="checkbox" value="" />
                                        <label className="form-check-label" for="loginCheck"> Remember me </label>
                                    </div>
                                </div>

                                <div className="col-md-6 d-flex justify-content-center">

                                    <Link to="#!">Forgot password?</Link>
                                </div>
                            </div>

                            <div className="text-center">
                            <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>
                            </div>

                            <div className="text-center">
                                <p>Not a member? <Link to="/Register">Register</Link></p>
                            </div>
                        </form>
                    </div>
                    </div>
                    
                    </div>
                    
                    </span>
                    </div> */}
                    
                    {/* <div className="tab-pane fade"role="tabpanel" aria-labelledby="tab-register">
                        <form>
                            <div className="text-center mb-3">
                                <p>Sign up with:</p>
                                <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-facebook-f"></i>
                                </button>

                                <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-google"></i>
                                </button>

                                <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-twitter"></i>
                                </button>

                                <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-github"></i>
                                </button>
                            </div> */}

                            {/* <p className="text-center">or:</p> */}


                            {/* <div className="form-outline mb-4">
                                <input type="text"className="form-control"/>
                                <label className="form-label" for="registerName">Name</label>
                            </div>


                            <div className="form-outline mb-4">
                                <input type="text"className="form-control" />
                                <label className="form-label" for="registerUsername">Username</label>
                            </div>


                            <div className="form-outline mb-4">
                                <input type="email" id="registerEmail" className="form-control" />
                                <label className="form-label" for="registerEmail">Email</label>
                            </div>


                            <div className="form-outline mb-4">
                                <input type="password" id="registerPassword" className="form-control" />
                                <label className="form-label" for="registerPassword">Password</label>
                            </div>


                            <div className="form-outline mb-4">
                                <input type="password" id="registerRepeatPassword" className="form-control" />
                                <label className="form-label" for="registerRepeatPassword">Repeat password</label>
                            </div> */}


                            {/* <div className="form-check d-flex justify-content-center mb-4">
                                <input className="form-check-input me-2" type="checkbox" value="" checked
                                    aria-describedby="registerCheckHelpText" />
                                <label className="form-check-label" for="registerCheck">
                                    I have read and agree to the terms
                                </label>
                            </div> */}


                            {/* <button type="submit" className="btn btn-primary btn-block mb-3">Sign in</button> */}
                        {/* </form>
                    </div>
                </div>
            </div>
        </div>
         */}
        {/* <!-- Pills content --> */ }


        {/* <Link rel="stylesheet" to="/User.css" />
             <div className="loginBox"> 
     <img className="user" src="https://i.ibb.co/yVGxFPR/2.png" height="100px" width="100px"/>
    <h3>Sign in here</h3>
    <form>
        <div className="inputBox"> <input id="uname" type="text" name="Username" placeholder="Username"/>
            <input id="pass" type="password" name="Password" placeholder="Password"/>
        </div>
       <Link to="/home"><input type="submit" name="" value="Login"/></Link> 
    </form>
    
    <Link to="/admin">Admin Panel</Link>
    <Link to="#">Coustmer Panel </Link>

    <Link to="#">Forget Password<br/> </Link>
    <div className="text-center">
        <p style={{color: '#59238F'}}>Sign-Up</p>
    </div>

     </div> */}

    
   