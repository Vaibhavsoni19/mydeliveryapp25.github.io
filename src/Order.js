import React from "react";
import { Link } from "react-router-dom";
export default class Order extends React.Component
{
    render()
    {
        return <div>

<div className="row mt-3 mx-3" style={{marginRight:"25px",spacing:'15px'}}>
  <div className="col-md-3">
    <div style={{margintop: "50px",marginleft:"10px"}} className="text-center">
      <i id="animationDemo" data-mdb-animation="slide-right" data-mdb-toggle="animation"
        data-mdb-animation-reset="true" data-mdb-animation-start="onScroll"
        data-mdb-animation-on-scroll="repeat" className="fas fa-3x fa-shipping-fast text-white"></i>
      <h3 >Rent mini trucks & tempo for goods delivery in Indore</h3>
      <p className="white-text">You are 30 seconds away from compleating your order!</p>
    </div>
    <div className="text-center">
      <Link to="/service"><button type="submit" className="btn btn-white btn-rounded back-button">Go back</button></Link>
    </div>


  </div>
  <div className="col-md-9 justify-content-center">
    <div className="card card-custom pb-4">
      <div className="card-body mt-0 mx-5">
        <div className="text-center mb-3 pb-2 mt-3">
          <h4 style={{color: "red"}}>Delivery Details</h4>
        </div>

        <form className="mb-0">

          <div className="row mb-4">
            <div className="col">
              <div className="form-outline">
                <input type="text" id="form9Example1" className="form-control input-custom"placeholder="Enter Picup Address" />
                <label className="form-label" for="form9Example1"></label>
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <input type="text" id="form9Example2" className="form-control input-custom"placeholder="Enter DropOff Address" />
                <label className="form-label" for="form9Example2"></label>
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col">
              <div className="form-outline">
                <input type="text" id="form9Example3" className="form-control input-custom"placeholder="Enter city name" />
                <label className="form-label" for="form9Example3"></label>
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <input type="text" id="form9Example4" className="form-control input-custom"placeholder="Enter zip code" />
                <label className="form-label" for="form9Example4"></label>
              </div>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col">
              <div className="form-outline">
                <input type="text" id="form9Example6" className="form-control input-custom"placeholder="enter user name" />
                <label className="form-label" for="form9Example6"></label>
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <input type="number" id="" className="form-control input-custom"placeholder="enter mobile number" />
                <label className="form-label" for="number"></label>
              </div>
            </div>
          </div>

          <div className="d-grid gap-2 col-4 mx-auto ">
          
            <button type="submit" className="btn btn-danger"
             >Booked</button>
          </div>

        </form>
      </div>
    </div>
  </div>
</div>
</div>
    }
}




<input placeholder="Enter Pickup Address" id="custom-autocomplete-Pickup Address" 
role="combobox" 
aria-autocomplete="list" aria-expanded="false" autocomplete="off" value=""></input>