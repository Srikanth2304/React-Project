import React from 'react';
import './style/Main.css';

// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
    return <div>
        <footer id="footer" className=" d-flex-column text-center pt-3" style={{backgroundColor:'rgb(77, 77, 77)',margin:'0',padding:'0',overflow:'hidden',overflowY:'hidden',maxWidth:'100%'}} >
            <div className="text-center">
                <h4 className="mb-2">You can find us at</h4>
                <ul className="list-unstyled list-inline">
                    <li className="list-inline-item">
                        <a href="#" className="sbtn btn-large mx-1" title="Facebook">
                            <FontAwesomeIcon icon="fa-brands fa-facebook" size="2xl" style={{color: "#ffffff",}} />
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#" className="sbtn btn-large mx-1" title="Linkedin">
                            <FontAwesomeIcon icon="fa-brands fa-linkedin" size="2xl" style={{color: "#ffffff",}} />
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#" className="sbtn btn-large mx-1" title="Twitter">
                            <FontAwesomeIcon icon="fa-brands fa-twitter" size="2xl" style={{color: "#ffffff",}}/>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="#" className="sbtn btn-large mx-1" title="Youtube">
                            <FontAwesomeIcon icon="fa-brands fa-youtube" size="2xl" style={{color: "#ffffff",}}/>
                        </a>
                    </li>
                </ul>
            </div>
            <hr  />
            {/*
            <div className="container text-left text-md-center">
                <div className="row">
                    <div className="col-md-3 mx-auto shfooter">
                        <h5 className="my-2 font-weight-bold d-none d-md-block">Product</h5>
                        <div className="d-md-none title" dataTarget="#Product" dataToggle="collapse">
                            <div className="mt-3 font-weight-bold">Product
                                <div className="float-right navbar-toggler">
                                    <i className="fas fa-angle-down"></i>
                                    <i className="fas fa-angle-up"></i>
                                </div>
                            </div>
                        </div>
                        <ul className="list-unstyled collapse" id="Product">
                            <li><a href="#" style={{textDecoration:'none'}} >Create Websites</a></li>
                            <li><a href="#" style={{textDecoration:'none'}}>Secure Cloud Hosting</a></li>
                            <li><a href="#" style={{textDecoration:'none'}}>Engage Your Audience</a></li>
                            <li><a href="#" style={{textDecoration:'none'}}>Website Support</a></li>
                        </ul>
                    </div>
                    <hr className="clearfix w-100 d-md-none mb-0" />
                    <div className="col-md-3 mx-auto shfooter">
                        <h5 className="my-2 font-weight-bold d-none d-md-block">Company</h5>
                        <div className="d-md-none title" data-target="#Company" data-toggle="collapse">
                            <div className="mt-3 font-weight-bold">Company
                                <div className="float-right navbar-toggler">
                                    <i className="fas fa-angle-down"></i>
                                    <i className="fas fa-angle-up"></i>
                                </div>
                            </div>
                        </div>
                        <ul className="list-unstyled collapse" id="Company">
                            <li><a href="#" style={{textDecoration:'none'}}>About</a></li>
                            <li><a href="#" style={{textDecoration:'none'}}>Careers</a></li>
                            <li><a href="#" style={{textDecoration:'none'}}>Support</a></li>
                            <li><a href="#" style={{textDecoration:'none'}}>Pricing</a></li>
                            <li><a href="#" style={{textDecoration:'none'}}>FAQ</a></li>
                        </ul>
                    </div>
                    <hr className="clearfix w-100 d-md-none mb-0" />
                    <div className="col-md-3 mx-auto shfooter">
                        <h5 className="my-2 font-weight-bold d-none d-md-block">Resources</h5>
                        <div className="d-md-none title" data-target="#Resources" data-toggle="collapse">
                            <div className="mt-3 font-weight-bold">Resources
                                <div className="float-right navbar-toggler">
                                    <i className="fas fa-angle-down"></i>
                                    <i className="fas fa-angle-up"></i>
                                </div>
                            </div>
                        </div>
                        <ul className="list-unstyled collapse" id="Resources">
                            <li><a href="#" style={{textDecoration:'none'}}>About policy</a></li>
                            <li><a href="#" style={{textDecoration:'none'}}>Comparison Guide</a></li>
                            <li><a href="#" style={{textDecoration:'none'}}>Website Grader</a></li>
                        </ul>
                    </div>
                    <hr className="clearfix w-100 d-md-none mb-0" />
                    <div className="col-md-3 mx-auto shfooter">
                        <h5 className="my-2 font-weight-bold d-none d-md-block">Get Help</h5>
                        <div className="d-md-none title" data-target="#Get-Help" data-toggle="collapse">
                            <div className="mt-3 font-weight-bold">Get Help
                                <div className="float-right navbar-toggler">
                                    <i className="fas fa-angle-down"></i>
                                    <i className="fas fa-angle-up"></i>
                                </div>
                            </div>
                        </div>
                        <ul className="list-unstyled collapse" id="Get-Help">
                            <li><a href="#" style={{textDecoration:'none'}}>Help Center</a></li>
                            <li><a href="#" style={{textDecoration:'none'}}>Contact Us</a></li>
                            <li><a href="#" style={{textDecoration:'none'}}>Privacy Policy</a></li>
                            <li><a href="#" style={{textDecoration:'none'}}>Terms</a></li>
                            <li><a href="#" style={{textDecoration:'none'}}>Login</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            */}
            <div className="pb-3 text-center" style={{transform: 'translate(30px)'}}>
                <span><FontAwesomeIcon icon="fa-solid fa-copyright" size="lg" /></span> Standard Chartered Bank
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Standard_Chartered_%282021%29.svg/2560px-Standard_Chartered_%282021%29.svg.png"
                    alt="Stan Chartered logo" width="60px" height="25px" className="mx-2" />
            </div>
        </footer>
        
    </div>

}

export default Footer;
