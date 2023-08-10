import React from "react";
import { Link } from "react-router-dom";
export default class Register extends React.Component
{
    render()
    {

        return<div>
                
                <div className="container mt-5">
                <div className="card bg-light text-dark"><br/>
            <h1 style={{ textAlign: 'center' }}>Register Here !</h1>
            <form>
            
                <div className="form-group mb-4 col-sm-4">
                    <label >Enter Name:</label>
                    <input type="text" className="form-control"  placeholder="Enter name" name="pwd" />
                </div>
                <div className="form-group mb-4 col-sm-4">
                    <label >Enter Email:</label>
                    <input type="email" className="form-control" id="email"  placeholder="Enter email" name="email" />
                </div>
                <div className="form-group mb-4 col-sm-4">
                    <label >Enter Password:</label>
                    <input type="password" className="form-control" id="pwd"  placeholder="Enter password" name="pwd" />
                </div>
                <div className="form-group mb-4 col-sm-4">
                    <label >Enter Mobile:</label>
                    <input type="number" className="form-control"  placeholder="Enter mobile" name="pwd" />
                </div>

                <div className="d-grid gap-1 col-4 ">
                    <button type="submit" className="btn btn-danger">Submit</button>
                </div>
                <div className="d-grid gap-1 col-4"><br/>
                <Link className="btn btn-danger" to="./User">Login</Link>
                </div><br/>
                
            </form>
            
        </div>
             </div>
             </div>
           
    }
}