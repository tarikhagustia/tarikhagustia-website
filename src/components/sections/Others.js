import React, { Component } from 'react';

class Others extends Component {
   render() {
      return (
         <div>
           <section className="story-area">
     				<div className="container">
     					<div className="row align-items-center">
     						<div className="col-lg-3">
     							<div className="story-title">
     								<h3 className="text-white">Our Untold Story</h3>
     								<span className="text-uppercase text-white">Re-imagining the way</span>
     							</div>
     						</div>
     						<div className="col-lg-6">
     							<div className="story-box">
     								<h6 className="text-uppercase">From the part of beginning</h6>
     								<p>Usage of the Internet is becoming more common due to rapid advancement of technology and the power of globalization. Societies are becoming more inter-connected. Thoughts from different</p>
     								<a href="#" className="primary-btn hover d-inline-flex align-items-center"><span className="mr-10">Get Started</span><span className="lnr lnr-arrow-right"></span></a>
     							</div>
     						</div>
     					</div>
     				</div>
     			</section>

          <section className="subscription-area">
    				<div className="container">
    					<div className="row justify-content-center">
    						<div className="col-lg-8">
    							<div className="section-title text-center">
    								<h3>Subscribe for our Newsletter</h3>
    								<span className="text-uppercase">Re-imagining the way</span>
    							</div>
    						</div>
    					</div>
    					<div className="row justify-content-center">
    						<div className="col-lg-6">
    							<div id="mc_embed_signup">
    								<form target="_blank" noValidate action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01" method="get" className="subscription relative">
    									<input type="email" name="EMAIL" placeholder="Email address" onFocus="this.placeholder = ''" onBlur="this.placeholder = 'Email address'" required />
    									<div style={{position : 'absolute', 'left' : '-5000px'}}>
    										<input type="text" name="b_36c4fd991d266f23781ded980_aefe40901a" tabIndex="-1" value="" />
    									</div>
    									<button className="primary-btn hover d-inline-flex align-items-center"><span className="mr-10">Get Started</span><span className="lnr lnr-arrow-right"></span></button>
    									<div className="info"></div>
    								</form>
    							</div>
    						</div>
    					</div>
    				</div>
    			</section>

          <section className="footer-widget-area">
    				<div className="container">
    					<div className="row">
    						<div className="col-md-4">
    							<div className="single-widget d-flex flex-wrap justify-content-between">
    								<div className="icon d-flex align-items-center justify-content-center">
    									<span className="lnr lnr-pushpin"></span>
    								</div>
    								<div className="desc">
    									<h6 className="title text-uppercase">Address</h6>
    									<p>56/8, panthapath, west <br/> dhanmondi, kalabagan, <br/>Dhaka - 1205</p>
    								</div>
    							</div>
    						</div>
    						<div className="col-md-4">
    							<div className="single-widget d-flex flex-wrap justify-content-between">
    								<div className="icon d-flex align-items-center justify-content-center">
    									<span className="lnr lnr-earth"></span>
    								</div>
    								<div className="desc">
    									<h6 className="title text-uppercase">Email Address</h6>
    									<div className="contact">
    										<a href="mailto:info@dataarc.com">info@dataarc.com</a> <br/>
    										<a href="mailto:support@dataarc.com">support@dataarc.com</a>
    									</div>
    								</div>
    							</div>
    						</div>
    						<div className="col-md-4">
    							<div className="single-widget d-flex flex-wrap justify-content-between">
    								<div className="icon d-flex align-items-center justify-content-center">
    									<span className="lnr lnr-phone"></span>
    								</div>
    								<div className="desc">
    									<h6 className="title text-uppercase">Phone Number</h6>
    									<div className="contact">
    										<a href="tel:1545">012 4562 982 3612</a> <br/>
    										<a href="tel:54512">012 6321 956 4587</a>
    									</div>
    								</div>
    							</div>
    						</div>
    					</div>
    				</div>
    			</section>
         </div>
      );
   }
}

export default Others;
