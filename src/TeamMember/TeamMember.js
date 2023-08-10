import { Component } from "react";
import { Link } from "react-router-dom";

export default class TeamMember extends Component
{
    render()
    {
        return<div>
            <div className="container-xxl py-5">
        <div className="container py-5">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="text-secondary text-uppercase">Our Team</h6>
                <h1 className="mb-5">Expert Team Members</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="team-item p-4">
                        <div className="overflow-hidden mb-4">
                            <img className="img-fluid" src="img/team-1.jpg" alt=""/>
                        </div>
                        <h5 className="mb-0">Full Name</h5>
                        <p>Designation</p>
                        <div className="btn-slide mt-1">
                            <i className="fa fa-share"></i>
                            <span>
                                <Link to=""><i className="fab fa-facebook-f"></i></Link>
                                <Link to=""><i className="fab fa-twitter"></i></Link>
                                <Link to=""><i className="fab fa-instagram"></i></Link>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="team-item p-4">
                        <div className="overflow-hidden mb-4">
                            <img className="img-fluid" src="img/team-2.jpg" alt=""/>
                        </div>
                        <h5 className="mb-0">Full Name</h5>
                        <p>Designation</p>
                        <div className="btn-slide mt-1">
                            <i className="fa fa-share"></i>
                            <span>
                                <Link to=""><i className="fab fa-facebook-f"></i></Link>
                                <Link to=""><i className="fab fa-twitter"></i></Link>
                                <Link to=""><i className="fab fa-instagram"></i></Link>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                    <div className="team-item p-4">
                        <div className="overflow-hidden mb-4">
                            <img className="img-fluid" src="img/team-3.jpg" alt=""/>
                        </div>
                        <h5 className="mb-0">Full Name</h5>
                        <p>Designation</p>
                        <div className="btn-slide mt-1">
                            <i className="fa fa-share"></i>
                            <span>
                                <Link to=""><i className="fab fa-facebook-f"></i></Link>
                                <Link to=""><i className="fab fa-twitter"></i></Link>
                                <Link to=""><i className="fab fa-instagram"></i></Link>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.9s">
                    <div className="team-item p-4">
                        <div className="overflow-hidden mb-4">
                            <img className="img-fluid" src="img/team-4.jpg" alt=""/>
                        </div>
                        <h5 className="mb-0">Full Name</h5>
                        <p>Designation</p>
                        <div className="btn-slide mt-1">
                            <i className="fa fa-share"></i>
                            <span>
                                <Link to=""><i className="fab fa-facebook-f"></i></Link>
                                <Link to=""><i className="fab fa-twitter"></i></Link>
                                <Link to=""><i className="fab fa-instagram"></i></Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    }
}