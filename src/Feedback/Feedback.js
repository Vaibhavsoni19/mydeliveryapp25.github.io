import { Component } from "react";

export default class Feedback extends Component {
    render() {
        return <div>
            <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="text-center">
                        <h6 className="text-danger text-uppercase">Feedback Form</h6>
                        <h1 className=" text-danger mb-0">Our Clients Say!</h1>
                    </div>
                    <div className="container">
  <form>
  <div className="form-group">
      <label for="pwd">Name</label>
      <input type="text" className="form-control" id="name" placeholder="Enter Name" name="name" required/>
    </div>
    <div className="form-group">
      <label for="email">Email</label>
      <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"required/>
    </div>
    <br/><br/>
    <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">user feedback</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"placeholder="message"required/>
</div>
    {/* <div className="form-group">
      <label for="pwd">Message</label>
      <input type="text" className="form-control" id="mess" placeholder="Feedback" name="mess"/>
    </div> */}
    
    <button type="submit"className="btn btn-danger mt-3 ">Submit</button>
  </form>
</div>

                    {/* <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                        <div className="testimonial-item p-4 my-5">
                            <i className="fa fa-quote-right fa-3x text-light position-absolute top-0 end-0 mt-n3 me-4"></i>
                            <div className="d-flex align-items-end mb-4">
                                <img className="img-fluid flex-shrink-0" src="img/testimonial-1.jpg" style={{ width: '80px', height: '80px' }} />
                                <div className="ms-4">
                                    <h5 className="mb-1">Client Name</h5>
                                    <p className="m-0">Profession</p>
                                </div>
                            </div>
                            <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                        </div>
                        <div className="testimonial-item p-4 my-5">
                            <i className="fa fa-quote-right fa-3x text-light position-absolute top-0 end-0 mt-n3 me-4"></i>
                            <div className="d-flex align-items-end mb-4">
                                <img className="img-fluid flex-shrink-0" src="img/testimonial-2.jpg" style={{ width: '80px', height: '80px' }} />
                                <div className="ms-4">
                                    <h5 className="mb-1">Client Name</h5>
                                    <p className="m-0">Profession</p>
                                </div>
                            </div>
                            <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                        </div>
                        <div className="testimonial-item p-4 my-5">
                            <i className="fa fa-quote-right fa-3x text-light position-absolute top-0 end-0 mt-n3 me-4"></i>
                            <div className="d-flex align-items-end mb-4">
                                <img className="img-fluid flex-shrink-0" src="img/testimonial-3.jpg" style={{ width: '80px', height: '80px' }} />
                                <div className="ms-4">
                                    <h5 className="mb-1">Client Name</h5>
                                    <p className="m-0">Profession</p>
                                </div>
                            </div>
                            <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                        </div>
                        <div className="testimonial-item p-4 my-5">
                            <i className="fa fa-quote-right fa-3x text-light position-absolute top-0 end-0 mt-n3 me-4"></i>
                            <div className="d-flex align-items-end mb-4">
                                <img className="img-fluid flex-shrink-0" src="img/testimonial-4.jpg" style={{ width: '80px', height: '80px' }} />
                                <div className="ms-4">
                                    <h5 className="mb-1">Client Name</h5>
                                    <p className="m-0">Profession</p>
                                </div>
                            </div>
                            <p className="mb-0">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    }
}