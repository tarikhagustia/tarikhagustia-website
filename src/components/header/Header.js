import React, { Component } from 'react';

class Header extends Component {
  constructor (props) {
       super(props);

       this.state = {
           videoURL: 'http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4'
       }
   }
   render() {
      return (
         <div>
           <header>
             <div className="container">
               <div className="header-wrap">
                 <div className="header-top d-flex justify-content-between align-items-center">
                   <div className="logo">
                     <a href="index.html"><img src="img/logo.png" alt="" /></a>
                   </div>
                   <div className="main-menubar d-flex align-items-center">
                     <nav className="hide">
                       <a href="/">Home</a>
                       <a href="http://blog.tarikhagustia.id">Blog</a>
                     </nav>
                     <div className="menu-bar"><span className="lnr lnr-menu"></span></div>
                   </div>
                 </div>
               </div>
             </div>
           </header>
           <div className="banner-area">
             <div className="videoBlock">
               <video loop autoPlay>
                 <source src={this.state.videoURL} type="video/mp4" />
                 <source src={this.state.videoURL} type="video/ogg" />
                 Your browser does not support the video tag.
               </video>               
             </div>
     				<div className="container">
     					<div className="row justify-content-center height align-items-center">
     						<div className="col-lg-8">
     							<div className="banner-content text-center">
     								<h1 className="text-white text-uppercase">Hi, I'm Tarikh</h1>
     								<a href="#" className="primary-btn d-inline-flex align-items-center"><span className="mr-10">Get In Touch</span><span className="lnr lnr-arrow-right"></span></a>
     							</div>
     						</div>
     					</div>
     				</div>
     			</div>
         </div>
      );
   }
}

export default Header;
