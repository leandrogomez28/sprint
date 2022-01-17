import React from "react";
import '../styles/footer.css';
import { Link as LinkRouter } from 'react-router-dom';
import {FaTwitter } from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';
import {FaInstagram } from 'react-icons/fa';

function Footer() {

    return (
        <footer class="footer-07 mt-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-12 text-center">
                        <h2 class="footer-heading"><a href="#" class="logo">mytinerary</a></h2>
                        <p class="menu">
                            <LinkRouter to='/'>
                                <a href="#">Home</a>
                            </LinkRouter>
                           <LinkRouter to='/Cities'>
                                <a href="#">Cities</a>
                           </LinkRouter>
                            
                        </p>
                        <ul class="ftco-footer-social p-0">
                            <li class="ftco-animate"><a href="https://twitter.com/" target='_blank' data-toggle="tooltip" data-placement="top" title="" data-original-title="Twitter"><span class="ion-logo-twitter"><FaTwitter/></span></a></li>
                            <li class="ftco-animate"><a href="https://www.facebook.com/" target='_blank' data-toggle="tooltip" data-placement="top" title="" data-original-title="Facebook"><span class="ion-logo-facebook"><FaFacebook/></span></a></li>
                            <li class="ftco-animate"><a href="https://www.instagram.com/" target='_blank' data-toggle="tooltip" data-placement="top" title="" data-original-title="Instagram"><span class="ion-logo-instagram"><FaInstagram/></span></a></li>
                        </ul>
                    </div>
                </div>
                <div class="row ">
                    <div class="col-md-12 text-center">
                        <p class="copyright">
                            Copyright ©2022 All rights reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )


};
export default Footer;