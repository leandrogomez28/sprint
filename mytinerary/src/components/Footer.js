import React from "react";
import '../styles/footer.css';
import { Link as LinkRouter } from 'react-router-dom';
import {FaTwitter } from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';
import {FaInstagram } from 'react-icons/fa';

function Footer() {

    return (
        <footer className="footer-07 mt-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center">
                        <h2 className="footer-heading"><a href="#" className="logo">mytinerary</a></h2>
                        <p className="menu">
                           
                                <LinkRouter to='/'>Home </LinkRouter>
                           
                           <LinkRouter to='/Cities'>Cities</LinkRouter>
                           
                            
                        </p>
                        <ul className="ftco-footer-social p-0">
                            <li className="ftco-animate"><a href="https://twitter.com/" target='_blank' data-toggle="tooltip" data-placement="top" title="" data-original-title="Twitter"><span className="ion-logo-twitter"><FaTwitter/></span></a></li>
                            <li className="ftco-animate"><a href="https://www.facebook.com/" target='_blank' data-toggle="tooltip" data-placement="top" title="" data-original-title="Facebook"><span className="ion-logo-facebook"><FaFacebook/></span></a></li>
                            <li className="ftco-animate"><a href="https://www.instagram.com/" target='_blank' data-toggle="tooltip" data-placement="top" title="" data-original-title="Instagram"><span className="ion-logo-instagram"><FaInstagram/></span></a></li>
                        </ul>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-md-12 text-center">
                        <p className="copyright">
                            Copyright ©2022 All rights reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )


};
export default Footer;