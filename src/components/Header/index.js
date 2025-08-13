import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import MenuItems from './MenuItems';

import normalLogo from '../../assets/logo.png';
import stickyLogo from '../../assets/logo.png';

const Header = (props) => {
	const { topbarEnable, menuCategoryEnable, headerClass, parentMenu, headerNormalLogo, headerStickyLogo } = props;

	const [menuOpen, setMenuOpen] = useState(false)
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		// Sticky is displayed after scrolling for 100 pixels
		const toggleVisibility = () => {
			if (window.pageYOffset > 100) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	return (
		<>

			<header id="react-header" className={headerClass ? headerClass : 'react-header react-header-three'}>
				<div className={isVisible ? 'header-area react-sticky' : 'header-area'}>
					{
						topbarEnable ? 
						<div className="topbar-area style1">
							<div className="container">
								<div className="row">
									<div className="col-lg-7">
										<div className="topbar-contact">
										<ul>                                   
											<li>
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
												<a href="tel:+91-9289441168">+91-9289441168</a>
											</li>
											<li>
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
												<a href="mailto:support@exploresresearchsolutions.in">support@exploresresearchsolutions.in</a>
											</li>
											
										</ul>
										</div>
									</div>
									<div className="col-lg-5 text-right">
										<div className="toolbar-sl-share">
											<ul className="social-links">
												<li>Explore our comprehensive Research support services. Contact us today for assistance.</li>
												
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div> : ''
					}
					<div className="menu-part">
						<div className="container">
							<div className="react-main-menu">
								<nav>
									<div className="menu-toggle">
										<div className="logo">
											{
												isVisible ? 
												<Link to="/" className="logo-text">
													<img src={headerStickyLogo ? headerStickyLogo : stickyLogo} alt="" style={{ maxWidth: '80px', height: 'auto' }} />
												</Link> :
												<Link to="/" className="logo-text">
													<img src={headerNormalLogo ? headerNormalLogo : normalLogo} alt="" style={{ maxWidth: '80px', height: 'auto' }} />
												</Link>
											}
										</div>
										<button type="button" id="menu-btn" className={menuOpen ? "mobile-menu-btn open" : "mobile-menu-btn"} onClick={() => {setMenuOpen(!menuOpen)}}>
											<span className="icon-bar"></span>
											<span className="icon-bar"></span>
											<span className="icon-bar"></span>
										</button>
									</div>
									<div className={menuOpen ? "react-inner-menus menu-open" : "react-inner-menus"}>
										{
											menuCategoryEnable ?
											<div className="cate-part">
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-more-vertical"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
												<ul className="react-category-menu">
													<li><Link to="#">Categories <i className="arrow_carrot-down"></i></Link> 
														<ul>
															<li><Link to="/course">English Book</Link></li>
															<li><Link to="/course">Math Book</Link></li>
															<li><Link to="/course">Story Book</Link></li>
														</ul>
													</li>
												</ul>
											</div> : ''
										}
										<ul id="backmenu" className="react-menus react-sub-shadow">
											<MenuItems 
												parentMenu = {parentMenu}
											/>
										</ul>                                
										
									</div>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
}

export default Header;