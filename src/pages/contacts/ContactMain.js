import { Component } from 'react';
import ContactCard from './ContactCard';
import './ContactMain.scss';

import Shehzin from '../../img/Shehzin.jpeg'
import Ameesh from '../../img/Akhil.jpeg'
import Sharat from '../../img/Sharat.jpeg'
import Menny from '../../img/Menny.jpg'
import Ajesh from '../../img/Ajesh.jpg'
import Rose from '../../img/Rose.jpg'
import Akshay from '../../img/AkshayB.jpg'
import Shemrin from '../../img/Shemrin.jpg'
import Alan from '../../img/Alan.jpg'
import Boby from '../../img/Boby.jpg'
import Vysakh from '../../img/Vysakh.jpg'
import Namitha from '../../img/Namitha.jpg'
import Joel from '../../img/Joel.jpg'
import Sujith from '../../img/Sujith.jpeg'
import VR from '../../img/VR.png'
import Anjali from '../../img/Anjali.jpeg'
import Sneha from '../../img/Sneha.jpg'
import Ashwanth from '../../img/Ashwanth.jpg'
import Nikhil from '../../img/Nikhil.jpg'
import Pooja from '../../img/Pooja.jpeg'
import Lakshmi from '../../img/Lakshmi.jpg'
import Gouri from '../../img/Gouri.jpg'

