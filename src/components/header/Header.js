import React, { Component } from 'react';

class Header extends Component {
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
                       <a href="index.html">Home</a>
                       <a href="generic.html">Generic</a>
                       <a href="elements.html">Elements</a>
                     </nav>
                     <div className="menu-bar"><span className="lnr lnr-menu"></span></div>
                   </div>
                 </div>
               </div>
             </div>
           </header>
           <div className="banner-area">
     				<div className="container">
     					<div className="row justify-content-center height align-items-center">
     						<div className="col-lg-8">
     							<div className="banner-content text-center">
     								<span className="text-white top text-uppercase">Re-imagining the way</span>
     								<h1 className="text-white text-uppercase">We grow money, Guaranteed</h1>
     								<a href="#" className="primary-btn d-inline-flex align-items-center"><span className="mr-10">Get Started</span><span className="lnr lnr-arrow-right"></span></a>
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
