import React from "react";

const Footer = () => {
  return (
    <>
      {/* Start Footer */}
      <footer id="footer" className="footer-03 parallax">
        <div className="container">
          <div className="row">
            <div className="col-md-5 ft1 mb">
              <div className="widget-footer widget-about">
                <div className="logo-ft">
                  <a href="#" title="">
                    <img src="/images/logo-ft.png" alt="" />
                  </a>
                </div>
                <ul className="infomation-ft">
                  <li>
                    329 Queensberry Street, North Melbourne VIC 3051, Australia.
                  </li>
                  <li>123 456 7890</li>
                  <li>support@prodrive.com</li>
                </ul>
                <ul className="social-ft">
                  <li>
                    <a href="#" title="Facebook">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Twitter">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Instagram">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Pinterest">
                      <i className="fa fa-pinterest" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Dribble">
                      <i className="fa fa-dribbble" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#" title="Google">
                      <i className="fa fa-google" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 ft2 mb tab-show">
              <div className="widget-footer widget-services">
                <h3 className="title-ft">Our services</h3>
                <ul>
                  <li>
                    <a href="#" title="">
                      Airport transfer
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      Limousine service
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      Chauffeur service
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 ft2 mb tab-show">
              <div className="widget-footer widget-services">
                <h3 className="title-ft">About us</h3>
                <ul>
                  <li>
                    <a href="#" title="">
                      Chauffeurs
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      About us
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 ft2 mb tab-show">
              <div className="widget-footer widget-services">
                <h3 className="title-ft text-white">Our cars</h3>
                <ul>
                  <li>
                    <a href="#" title="">
                      Mercedes S-Class
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      Mercedes E-Class
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      Rolls-Royce Phantom
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      Bentley Mulsanne
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      Mercedes V-Class
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      Range Rover
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      Luxury Minibus
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* mbl version */}
            <div className="col-12 ft2 mb mbl-show">
              <div class="accordion">
                <div class="accordion-toggle widget-footer widget-services">
                  <div class="toggle-title mb-0 pb-0 no-border active">
                    <h3 className="title-ft text-white">Our Service</h3>
                    <span className="plus">+</span>
                    <span className="minus">-</span>
                  </div>
                  <div class="toggle-content">
                    <ul>
                      <li>
                        <a href="#" title="">
                          Airport transfer
                        </a>
                      </li>
                      <li>
                        <a href="#" title="">
                          Limousine service
                        </a>
                      </li>
                      <li>
                        <a href="#" title="">
                          Chauffeur service
                        </a>
                      </li>
                    </ul>
                    <div class="clearfix"></div>
                  </div>
                </div>
                <div class="accordion-toggle widget-footer widget-services">
                  <div class="toggle-title mb-0 pb-0 no-border">
                    <h3 className="title-ft text-white">Our cars</h3>
                    <span className="plus">+</span>
                    <span className="minus">-</span>
                  </div>
                  <div class="toggle-content">
                    <ul>
                      <li>
                        <a href="#" title="">
                          Airport transfer
                        </a>
                      </li>
                      <li>
                        <a href="#" title="">
                          Limousine service
                        </a>
                      </li>
                      <li>
                        <a href="#" title="">
                          Chauffeur service
                        </a>
                      </li>
                    </ul>
                    <div class="clearfix"></div>
                  </div>
                </div>
                <div class="accordion-toggle widget-footer widget-services">
                  <div class="toggle-title mb-0 pb-0 no-border">
                    <h3 className="title-ft text-white">About Us</h3>
                    <span className="plus">+</span>
                    <span className="minus">-</span>
                  </div>
                  <div class="toggle-content">
                    <ul>
                      <li>
                        <a href="#" title="">
                          Airport transfer
                        </a>
                      </li>
                      <li>
                        <a href="#" title="">
                          Limousine service
                        </a>
                      </li>
                      <li>
                        <a href="#" title="">
                          Chauffeur service
                        </a>
                      </li>
                    </ul>
                    <div class="clearfix"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom has-parallax">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="title">Our Top Cities</div>
                <ul className="city">
                  <li>
                    <a href="#" title="">
                      New York
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      Istanbul
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      London
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      Berlin
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      Los Angeles
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      Paris
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      All cities
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* End Footer */}
      {/* <!-- Start copyright --> */}
      <section className="copyright cpr-01">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <p>Copyright Prodrive © 2018. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End copyright --> */}
    </>
  );
};

export default Footer;
