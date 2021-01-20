import { Component } from 'react';
import HomeAnimation from './HomeAnimation';
import './style.scss';
// import litmus from '../../assets/png/litmus.png';
// import townscript from '../../assets/png/townscript.png';
// import eventoz from '../../assets/png/eventoz.png';
// import thenewindianexp from '../../assets/png/thenewindianexp.png';
import college from '../../assets/png/college.png';
import meclogo from '../../assets/png/meclogo.png';
import excel2016 from '../../assets/png/excel2016.png';
import excel2017 from '../../assets/png/excel2017.png';
import excel2018 from '../../assets/png/excel2018.png';
import excel2019 from '../../assets/png/excel2019.png';
// import excel2020withtext from '../../assets/png/excel2020withtext.png';
import media from '../../assets/png/24 NEWS.png';
import calendar from '../../assets/svg/calendar.svg';
import location from '../../assets/svg/pin.svg';
export default class Home extends Component {
    render() {
        return (
          <div className="home-body">
          <div className="home-sidebar-background-hide"></div>
            <HomeAnimation />
          {/*  <div className="home-register">
              Register
            </div>
            <div className="home-sponsers">
              <h1>OUR SPONSERS</h1>
              <div className="sponsers-grid">
                <div className="sponser-container">
                    <img src={litmus} alt=""/>
                    <h1>CS-Tech Sponser</h1>
                </div>
                <div className="sponser-container">
                    <img src={townscript} alt=""/>
                    <h1>Ticketing Partner</h1>
                </div>
                <div className="sponser-container">
                    <img src={eventoz} alt=""/>
                    <h1>Media Partner</h1>
                </div>
                <div className="sponser-container">
                    <img src={thenewindianexp} alt=""/>
                    <h1>Media Partner</h1>
                </div>
              </div>
            </div>
            <div className="home-sections">
            
            </div>
        */}
            <div className="home-legacy">
              <div className="mobile-dates">
                <div><span><img className="tagline-icon" alt="calender" src={calendar}></img></span>Jan 29, 30, 31
                </div>
                <div><span><img className="tagline-icon" alt="pin" src={location}></img></span>Virtual
                </div>
              </div>
              <h1>LEGACY</h1>
              <div className="legacy-container">
                <img src={college} alt=""/>
                <p>
                Excel, the nation’s second and South India’s first ever fest of its kind, was started in 2001 by the students of Govt. Model Engineering College. The aim was simple: to inspire, innovate, engineer. Over the years, Excel has grown exponentially, consistently playing host to some of the most talented students, the most illustrious speakers and the most reputed companies. Now gearing towards the landmark 21st edition, Excel continues to excite the participants with its wide array of technical and non-technical events and with a promise to live up to its motto.<span className="hide-mobile">&nbsp;What sets Excel apart is the drive towards delivering excellence in all aspects. Excel is renowned for the dynamic nature of events and active participation amongst the student community. Excel 2020 incorporates a wide variety of technical, managerial and general events which includes competitions, workshops, summits, hackathons, exhibitions and so on.</span> 
                </p>
              </div>
              <div className="college-excel-logo">
                <a href="http://mec.ac.in/" target="_blank" rel="noreferrer"><img src={meclogo} alt=""/></a>
                <a href="https://www.twentyfournews.com/" target="_blank" rel="noreferrer" className="media"><img src={media} alt="" /></a>
              </div>
              <div className="previous-sites">
                <a href="https://2019.excelmec.org/#/" target="_blank" rel="noreferrer"><img src={excel2019} alt=""/></a>
                <a href="https://2018.excelmec.org/#/" target="_blank" rel="noreferrer"><img src={excel2018} className="excel-2018" alt=""/></a>
                <a href="https://2017.excelmec.org/#/" target="_blank" rel="noreferrer"><img src={excel2017} alt=""/></a>
                <a href="https://2016.excelmec.org/#/home/" target="_blank" rel="noreferrer"><img src={excel2016} className="excel-2016" alt=""/></a>
              </div>
              <div className="previous-sites social">
                <a href="https://www.facebook.com/excelmec/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path className="social-media facebook" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
                </a>
                <a href="https://www.instagram.com/excelmec/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path className="social-media instagram" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                </a>
                <a href="https://www.youtube.com/excelmec">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path className="social-media youtube" d="M490.24,113.92c-13.888-24.704-28.96-29.248-59.648-30.976C399.936,80.864,322.848,80,256.064,80
                      c-66.912,0-144.032,0.864-174.656,2.912c-30.624,1.76-45.728,6.272-59.744,31.008C7.36,138.592,0,181.088,0,255.904
                      C0,255.968,0,256,0,256c0,0.064,0,0.096,0,0.096v0.064c0,74.496,7.36,117.312,21.664,141.728
                      c14.016,24.704,29.088,29.184,59.712,31.264C112.032,430.944,189.152,432,256.064,432c66.784,0,143.872-1.056,174.56-2.816
                      c30.688-2.08,45.76-6.56,59.648-31.264C504.704,373.504,512,330.688,512,256.192c0,0,0-0.096,0-0.16c0,0,0-0.064,0-0.096
                      C512,181.088,504.704,138.592,490.24,113.92z M192,352V160l160,96L192,352z"/>
                </svg>
                </a>
                <a href="https://twitter.com/excelmec/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path className="social-media twitter" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
                </a>
                <a href="https://www.linkedin.com/company/excelmec/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path className="social-media linkedin" d="M459,0H51C22.95,0,0,22.95,0,51v408c0,28.05,22.95,51,51,51h408c28.05,0,51-22.95,51-51V51C510,22.95,487.05,0,459,0z
                   M153,433.5H76.5V204H153V433.5z M114.75,160.65c-25.5,0-45.9-20.4-45.9-45.9s20.4-45.9,45.9-45.9s45.9,20.4,45.9,45.9
                  S140.25,160.65,114.75,160.65z M433.5,433.5H357V298.35c0-20.399-17.85-38.25-38.25-38.25s-38.25,17.851-38.25,38.25V433.5H204
                  V204h76.5v30.6c12.75-20.4,40.8-35.7,63.75-35.7c48.45,0,89.25,40.8,89.25,89.25V433.5z"/>
            </svg>
                </a>
            </div>
            </div>
          </div>
        )
    }
}