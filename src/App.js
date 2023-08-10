import { Component } from "react";
import User from "./user/User";
import Register from "./Register";
import Admin from "./Admin/Admin";
import Menu from "./Menu/Menu";
import About from "./About/About";
import Service from "./Service/Service";
import Price from "./Price/Price";
import TeamMember from "./TeamMember/TeamMember";
import Feedback from "./Feedback/Feedback";

import {Routes, Route } from "react-router-dom";
import Home from "./Home/Home";

import Order from "./Order";

import Contect from "./Contect/Contect";
export default class App extends Component
{
  render()
  {
    return<div>
       <Menu/> 
       {/* <Carousal/> */}
       
      <Routes>
    {/* <Route path="/home" element={<Home/>}/> */}
    <Route path="/" element={<Home/>}/>
    

    <Route path="/about" element={<About/>}/>
    <Route path="/service" element={<Service/>}/>
    <Route path="/Contect" element={<Contect/>}/>
    {/* <Route path="/price" element={<Price/>}/> */}
    <Route path="/teamMember" element={<TeamMember/>}/>
    <Route path="/Feedback"element={<Feedback/>}/> 
    <Route path="/user" element={<User/>}/>
    <Route path="/Register"element={<Register/>}/>
    <Route path="/admin" element={<Admin/>}/>
    <Route path="/Order" element={<Order/>}/>
     {/* <Route path="/Footer" element={<Footer/>}/> */}
    </Routes>    
    
    </div>
  }
  
}