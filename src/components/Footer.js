import React from 'react'
import { SocialIcon } from 'react-social-icons';
import './global.scss';

function Footer() {
    return (
        <React.Fragment>
            <footer color="secondary" className="page-footer font-small blue pt-4 FooterUI">

                <div className="container-fluid text-center text-md-left">


                    <div className="row FooterUI_row">


                        <div className="col-md-6 mt-md-0 mt-3">


                            <h5 className="text-uppercase">Footer Content</h5>
                            <p>Your place to get the best entertainment content in the industry.</p>

                        </div>


                        <hr className="clearfix w-100 d-md-none pb-3" />


                        <div className="col-md-3 mb-md-0 mb-3">


                            <h5 className="text-uppercase">Social</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <SocialIcon network="twitter" style={{ height: 25, width: 25 }} className="FooterUI_icon"/>
                                    <a href="#" className="FooterUI_link">Twitter</a>
                                </li>
                                <li>
                                     <SocialIcon network="facebook" style={{ height: 25, width: 25 }} className="FooterUI_icon"/>
                                     <a href="#" className="FooterUI_link">Facebook</a>
                                </li>
                                <li>
                                     <SocialIcon network="instagram" style={{ height: 25, width: 25 }}  className="FooterUI_icon"/>
                                     <a href="#" className="FooterUI_link">Instagram</a>
                                </li>
                                <li>
                                     <SocialIcon network="youtube" style={{ height: 25, width: 25 }} className="FooterUI_icon"/>
                                     <a href="#" className="FooterUI_link">Youtube</a>
                                </li>
                            </ul>

                        </div>

                        <div className="col-md-3 mb-md-0 mb-3">


                            <h5 className="text-uppercase">Contact</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <p>Tel : (+57) 3005416542</p>
                                </li>
                                <li>
                                    <p>Email : MovieRelease@Movies.com</p>
                                </li>
                                <li>
                                    <p>Address : 123rd PrinceTown AV - Chicago</p>
                                </li>
                                <li>
                                    <p>Address : 123rd PrinceTown AV - Chicago</p>
                                </li>
                            </ul>

                        </div>


                    </div>


                </div>



                <div className="FooterUI_footer-copyright text-center py-3">© 2020 Copyright:
                    <p> MDBootstrap.com</p>
                </div>


            </footer>
        </React.Fragment>

    )
}

export default Footer;