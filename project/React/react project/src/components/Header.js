import React, { Component } from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import HeaderInfo from './HeaderInfo'
export default class Header extends Component {
	
	render() {
		
		return (
			<div className="header">
				<div className="container">
					<nav className="navbar navbar-default" role="navigation">
						<div className="navbar-header">
							<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<h1 className="navbar-brand"><NavLink to="/">Yummy</NavLink></h1>
						</div>
						<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
							<ul className="nav navbar-nav">
								<li><NavLink to="/" className="active">Home</NavLink></li>
								<li className="dropdown">
									<a href="#" className="dropdown-toggle" data-toggle="dropdown">Birthday<b className="caret"></b></a>
									<ul className="dropdown-menu multi-column columns-4">
										<div className="row">
											<div className="col-sm-3">
												<h4>By Relation</h4>
												<ul className="multi-column-dropdown">
													<li><a className="list" href="products.html">Friend</a></li>
													<li><a className="list" href="products.html">Lover</a></li>
													<li><a className="list" href="products.html">Sister</a></li>
													<li><a className="list" href="products.html">Brother</a></li>
													<li><a className="list" href="products.html">Kids</a></li>
													<li><a className="list" href="products.html">Parents</a></li>
												</ul>
											</div>
											<div className="col-sm-3">
												<h4>By Flavour</h4>
												<ul className="multi-column-dropdown">
													<li><a className="list" href="products.html">Chocolate</a></li>
													<li><a className="list" href="products.html">Mixed Fruit</a></li>
													<li><a className="list" href="products.html">Butterscotch</a></li>
													<li><a className="list" href="products.html">Strawberry</a></li>
													<li><a className="list" href="products.html">Vanilla</a></li>
													<li><a className="list" href="products.html">Eggless Cakes</a></li>
												</ul>
											</div>
											<div className="col-sm-3">
												<h4>By Theme</h4>
												<ul className="multi-column-dropdown">
													<li><a className="list" href="products.html">Heart shaped</a></li>
													<li><a className="list" href="products.html">Cartoon Cakes</a></li>
													<li><a className="list" href="products.html">2-3 Tier Cakes</a></li>
													<li><a className="list" href="products.html">Square shape</a></li>
													<li><a className="list" href="products.html">Round shape</a></li>
													<li><a className="list" href="products.html">Photo cakes</a></li>
												</ul>
											</div>
											<div className="col-sm-3">
												<h4>Weight</h4>
												<ul className="multi-column-dropdown">
													<li><a className="list" href="products.html">1 kG</a></li>
													<li><a className="list" href="products.html">1.5 kG</a></li>
													<li><a className="list" href="products.html">2 kG</a></li>
													<li><a className="list" href="products.html">3 kG</a></li>
													<li><a className="list" href="products.html">4 kG</a></li>
													<li><a className="list" href="products.html">Large</a></li>
												</ul>
											</div>
										</div>
									</ul>
								</li>
								<li className="dropdown grid">
									<a href="#" className="dropdown-toggle list1" data-toggle="dropdown">Wedding<b className="caret"></b></a>
									<ul className="dropdown-menu multi-column columns-4">
										<div className="row">
											<div className="col-sm-3">
												<h4>By Relation</h4>
												<ul className="multi-column-dropdown">
													<li><a className="list" href="products.html">Friend</a></li>
													<li><a className="list" href="products.html">Lover</a></li>
													<li><a className="list" href="products.html">Sister</a></li>
													<li><a className="list" href="products.html">Brother</a></li>
													<li><a className="list" href="products.html">Kids</a></li>
													<li><a className="list" href="products.html">Parents</a></li>
												</ul>
											</div>
											<div className="col-sm-3">
												<h4>By Flavour</h4>
												<ul className="multi-column-dropdown">
													<li><a className="list" href="products.html">Chocolate</a></li>
													<li><a className="list" href="products.html">Mixed Fruit</a></li>
													<li><a className="list" href="products.html">Butterscotch</a></li>
													<li><a className="list" href="products.html">Strawberry</a></li>
													<li><a className="list" href="products.html">Vanilla</a></li>
													<li><a className="list" href="products.html">Eggless Cakes</a></li>
												</ul>
											</div>
											<div className="col-sm-3">
												<h4>By Theme</h4>
												<ul className="multi-column-dropdown">
													<li><a className="list" href="products.html">Heart shaped</a></li>
													<li><a className="list" href="products.html">Cartoon Cakes</a></li>
													<li><a className="list" href="products.html">2-3 Tier Cakes</a></li>
													<li><a className="list" href="products.html">Square shape</a></li>
													<li><a className="list" href="products.html">Round shape</a></li>
													<li><a className="list" href="products.html">Photo cakes</a></li>
												</ul>
											</div>
											<div className="col-sm-3">
												<h4>Weight</h4>
												<ul className="multi-column-dropdown">
													<li><a className="list" href="products.html">1 kG</a></li>
													<li><a className="list" href="products.html">1.5 kG</a></li>
													<li><a className="list" href="products.html">2 kG</a></li>
													<li><a className="list" href="products.html">3 kG</a></li>
													<li><a className="list" href="products.html">4 kG</a></li>
													<li><a className="list" href="products.html">Large</a></li>
												</ul>
											</div>
										</div>
									</ul>
								</li>
								<li className="dropdown grid">
									<a href="#" className="dropdown-toggle list1" data-toggle="dropdown">Special Offers <b className="caret"></b></a>
									<ul className="dropdown-menu multi-column columns-4">
										<div className="row">
											<div className="col-sm-3">
												<h4>By Relation</h4>
												<ul className="multi-column-dropdown">
													<li><a className="list" href="products.html">Friend</a></li>
													<li><a className="list" href="products.html">Lover</a></li>
													<li><a className="list" href="products.html">Sister</a></li>
													<li><a className="list" href="products.html">Brother</a></li>
													<li><a className="list" href="products.html">Kids</a></li>
													<li><a className="list" href="products.html">Parents</a></li>
												</ul>
											</div>
											<div className="col-sm-3">
												<h4>By Flavour</h4>
												<ul className="multi-column-dropdown">
													<li><a className="list" href="products.html">Chocolate</a></li>
													<li><a className="list" href="products.html">Mixed Fruit</a></li>
													<li><a className="list" href="products.html">Butterscotch</a></li>
													<li><a className="list" href="products.html">Strawberry</a></li>
													<li><a className="list" href="products.html">Vanilla</a></li>
													<li><a className="list" href="products.html">Eggless Cakes</a></li>
												</ul>
											</div>
											<div className="col-sm-3">
												<h4>By Theme</h4>
												<ul className="multi-column-dropdown">
													<li><a className="list" href="products.html">Heart shaped</a></li>
													<li><a className="list" href="products.html">Cartoon Cakes</a></li>
													<li><a className="list" href="products.html">2-3 Tier Cakes</a></li>
													<li><a className="list" href="products.html">Square shape</a></li>
													<li><a className="list" href="products.html">Round shape</a></li>
													<li><a className="list" href="products.html">Photo cakes</a></li>
												</ul>
											</div>
											<div className="col-sm-3">
												<h4>Weight</h4>
												<ul className="multi-column-dropdown">
													<li><a className="list" href="products.html">1 kG</a></li>
													<li><a className="list" href="products.html">1.5 kG</a></li>
													<li><a className="list" href="products.html">2 kG</a></li>
													<li><a className="list" href="products.html">3 kG</a></li>
													<li><a className="list" href="products.html">4 kG</a></li>
													<li><a className="list" href="products.html">Large</a></li>
												</ul>
											</div>
										</div>
									</ul>
								</li>
								<li className="dropdown grid">
									<a href="#" className="dropdown-toggle list1" data-toggle="dropdown">Store<b className="caret"></b></a>
									<ul className="dropdown-menu multi-column columns-3">
										<div className="row">
											<div className="col-sm-4">
												<h4>By Relation</h4>
												<ul className="multi-column-dropdown">
													<li><a className="list" href="products.html">Friend</a></li>
													<li><a className="list" href="products.html">Lover</a></li>
													<li><a className="list" href="products.html">Sister</a></li>
													<li><a className="list" href="products.html">Brother</a></li>
													<li><a className="list" href="products.html">Kids</a></li>
													<li><a className="list" href="products.html">Parents</a></li>
												</ul>
											</div>
											<div className="col-sm-4">
												<h4>By Flavour</h4>
												<ul className="multi-column-dropdown">
													<li><a className="list" href="products.html">Chocolate</a></li>
													<li><a className="list" href="products.html">Mixed Fruit</a></li>
													<li><a className="list" href="products.html">Butterscotch</a></li>
													<li><a className="list" href="products.html">Strawberry</a></li>
													<li><a className="list" href="products.html">Vanilla</a></li>
													<li><a className="list" href="products.html">Eggless Cakes</a></li>
												</ul>
											</div>
											<div className="col-sm-4">
												<h4>Specials</h4>
												<ul className="multi-column-dropdown">
													<li><a className="list" href="products.html">Ice cream cake</a></li>
													<li><a className="list" href="products.html">Swiss roll</a></li>
													<li><a className="list" href="products.html">Ruske kape</a></li>
													<li><a className="list" href="products.html">Cupcakes</a></li>
													<li><a className="list" href="products.html">Muffin</a></li>
													<li><a className="list" href="products.html">Merveilleux</a></li>
												</ul>
											</div>
										</div>
									</ul>
								</li>
							</ul>
						</div>
					</nav>
					<HeaderInfo ></HeaderInfo>
					<div className="clearfix"> </div>
				</div>
			</div>
		)
	}
}
