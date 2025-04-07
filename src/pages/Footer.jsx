import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer id='footer' className='footer'>
        <div className="footer-top">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-5 col-md-12 footer-info">
                        <a href="/" className="logo d-flex align-items-center">
                            <span>CINEMA</span>
                        </a>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing 
                            elit. Cumque laborum nam maiores magnam totam dolore 
                            dicta aut saepe distinctio aliquid?
                        </p>
                        <div className="social-links">
                            <a href="#" className='twitter'>
                                <ion-icon name="logo-twitter"></ion-icon>
                            </a>
                            <a href="#" className='facebook'>
                                <ion-icon name="logo-facebook"></ion-icon>
                            </a>
                            <a href="#" className='instagram'>
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                            <a href="#" className='youtube'>
                                <ion-icon name="logo-youtube"></ion-icon>
                            </a>
                        </div>
                    </div>

                    <div className="footer-contact col-lg-3 col-md-12 text-center text-md-start">
                        <h4>Contact Us</h4>
                        <p>
                            Street Name <br/>
                            City Name, State 123456
                            <br/>
                            Country Name <br/>
                            <strong>Phone:</strong> +1 2345 6789 00
                            <br />
                            <strong>Email:</strong> info@example.com
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="copyright">
                &copy; Copyright{' '}
                <strong>
                    <span>CineNest Technologies</span>
                </strong>
                .All Rights Reserved
            </div>
            <div className="credits">
                Designed by <a href="#">CineNest Technologies</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer