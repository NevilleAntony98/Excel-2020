import { Component } from 'react';
import ContactCard from './ContactCard';
import './ContactMain.scss';

import Shehzin from '../../img/Shehzin.jpeg'
import Akhil from '../../img/Akhil.jpeg'
import Sharat from '../../img/Sharat.jpeg'
import Tharik from '../../img/Tharik.jpeg'
import Kuriakose from '../../img/KuriakoseEldho.png'
import Diya from '../../img/Diya.jpeg'
import Akshay from '../../img/AkshayB.jpg'
import Bhairavi from '../../img/bhairavi.jpeg'
import Kenneth from '../../img/Kenneth.jpg'
import Amal from '../../img/Amal.jpeg'
import Shazia from '../../img/Shazia.jpeg'
import Sreehari from '../../img/Sreehari.jpg'
import Sujith from '../../img/Sujith.jpeg'
import Ashwin from '../../img/Ashwin.jpeg'
import Anjali from '../../img/Anjali.jpeg'
import Anand from '../../img/AnandSanthosh.jpg'
import Labeeb from '../../img/Labeeb.jpeg'
import Pallavi from '../../img/pallavi.jpeg'
import Pooja from '../../img/Pooja.jpeg'
import Sebastian from '../../img/Sebastian.jpeg'
import Alfia from '../../img/Alfia.jpeg'

export default class Contacts extends Component {
    constructor(props){
        super(props)
        this.state={
            cardInfo:[
               {desig:"Chairman",name:"Amal D B",descp:"",email:"shehzincs@excelmec.org",phno:"+91 9847789993",img:Shehzin,insta:"https://ibeto.excelmec.org/",linkln:"http://linkedin.com/in/shehzincs"},
               {desig:"General Secretary",name:"Ameesh Iqbal",descp:"",email:"akhilabraham@excelmec.org",phno:"+91 9061128759",img:Akhil,insta:"https://ibeto.excelmec.org/",linkln:"http://linkedin.com/in/akhilabrahamt"},
               {desig:"Joint Secretary",name:"Jewel Joseph",descp:"",email:"sharat@excelmec.org",phno:"+91 9717950672",img:Sharat,insta:"https://ibeto.excelmec.org/",linkln:"https://linkedin.com/in/sharat-kurup-525aa3164"},
               {desig:"Event Manager",name:"Joel M J",descp:"",email:"sreehariac@excelmec.org",phno:"+91 8606224648",img:Sreehari,insta:"https://ibeto.excelmec.org/",linkln:"https://linkedin.com/in/sreehari-ac-576681183"},
               {desig:"Event Manager",name:"Sidharth Mohan",descp:"",email:"sujithk@excelmec.org",phno:"+91 8281515845",img:Sujith,insta:"https://ibeto.excelmec.org/",linkln:"https://linkedin.com/in/sujith-k-8a4a3217b"},
               {desig:"Marketing Manager ",name:"Aarish Ali",descp:"",email:"anjalisunil@excelmec.org",phno:"+91 8547746060",img:Anjali,insta:"https://ibeto.excelmec.org/",linkln:"https://linkedin.com/in/anjalisunil939423162"},
               {desig:"Marketing Manager(PC)",name:"Sneha Surendran",descp:"",email:"anandsanthosh@excelmec.org",phno:"+91 9562355862",img:Anand,insta:"https://ibeto.excelmec.org/",linkln:"https://linkedin.com/in/anand-santhosh-17a805163"},
               {desig:"Finance Manager",name:"Aswanth ",descp:"",email:"labeebali@excelmec.org",phno:"+91 8129924095",img:Labeeb,insta:"https://ibeto.excelmec.org/",linkln:"https://linkedin.com/in/labeeb-ali-2040a7163"},
               {desig:"General Tech Manager",name:"Menny Thankachan",descp:"",email:"tharikvn@excelmec.org",phno:"+91 9947497430",img:Tharik,insta:"https://ibeto.excelmec.org/",linkln:"https://linkedin.com/in/tharik-anwar-a475b3138"},
               {desig:"CS Tech Manager",name:"Ajesh Kumar",descp:"",email:"kuriakoseeldho@excelmec.org",phno:"+91 7558991555",img:Kuriakose,insta:"https://ibeto.excelmec.org/",linkln:"https://linkedin.com/in/kuriakose-eldho"},
               {desig:"Web Manager",name:"Nikhil Babu",descp:"",email:"pallavivg@excelmec.org",phno:"+91 9061495887",img:Pallavi,insta:"https://ibeto.excelmec.org/",linkln:"https://linkedin.com/in/pallavivgopi"},
               {desig:"Non-Tech Manager",name:"Aravind ",descp:"",email:"poojacs@excelmec.org",phno:"+91 9746463250",img:Pooja,insta:"https://ibeto.excelmec.org/",linkln:"http://linkedin.com/in/poojasekhar"},
               {desig:"Publicity Manager",name:"Lakshmi",descp:"",email:"sebastian@excelmec.org",phno:"+91 8547969187",img:Sebastian,insta:"https://ibeto.excelmec.org/",linkln:"https://linkedin.com/in/sebastian-t-sebastian-438031195"},
               {desig:"Media Relations Manager",name:"Boby Tharappel",descp:"",email:"kennethgodwin@excelmec.org",phno:"+91 9446975891",img:Kenneth,insta:"https://ibeto.excelmec.org/",linkln:"https://linkedin.com/in/kenneth-godwin-isidore/"},
               {desig:"Conferences Manager",name:"Gouri",descp:"",email:"alfiarehman@excelmec.org",phno:"+91 8301861220",img:Alfia,insta:"https://ibeto.excelmec.org/",linkln:" https://linkedin.com/in/alfia-rehman-b526ab162"},
               {desig:"Conferences Manager",name:"Vignesh Radhakrishnan",descp:"",email:"ashwinnair@excelmec.org",phno:"+91 9048362398",img:Ashwin,insta:"https://ibeto.excelmec.org/",linkln:"https://linkedin.com/in/ashwin-b-nair-5ba0b2152/"},
               {desig:"Social Initiatives Manager",name:"Alan Bince",descp:"",email:"bhairavi@excelmec.org",phno:"+91 9061344877",img:Bhairavi,insta:"https://ibeto.excelmec.org/",linkln:"https://linkedin.com/in/bhairavi-shah/"},
               {desig:"Talks Manager",name:"Rose Binoy",descp:"",email:"diyaliza@excelmec.org",phno:"+91 9048819638",img:Diya,insta:"https://ibeto.excelmec.org/",linkln:"http://linkedin.com/in/diya-liza-varghese-b92a70128"},
               {desig:"Online Media Relations",name:"Namitha Shajahan",descp:"",email:"shaziasalim@excelmec.org",phno:"+91 7034511782",img:Shazia,insta:"https://ibeto.excelmec.org/",linkln:"https://linkedin.com/in/shazia-salim"},
               {desig:"Design Manager",name:"Vysakh G Nair",descp:"",email:"amal@excelmec.org",phno:"+91 8921976941",img:Amal,insta:"https://ibeto.excelmec.org/",linkln:"https://linkedin.com/in/amal-k-ajay/"},
               {desig:"Content Manager",name:"Shemrin",descp:"",email:"akshayb@excelmec.org",phno:"+91 9895389963",img:Akshay,insta:"https://ibeto.excelmec.org/",linkln:"https://linkedin.com/in/akshay-balakrishnan-62371713b"},
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