export default class Contacts extends Component {
    constructor(props){
        super(props)
        this.state={
            cardInfo:[
               {desig:"Chairman",name:"Amal D B",descp:"",email:"shehzincs@excelmec.org",phno:"+91 9847789993",img:Shehzin,insta:"https://ibeto.excelmec.org/",linkln:"http://linkedin.com/in/shehzincs"},
               {desig:"General Secretary",name:"Ameesh M Iqbal",descp:"",email:"akhilabraham@excelmec.org",phno:"+91 8330026937",img:Ameesh,insta:"https://ibeto.excelmec.org/",linkln:"http://linkedin.com/in/akhilabrahamt"},
               {desig:"Joint Secretary",name:"Jewel Joseph",descp:"",email:"ameesh.mec@gmail.com",phno:"+91 9717950672",img:Sharat,insta:"https://instagram.com/_sanro_/",linkln:"https://www.linkedin.com/in/ameesh-m-iqbal-8b253b1a1"},
               {desig:"Event Manager",name:"Joel Mathew Jose",descp:"",email:"joelmj.mec@gmail.com",phno:"919539861180",img:Joel,insta:"https://instagram.com/myself_joel_mj",linkln:"https://www.linkedin.com/in/joel-jose-7b2a54187"},
               {desig:"Event Manager",name:"Sidharth Mohan",descp:"",email:"sujithk@excelmec.org",phno:"+91 8281515845",img:Sujith,insta:"https://ibeto.excelmec.org/",linkln:"https://linkedin.com/in/sujith-k-8a4a3217b"},
               {desig:"Marketing Manager ",name:"Aarish Ali",descp:"",email:"anjalisunil@excelmec.org",phno:"+91 8547746060",img:Anjali,insta:"https://ibeto.excelmec.org/",linkln:"https://linkedin.com/in/anjalisunil939423162"},
               {desig:"Marketing Manager(PC)",name:"Sneha Surendran",descp:"",email:"snehasurendran.mec@gmail.com",phno:"+91 90727 39452",img:Sneha,insta:"https://instagram.com/ms_marar?igshid=un23qrtrfi8w",linkln:"https://www.linkedin.com/in/snehasurendran28"},
               {desig:"Finance Manager",name:"Aswanth N",descp:"",email:"ashwanth.mec@gmail.com ",phno:"+91 9495001606",img:Ashwanth,insta:"https://www.instagram.com/ashwanth.n/",linkln:"https://www.linkedin.com/in/ashwanth-n-8a0135181"},
               {desig:"General Tech Manager",name:"Menny Thankachan",descp:"",email:"mennyt11@gmail.com",phno:"+91 9446717230",img:Menny,insta:"https://www.instagram.com/_menny_t/",linkln:"https://www.linkedin.com/in/mennyt/"},
               {desig:"CS Tech Manager",name:"Ajesh Kumar S",descp:"",email:"ajeshkumar.mec@gmail.com",phno:"+91 919074249658",img:Ajesh,insta:"https://www.instagram.com/ajeshkumars.35/",linkln:"https://www.linkedin.com/in/ajesh-kumar-s/"},
               {desig:"Web Manager",name:"Nikhil Babu",descp:"",email:"nikhilbabu.mec@gmail.com",phno:"+91 8113805051",img:Nikhil,insta:"https://www.instagram.com/nikhilbabu99/",linkln:"https://www.linkedin.com/in/nikhil713/"},
               {desig:"Non-Tech Manager",name:"Aravind ",descp:"",email:"poojacs@excelmec.org",phno:"+91 9746463250",img:Pooja,insta:"https://ibeto.excelmec.org/",linkln:"http://linkedin.com/in/poojasekhar"},
               {desig:"Publicity Manager",name:"Lakshmi Suresh",descp:"",email:"lakshmisuresh35.mec@gmail.com ",phno:"+91 7907333793",img:Lakshmi,insta:"https://instagram.com/_the_le_mi?igshid=uapapgyjg18o",linkln:"https://www.linkedin.com/in/lakshmi-suresh-a347941a4"},
               {desig:"Media Relations Manager",name:"Boby Sebastian Tharappel",descp:"",email:"bobytharappel.mec@gmail.com",phno:"+91 9961398170",img:Boby,insta:"https://www.instagram.com/b.tharappel/",linkln:"https://www.linkedin.com/in/boby-tharappel-65378818b"},
               {desig:"Conferences Manager",name:"Gouri S Nair ",descp:"",email:"gourisunilnair.mec@gmail.com",phno:"+91 9496588536",img:Gouri,insta:"https://www.instagram.com/noseinabook11?r=nametag",linkln:" https://www.linkedin.com/in/gouri-s-nair-64238b187 "},
               {desig:"Conferences Manager",name:"Vighnesh Radhakrishnan",descp:"",email:"vighneshradhakrishnan.mec@gmail.com",phno:"+91 8606188766",img:VR,insta:"https://www.instagram.com/vighnesh_radhakrishnan/",linkln:"https://www.linkedin.com/in/vighnesh-radhakrishnan-b73649191"},
               {desig:"Social Initiatives Manager",name:"Alan Bince",descp:"",email:"alanbince.mec@gmail.com",phno:"+91 8921417257",img:Alan,insta:"https://www.instagram.com/bince.jr/",linkln:"https://www.linkedin.com/in/alan-bince-jacob-294312158/"},
               {desig:"Talks Manager",name:"Rose Binoy Mechery ",descp:"",email:"rosebinoymechery.mec@gmail.com",phno:"+91 8078201072",img:Rose,insta:"https://instagram.com/r._.o._.se?igshid=1v2mkyxe8w7mm",linkln:"https://www.linkedin.com/in/rose-binoy-mechery-215582160"},
               {desig:"Online Media Relations",name:"Namitha Shajan",descp:"",email:"namithashajan.mec@gmail.com",phno:"+91 7902420864",img:Namitha,insta:"https://instagram.com/_nami.tha_?igshid=889m9x0bkorm",linkln:"https://www.linkedin.com/in/namitha-shajan-1008881a1"},
               {desig:"Design Manager",name:"Vysakh G Nair",descp:"",email:"vysakhgnair.mec@gmail.com",phno:"+91 9074254231",img:Vysakh,insta:"https://www.instagram.com/vysakhgnair17/",linkln:"https://www.linkedin.com/in/vysakhgnair/"},
               {desig:"Content Manager",name:"Shemrin",descp:"",email:"shemrin.mec@gmail.com",phno:"+91 8893262232",img:Shemrin,insta:"https://www.instagram.com/shemrin/?hl=en",linkln:"https://www.linkedin.com/in/shemrin-1342ab144/"},
               {desig:"Ambience Manager",name:"Aswin Prasanth",descp:"",email:"akshayb@excelmec.org",phno:"+91 9895389963",img:Akshay,insta:"https://ibeto.excelmec.org/",linkln:"https://linkedin.com/in/akshay-balakrishnan-62371713b"}
            ]
        }
    }
    componentDidMount(){
        window.scrollTo(0, 0)
    }
    render(){
        var grid = []
        for(var i=0 ; i<this.state.cardInfo.length ; i++){
			var gridItem = <ContactCard key={i} details={this.state.cardInfo[i]} />
               grid.push(gridItem)
        }
    return(
        <div className="contacts">
            <div>
            <div className="container">
               {grid}
            </div>
            </div>
        </div>
    )
    }
}
