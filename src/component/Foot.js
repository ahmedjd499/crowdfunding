import { Component } from "react";
import { SocialIcon } from 'react-social-icons';
import { CiMail} from  'react-icons/ci' ;
import { BsTelephone} from  'react-icons/bs' ;
import { GiRotaryPhone} from  'react-icons/gi' ;


class Foot extends Component{
    render(){
        return <footer className="footer">
                    <div className="container">
                        <div className="row">    
                            <div className="col-7 col-sm-5">
                                <h5>Our Address</h5>
                                <address>
                                    Monastir , Tunisia<br/>
                                    <a href="call:+216 99 999 999"><BsTelephone />call</a><br/>
                                    <a href="call:+216 78 999 999"><GiRotaryPhone />Fix</a><br/>
                                    <a href="mailto:confusion@food.net"><CiMail />Fundastic@mail.net</a>
                                </address>
                            </div>
                            <div className="col-12 col-sm-7 align-self-center">
                                <div className="text-center">
                                    <SocialIcon className="SocialIcon" url="mailto:confusion@food.net"style={{ height: 40, width: 40 }} />
                                    <SocialIcon className="SocialIcon" url="https://www.facebook.com"style={{ height: 40, width: 40 }} />
                                    <SocialIcon className="SocialIcon"url="https://www.instagram.com"style={{ height: 40, width: 40 }} />
                                    <SocialIcon className="SocialIcon" url="https://twitter.com"style={{ height: 40, width: 40 }} />
                                    <SocialIcon className="SocialIcon" url="https://youtube.com"style={{ height: 40, width: 40 }} />
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">             
                            <div className="col-auto">
                                    <p>© Copyright 2022 Fundastic</p>
                            </div>
                        </div>
                    </div>

                 </footer>
    }
}

export default Foot