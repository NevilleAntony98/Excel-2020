import { Component } from 'react';
import ContactCard from './ContactCard';
import './ContactMain.scss';

import Amal from '../../img/amal.jpg'
import Ameesh from '../../img/Ameesh.jpg'
import Jewel from '../../img/jewel.jpg'
import Menny from '../../img/Menny.jpg'
import Ajesh from '../../img/Ajesh.jpg'
import Rose from '../../img/Rose.jpg'
import Shemrin from '../../img/Shemrin.jpg'
import Alan from '../../img/Alan.jpg'
import Boby from '../../img/Boby.jpg'
import Vysakh from '../../img/Vysakh.jpg'
import Namitha from '../../img/Namitha.jpg'
import Joel from '../../img/Joel.jpg'
import Sidarth from '../../img/Sidarth.jpg'
import VR from '../../img/VR.png'
import Aarish from '../../img/aarish.jpg'
import Sneha from '../../img/Sneha.jpg'
import Ashwanth from '../../img/Ashwanth.jpg'
import Nikhil from '../../img/Nikhil.jpg'
import Aravind from '../../img/Aravind.png'
import Lakshmi from '../../img/Lakshmi.jpg'
import Gouri from '../../img/Gouri.jpg'
import Aswin from '../../img/Aswin.jpg'

