import React, {Component} from 'react';
import Header from '../header/Header.js';
import Featured from '../sections/Featured.js';
import Services from '../sections/Services.js';
import Works from '../sections/Works.js';
import Others from '../sections/Others.js';
import Footer from '../sections/Footer.js';

// <link rel="stylesheet" href="css/linearicons.css">
// <link rel="stylesheet" href="css/owl.carousel.css">
// <link rel="stylesheet" href="css/font-awesome.min.css">
// <link rel="stylesheet" href="css/nice-select.css">
// <link rel="stylesheet" href="css/magnific-popup.css">
// <link rel="stylesheet" href="css/bootstrap.css">
// <link rel="stylesheet" href="css/main.css">

import './../../css/bootstrap.css';
import './../../css/linearicons.css';
// import './../../css/owl.carousel.css';
// import './../../css/font-awesome.css';
import './../../css/nice-select.css';
import './../../css/magnific-popup.css';
import './../../css/main.css';

class Home extends Component {
   render() {
      return (
        <div>
          <div className="main-wrapper-first">
            <Header/>
            <Featured/>
            <Services/>
          </div>

          <div className="main-wrapper">
            <Works/>
          </div>

          <div className="main-wrapper">
            <Others/>

            <Footer/>
          </div>
        </div>
      );
   }
}

export default Home;
