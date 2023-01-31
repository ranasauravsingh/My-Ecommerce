import React from "react";
import { NavLink } from "react-router-dom";

import logoImg from "../assets/imgs/logo.svg";

const Header = () => {
	return (
		<div>
			<header>
				<div className="container bordBtm">
					<div className="mainFlex spaceB">
						<div className="discount">
							<h4>
								Get 20% off your first order: <span> 20%OFF</span>
							</h4>
						</div>
						<div className="register">
							<ul>
								<li>
									<NavLink to="#">Log In</NavLink>
								</li>
								<li>
									<NavLink to="#">Register</NavLink>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<nav>
					<div className="container blank">
						<div className="mainFlex spaceB">
							<div className="logo">
								<NavLink to="/">
									<img src={logoImg} alt="logoImg" />
								</NavLink>
							</div>
							<div className="menu">
								<ul>
									<li>
										<NavLink to="#">
											Home
											<i className="fa fa-light fa-angle-down"></i>
										</NavLink>
									</li>
									<li>
										<NavLink to="#">
											Shop
											<i className="fa fa-light fa-angle-down"></i>
										</NavLink>
									</li>
									<li>
										<NavLink to="#">
											Product
											<i className="fa fa-light fa-angle-down"></i>
										</NavLink>
									</li>
									<li>
										<NavLink to="#">
											Collection
											<i className="fa fa-light fa-angle-down"></i>
										</NavLink>
									</li>
									<li>
										<NavLink to="#">
											Blog
											<i className="fa fa-light fa-angle-down"></i>
										</NavLink>
									</li>
									<li>
										<NavLink to="#">
											Pages
											<i className="fa fa-light fa-angle-down"></i>
										</NavLink>
									</li>
								</ul>
							</div>
							<div className="utility">
								<ul>
									<li>
										<div id="searchIcon">
											<i className="fa fa-light fa-magnifying-glass"></i>
										</div>
									</li>
									<li>
										<div
											id="wishIcon"
											// onclick="switchWish()"
										>
											<i className="fa fa-light fa-heart"></i>
										</div>
										<span id="wishCnt">0</span>
									</li>
									<li>
										<div
											id="cartIcon"
											//  onclick="switchCart()"
										>
											<i className="fa-solid fa-basket-shopping"></i>
											<h6 id="priceCnt">$ 0.00</h6>
										</div>
										<span id="foodCnt">0</span>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</nav>
			</header>
		</div>
	);
};

export default Header;
