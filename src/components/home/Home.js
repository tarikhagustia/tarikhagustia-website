import React, {Component} from 'react';
import Header from '../header/Header.js';
import Featured from '../sections/Featured.js';
import Services from '../sections/Services.js';
import Works from '../sections/Works.js';
import Others from '../sections/Others.js';
import Footer from '../sections/Footer.js';


import './../../scss/main.scss';

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
