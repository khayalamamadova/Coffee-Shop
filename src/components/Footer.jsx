import React, { Component } from 'react'
import FooterParts from './FooterParts'
import FooterParts2 from './FooterParts2'
import logo from '../assets/img/logo-2.png'

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container-fluid mt-5">
                    <div className="row mb-5">

                        <div className="col-md-3 col-sm-12">
                            <div>
                                <img src={logo} alt="" width={'100px'} />
                            </div>
                            <p className='my-2'>Aliquam facilisis nec orci et tempor. Integer facilisis vulputate nisi vitae tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                            <div className="icons text-success">
                                <i class="fa-brands fa-facebook-square fs-3 "></i>
                                <i class="fa-brands fa-twitter-square fs-3 mx-2"></i>
                                <i class="fa-brands fa-pinterest-square fs-3"></i>
                                <i class="fa-brands fa-youtube-square fs-3 mx-2"></i>
                                <i class="fa-brands fa-google-plus-g  fs-3"></i>
                            </div>
                        </div>

                        <FooterParts />
                        <FooterParts2 />

                        <div className="col-md-3 col-sm-12">
                            <h5 className='text-success'>Our Contact</h5>
                            <p> <span><i class="fa-solid fa-location-dot me-2"></i></span>
                                60, 29th Street #343, San Francisco, CA 94110, United States Of America</p>

                            <p> <span><i class="fa-solid fa-phone me-2"></i></span>+00-123-456-789</p>
                            <p> <span><i class="fa-solid fa-envelope me-2"></i></span>info@example.com</p>
                            
                        </div>

                    </div>
<hr />
                    <div className="footer__end mt-3 text-center">
                        <p>© 2022 COFFEELO Theme. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer