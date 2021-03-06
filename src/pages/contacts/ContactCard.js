import React, {Component} from 'react';
import './ContactCard.scss';
import phone from '../../assets/png/phone.png';
import email from '../../assets/png/email.png';
import insta from '../../assets/png/insta.png';
import linkedin from '../../assets/png/linkedin.png';

export default class ContactCard extends Component{

    render(){
        return(
            <div>
            {/* <div style={{zIndex:3}} className={styles["card"]}>
                <img src={this.props.details.img} alt=""/>
                <div className={styles["contact-overlay"]}>
                    <div className={styles["card-info"]}>
                    <div>{this.props.details.descp}</div>
                    <div><img  alt="" /> <a href={"mailto:" + this.props.details.email}>{this.props.details.email}</a><br/>
                    <img  alt="" /> <a href={"tel:"+this.props.details.phno}>{this.props.details.phno}</a>  <br />
                    <a target="_blank"  href={this.props.details.linkln}><img  className={styles["contact-social"]} alt="" /></a><br/>
                    </div>
                    </div>
                </div>
            </div>
            <div className={styles["below-card"]}>
            <div className={styles["name"]}>{this.props.details.name}</div>
            <div className={styles["desig"]}>{this.props.details.desig}</div>
            </div> */}
            <div className="contact-card backdrop-filter-blur">
                    <div className="contact-card-img">
                        <img src={this.props.details.img} alt="" />
                    </div>
                    <div className="contact-card-body">
                        <h3 className="contact-name">{this.props.details.name}</h3>
                        <span className="contact-design">{this.props.details.desig}</span>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        <ul className="contact-card-links">
                            <li>
                                <a href={"tel:"+this.props.details.phno} target="_blank" rel="noopener noreferrer" aria-label="facebook social link" className="icon icon-xs icon-facebook mr-3">
                                <img src={phone} alt="phone"/>
                                </a>
                            </li>
                            <li>
                                <a href={"mailto:" + this.props.details.email} target="_blank" rel="noopener noreferrer" aria-label="twitter social link" className="icon icon-xs icon-twitter mr-3">
                                <img src={email} alt="email"/>
                                </a>
                            </li>
                            <li>
                                <a href={this.props.details.insta} target="_blank" rel="noopener noreferrer" aria-label="slack social link" className="icon icon-xs icon-slack mr-3">
                                <img src={insta} alt="insta"/>
                                </a>
                            </li>
                            <li>
                                <a href={this.props.details.linkln} target="_blank" rel="noopener noreferrer" aria-label="dribbble social link" className="icon icon-xs icon-dribbble mr-3">
                                <img src={linkedin} alt="linkedin"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

/*
                <div className={styles["gradient-overlay"]}>
                    <div className={styles["card-info"]}>
                        <div className={styles["descp"]}>
                            {this.props.details.descp} <br />
                        </div>
                        {this.props.details.name}  <br />
                        <div className={styles["contact-info"]}>
                        <img  alt='' src={require('../../img/message-closed-envelope.png')}/> <a href={"mailto:" + this.props.details.email}>{this.props.details.email}</a> <br />
                        <img  alt='' src={require('../../img/phone-receiver.png')}/> {this.props.details.phno}  <br />
                        </div>
                       { <div className={styles["bottom-right"]}>
                            <img  alt='' src={require('../../img/github-logo.png')}/>
                            &nbsp;
                            <img  alt='' src={require('../../img/linkedin-logo.png')}/>
                        </div>}
                        </div>
                        </div>
*/