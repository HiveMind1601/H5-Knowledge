import React, { Component } from 'react';
export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="footer">
                    <div className="container">
                        <div className="footer-grids">
                            <div className="col-md-2 footer-grid">
                                <h4>company</h4>
                                <ul>
                                    <li><a href="products.html">products</a></li>
                                    <li><a href="#">Work Here</a></li>
                                    <li><a href="#">Team</a></li>
                                    <li><a href="#">Happenings</a></li>
                                    <li><a href="#">Dealer Locator</a></li>
                                </ul>
                            </div>
                            <div className="col-md-2 footer-grid">
                                <h4>service</h4>
                                <ul>
                                    <li><a href="#">Support</a></li>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Warranty</a></li>
                                    <li><a href="contact.html">Contact Us</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3 footer-grid">
                                <h4>order & returns</h4>
                                <ul>
                                    <li><a href="#">Order Status</a></li>
                                    <li><a href="#">Shipping Policy</a></li>
                                    <li><a href="#">Return Policy</a></li>
                                    <li><a href="#">Digital Gift Card</a></li>
                                </ul>
                            </div>
                            <div className="col-md-2 footer-grid">
                                <h4>legal</h4>
                                <ul>
                                    <li><a href="#">Privacy</a></li>
                                    <li><a href="#">Terms and Conditions</a></li>
                                    <li><a href="#">Social Responsibility</a></li>
                                </ul>
                            </div>
                            <div className="col-md-3 footer-grid icons">
                                <h4>Connect with Us</h4>
                                <ul>
                                    <li><a href="#"><img src="static/images/i1.png" alt="" />Follow us on Facebook</a></li>
                                    <li><a href="#"><img src="static/images/i2.png" alt="" />Follow us on Twitter</a></li>
                                    <li><a href="#"><img src="static/images/i3.png" alt="" />Follow us on Google-plus</a></li>
                                    <li><a href="#"><img src="static/images/i4.png" alt="" />Follow us on Pinterest</a></li>
                                </ul>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <p>Copyright &copy; 2015.Company name All rights reserved.More Templates <a href="http://www.cssmoban.com/" target="_blank" title="模板之家">模板之家</a> - Collect from <a href="http://www.cssmoban.com/" title="网页模板" target="_blank">网页模板</a></p>
                    </div>
                </div>
            </div>
        );
    }
}
