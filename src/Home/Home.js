import React from "react";
import { Link } from "react-router-dom";

export default class Home extends React.Component {
    render() {
        return <div>
                <img src="img/carousel-1.jpg" style={{marginLeft:"700px", marginTop:"70px"}} alt="not found image"height={400}width={600}/>
             <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(6, 3, 21, .5)' }}>
             <div className="container">
             <div className="row justify-content-start">
            <div className="col-10 col-lg-8">
             <h4 className="text-danger text-uppercase mb-3 animated slideInDown">Delivery hai? </h4>
             <h4 className="text-danger text-uppercase mb-3 animated slideInDown">#HoJayega! </h4>
            <h1 className="display-3 text-white animated slideInDown mb-4">#1 Place For Your <span className="text-primary">MyDeliverys</span> Solution</h1>
            <p className="fs-5 fw-medium text-white mb-4 pb-2">Big or small...We can handle it all .</p>
             {/* <Link to="" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Read More</Link>
              <Link to="" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Free Quote</Link> */}
              {/* <Link to="/Footer"></Link> */}
               </div>
             </div>
           </div>
       </div>
    </div>
                                
    }

}