export default class Contacts extends Component {
    constructor(props){
        super(props)
        this.state={
            cardInfo:[
               {desig:"Chairman",name:"Amal D B",descp:"",email:"amaldb.mec@gmail.com",phno:"+91 94962 52335",img:Amal,insta:"https://www.instagram.com/__.d.b.___/",linkln:"https://www.linkedin.com/in/amal-d-b-038372158/?originalSubdomain=in"},
               {desig:"General Secretary",name:"Ameesh M Iqbal",descp:"",email:"ameesh.mec@gmail.com",phno:"+91 8330026937",img:Ameesh,insta:"https://instagram.com/_sanro_/",linkln:"https://www.linkedin.com/in/ameesh-m-iqbal-8b253b1a1"},
               {desig:"Joint Secretary",name:"Jewel Joseph",descp:"",email:"jewel.mec@gmail.com",phno:"+91 98464 99199",img:Jewel,insta:"https://www.instagram.com/je101el/",linkln:"https://www.linkedin.com/in/jewel-joseph-897182173/"},
               {desig:"Event Manager",name:"Joel Mathew Jose",descp:"",email:"joelmj.mec@gmail.com",phno:"+91 919539861180",img:Joel,insta:"https://instagram.com/myself_joel_mj",linkln:"https://www.linkedin.com/in/joel-jose-7b2a54187"},
               {desig:"Event Manager",name:"Sidharth Mohan",descp:"",email:"sidharthmohan.mec@gmail.com",phno:"+91 99613 31432",img:Sidarth,insta:"https://www.instagram.com/i_sidharth_mohan/",linkln:"https://www.linkedin.com/in/sidharth-mohan-02527b1a6/"},
               {desig:"Marketing Manager ",name:"Aarish Ali",descp:"",email:"aarishali.mec@gmail.com",phno:"+91 99472 49291",img:Aarish,insta:"https://www.instagram.com/aarishali_/",linkln:"https://www.linkedin.com/in/aarish-ali-677bb617a/"},
               {desig:"Marketing Manager(PC)",name:"Sneha Surendran",descp:"",email:"snehasurendran.mec@gmail.com",phno:"+91 90727 39452",img:Sneha,insta:"https://instagram.com/ms_marar?igshid=un23qrtrfi8w",linkln:"https://www.linkedin.com/in/snehasurendran28"},
               {desig:"Finance Manager",name:"Aswanth N",descp:"",email:"ashwanth.mec@gmail.com ",phno:"+91 9495001606",img:Ashwanth,insta:"https://www.instagram.com/ashwanth.n/",linkln:"https://www.linkedin.com/in/ashwanth-n-8a0135181"},
               {desig:"General Tech Manager",name:"Menny Thankachan",descp:"",email:"mennyt11@gmail.com",phno:"+91 9446717230",img:Menny,insta:"https://www.instagram.com/_menny_t/",linkln:"https://www.linkedin.com/in/mennyt/"},
               {desig:"CS Tech Manager",name:"Ajesh Kumar S",descp:"",email:"ajeshkumar.mec@gmail.com",phno:"+91 919074249658",img:Ajesh,insta:"https://www.instagram.com/ajeshkumars.35/",linkln:"https://www.linkedin.com/in/ajesh-kumar-s/"},
               {desig:"Web Manager",name:"Nikhil Babu",descp:"",email:"nikhilbabu.mec@gmail.com",phno:"+91 8113805051",img:Nikhil,insta:"https://www.instagram.com/nikhilbabu99/",linkln:"https://www.linkedin.com/in/nikhil713/"},
               {desig:"Non-Tech Manager",name:"Aravind Ks",descp:"",email:"aravindks98.mec@gmail.com",phno:"+91 82814 08962",img:Aravind,insta:"https://www.instagram.com/aravind_ks_/",linkln:"https://www.linkedin.com/in/aravind-ks-0337381a5/?originalSubdomain=in"},
               {desig:"Publicity Manager",name:"Lakshmi Suresh",descp:"",email:"lakshmisuresh35.mec@gmail.com ",phno:"+91 7907333793",img:Lakshmi,insta:"https://instagram.com/_the_le_mi?igshid=uapapgyjg18o",linkln:"https://www.linkedin.com/in/lakshmi-suresh-a347941a4"},
               {desig:"Media Relations Manager",name:"Boby Sebastian Tharappel",descp:"",email:"bobytharappel.mec@gmail.com",phno:"+91 9961398170",img:Boby,insta:"https://www.instagram.com/b.tharappel/",linkln:"https://www.linkedin.com/in/boby-tharappel-65378818b"},
               {desig:"Conferences Manager",name:"Gouri S Nair ",descp:"",email:"gourisunilnair.mec@gmail.com",phno:"+91 9496588536",img:Gouri,insta:"https://www.instagram.com/noseinabook11?r=nametag",linkln:" https://www.linkedin.com/in/gouri-s-nair-64238b187 "},
               {desig:"Conferences Manager",name:"Vighnesh Radhakrishnan",descp:"",email:"vighneshradhakrishnan.mec@gmail.com",phno:"+91 8606188766",img:VR,insta:"https://www.instagram.com/vighnesh_radhakrishnan/",linkln:"https://www.linkedin.com/in/vighnesh-radhakrishnan-b73649191"},
               {desig:"Social Initiatives Manager",name:"Alan Bince",descp:"",email:"alanbince.mec@gmail.com",phno:"+91 8921417257",img:Alan,insta:"https://www.instagram.com/bince.jr/",linkln:"https://www.linkedin.com/in/alan-bince-jacob-294312158/"},
               {desig:"Talks Manager",name:"Rose Binoy Mechery ",descp:"",email:"rosebinoymechery.mec@gmail.com",phno:"+91 8078201072",img:Rose,insta:"https://instagram.com/r._.o._.se?igshid=1v2mkyxe8w7mm",linkln:"https://www.linkedin.com/in/rose-binoy-mechery-215582160"},
               {desig:"Online Media Relations",name:"Namitha Shajan",descp:"",email:"namithashajan.mec@gmail.com",phno:"+91 7902420864",img:Namitha,insta:"https://instagram.com/_nami.tha_?igshid=889m9x0bkorm",linkln:"https://www.linkedin.com/in/namitha-shajan-1008881a1"},
               {desig:"Design Manager",name:"Vysakh G Nair",descp:"",email:"vysakhgnair.mec@gmail.com",phno:"+91 9074254231",img:Vysakh,insta:"https://www.instagram.com/vysakhgnair17/",linkln:"https://www.linkedin.com/in/vysakhgnair/"},
               {desig:"Content Manager",name:"Shemrin",descp:"",email:"shemrin.mec@gmail.com",phno:"+91 8893262232",img:Shemrin,insta:"https://www.instagram.com/shemrin/?hl=en",linkln:"https://www.linkedin.com/in/shemrin-1342ab144/"},
               {desig:"Ambience Manager",name:"Aswin Prasanth",descp:"",email:"",phno:"+91 80868 27102",img:Aswin,insta:"https://www.instagram.com/aswin_prasanth/",linkln:"https://www.linkedin.com/in/aswin-prasanth-223808156/"}
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
