import { Component } from 'react';
import HomeAnimation from './HomeAnimation';
import './style.scss';
import litmus from '../../assets/png/litmus.png';
import townscript from '../../assets/png/townscript.png';
import eventoz from '../../assets/png/eventoz.png';
import thenewindianexp from '../../assets/png/thenewindianexp.png';
import college from '../../assets/png/college.png';
import meclogo from '../../assets/png/meclogo.png';
import excel2016 from '../../assets/png/excel2016.png';
import excel2017 from '../../assets/png/excel2017.png';
import excel2018 from '../../assets/png/excel2018.png';
import excel2019 from '../../assets/png/excel2019.png';
import excel2020withtext from '../../assets/png/excel2020withtext.png';

export default class Home extends Component {
    render() {
        return (
          <div>
            <HomeAnimation />
            <div className="home-register">
              Register
            </div>
            <div className="home-sponsers">
              <h1>OUR SPONSERS</h1>
              <div className="sponsers-grid">
                <div className="sponser-container">
                    <img src={litmus} />
                    <h1>CS-Tech Sponser</h1>
                </div>
                <div className="sponser-container">
                    <img src={townscript} />
                    <h1>Ticketing Partner</h1>
                </div>
                <div className="sponser-container">
                    <img src={eventoz} />
                    <h1>Media Partner</h1>
                </div>
                <div className="sponser-container">
                    <img src={thenewindianexp} />
                    <h1>Media Partner</h1>
                </div>
              </div>
            </div>
            <div className="home-legacy">
              <h1>LEGACY</h1>
              <div className="legacy-container">
                <img src={college} />
                <p>
                Excel, the nation’s second and South India’s first ever fest of its kind started in 2001 by the students of Govt. Model Engineering College with a motto, Inspire, Innovate, Engineer. Over the years, Excel has grown exponentially, consistently playing host to some of the most talented students, the most illustrious speakers and the most reputed companies. Now gearing towards its 19th edition, Excel continues to excite the participants with its wide array of technical and non-technical events and with a promise to live upto its motto. What sets Excel apart is the drive towards delivering excellence. The fest is renowned for its quality, dynamism and active participation.
                Excel 2018 incorporates a wide variety of technical, managerial and general events which includes both online and onsite competitions, workshops, summits, hackathons, exhibitions and so on.
                With the firm theme of ‘Bridging Realms’, Excel 2018 is all set to unite man and machine enabling college students to bring together ideation and creation prepping them for the industry.
                </p>
              </div>
              <div className="college-excel-logo">
                <img src={meclogo} />
                <img src={excel2020withtext} />
              </div>
              <div className="previous-sites">
                <img src={excel2019} />
                <img src={excel2018} />
                <img src={excel2017} />
                <img src={excel2016} />
              </div>
            </div>
          </div>
        )
    }
}