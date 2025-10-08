import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer({footerDetails}) {
    return (
        <div id='footer'>
            <footer class="site-footer border-light border-top">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <h2 className='h6 text-light'>ABOUT</h2>
                            <p class="text-justify">
                           {footerDetails?.footerDescription}

                            </p>
                        </div>
                        <div class="col-xs-6 col-md-3">
                            <h2 className='h6 text-light'>QUICK LINKS</h2>

                            <ul class="footer-links">
                                <li><Link onClick={() => { window.scrollTo({ behavior: 'smooth', top: 0, left: 0, behavior: "instant" }) }} to="/">Home</Link></li>
                                <li><Link onClick={() => { window.scrollTo({ behavior: 'smooth', top: 0, left: 0, behavior: "instant" }) }} to="/website-development">Education</Link></li>
                                <li><Link onClick={() => { window.scrollTo({ behavior: 'smooth', top: 0, left: 0, behavior: "instant" }) }} to="/seo">About</Link></li>
                                <li><Link onClick={() => { window.scrollTo({ behavior: 'smooth', top: 0, left: 0, behavior: "instant" }) }} to="/ppc-management-packages">Contact</Link></li>
                                {/* <li><Link onClick={() => { window.scrollTo({ behavior: 'smooth', top: 0, left: 0, behavior: "instant" }) }} to="/contact">Contact Us</Link></li> */}
                            </ul>


                        </div>
                        <div class="col-xs-6 col-md-3">
                            <h2 className='h6 text-light'>Follow Us</h2>
                            <ul class="footer-links">
                                {/* <li onClick={()=>{window.scrollTo({ behavior: 'smooth', top: 0, left: 0,behavior:"instant" })}}  >Home</li> */}
                                {/* <li>Phone: <a href={`tel:+92-336-3374624`}>+92-336-3364624</a></li> */}
                                {/* <li>Landline: <a  href={`tel:+92-51-8736204`}>+92-51-8736204</a></li> */}
                                <ul class="social-icons d-flex justify-content-start">
                                    <li><a class="facebook" target='_blank' href="https://www.facebook.com/profile.php?id=100094100574663"><i class="fa fa-facebook"></i></a></li>
                                    <li><a class="twitter" target='_blank' href="https://twitter.com/metatech_offic"><i class="fa fa-twitter"></i></a></li>
                                    <li><a class="linkedin" target='_blank' href="https://www.linkedin.com/company/metatech-official/"><i class="fa fa-linkedin"></i></a></li>
                                </ul>
                                <li><a href={`tel:mailto:contact@sft.com.pk`}>{footerDetails?.email}</a></li>
                                <li><a href={`tel:mailto:contact@sft.com.pk`}>{footerDetails?.phone}</a></li>

                            </ul>
                        </div>


                    </div>
                    <hr />
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-sm-6 col-xs-12">
                            <p class="copyright-text">Copyright &copy; 2025 All Rights Reserved by
                                <span href="#" className='mx-1'>King Kong</span>
                            </p>
                            {/* <p class="copyright-text">Site developed by: <a href='/Metatech.pdf' target="_blank" download> Metatech <span className='d-none'>Metatech-PDF</span></a> */}

                            {/* </p> */}
                        </div>

                        {/* <div class="col-md-4 col-sm-6 col-xs-12">
                            <ul class="social-icons">
                                <li><a class="facebook" target='_blank' href="https://www.facebook.com/profile.php?id=100094100574663"><i class="fa fa-facebook"></i></a></li>
                                <li><a class="twitter" target='_blank' href="https://twitter.com/metatech_offic"><i class="fa fa-twitter"></i></a></li>
                                <li><a class="linkedin" target='_blank' href="https://www.linkedin.com/company/metatech-official/"><i class="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </footer>
        </div>
    )
}