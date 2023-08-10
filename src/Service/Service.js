
import React from "react";
import { Link } from "react-router-dom";
export default class Service extends React.Component
{
    render()
    {
        return <div>
            <div className="container-xxl py-5">
        <div className="container py-5">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="text-danger text-uppercase">Our Services</h6>
                <h1 className="mb-5">Explore Our Services</h1>
            </div>
            
            <div className="row g-4">
            {/* <div class="card"> */}
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                {/* <div class="card"> */}
                    <div className="service-item p-4">
                        <div className="overflow-hidden mb-4">
                            <img className="img-fluid" src="img/service-1.jpg"alt=""/>
                        </div>
                        <h4 className="mb-3">three wheeler</h4>
                        <p>goods capacity 1000kg</p>
                        <div className="condition-text">Base fare includes 1.0 km distance and 60 minutes of time</div>
                        <div className="condition-text">Pricing may vary based on your locality.</div>
                        <div className="condition-text">Road tax, parking etc as applicable over and above ride fare.</div>
                        <Link className="btn btn-primary btn-sm mt-2" to="/Order"><span>Order Now</span></Link>
                    </div>
                    {/* </div> */}
                </div>

                
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                {/* <div class="card" > */}
                    <div className="service-item p-4">
                        <div className="overflow-hidden mb-4">
                            <img className="img-fluid" src="img/service-2.jpg"alt="image not found"/>
                        </div>
                        <h4 className="mb-3">three wheeler</h4>
                        <h5 className="card-title">goods capacity 1200kg</h5>
                        <div className="card-text">Base fare includes 1.0 km distance and 60 minutes of time
                        Pricing may vary based on your locality.
                        Road tax, parking etc as applicable over and above ride fare.</div>
                        <Link className="btn btn-primary btn-sm mt-2" to="/Order"><span>Order Now</span></Link>
                    </div>
                    
                </div>
                {/* </div> */}
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="service-item p-4">
                        <div className="overflow-hidden mb-4">
                            <img className="img-fluid" src="img/service-3.jpg" alt=""/>
                        </div>
                        <h4 className="mb-3">four wheeler</h4>
                        <p>goods capacity 1500kg</p>
                        <div className="condition-text">Base fare includes 1.0 km distance and 60 minutes of time</div>
                        <div className="condition-text">Pricing may vary based on your locality.</div>
                        <div className="condition-text">Road tax, parking etc as applicable over and above ride fare.</div>
                        <Link className="btn btn-primary btn-sm mt-2" to="/Order"><span>Order Now</span></Link>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item p-4">
                        <div className="overflow-hidden mb-4">
                            <img className="img-fluid" src="img/service-4.jpg" alt=""/>
                        </div>
                        <h4 className="mb-3">four wheeler</h4>
                        <p>goods capacity 2000kg</p>
                        <div className="condition-text">Base fare includes 1.0 km distance and 60 minutes of time</div>
                        <div className="condition-text">Pricing may vary based on your locality.</div>
                        <div className="condition-text">Road tax, parking etc as applicable over and above ride fare.</div>
                        <Link className="btn btn-primary btn-sm mt-2" to="/Order"><span>Order Now</span></Link>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item p-4">
                        <div className="overflow-hidden mb-4">
                            <img className="img-fluid" src="img/service-5.jpg" alt=""/>
                        </div>
                        <h4 className="mb-3">four wheeler</h4>
                        <p>goods capacity 5000kg</p>
                        <div className="condition-text">Base fare includes 1.0 km distance and 60 minutes of time</div>
                        <div className="condition-text">Pricing may vary based on your locality.</div>
                        <div className="condition-text">Road tax, parking etc as applicable over and above ride fare.</div>
                        <Link className="btn btn-primary btn-sm mt-2" to="/Order"><span>Order Now</span></Link>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="service-item p-4">
                        <div className="overflow-hidden mb-4">
                            <img className="img-fluid" src="img/service-6.jpg" alt=""/>
                        </div>
                        <h4 className="mb-3">pickup</h4>
                        <p>goods capacity 2000kg</p>
                        <div className="condition-text">Base fare includes 1.0 km distance and 60 minutes of time</div>
                        <div className="condition-text">Pricing may vary based on your locality.</div>
                        <div className="condition-text">Road tax, parking etc as applicable over and above ride fare.</div>
                        <Link className="btn btn-primary btn-sm mt-2" to="/Order"><span>Order Now</span></Link>
                    </div>
                </div>
            {/* </div> */}
            </div>
        </div>
        
    </div>
        </div>
    }
}