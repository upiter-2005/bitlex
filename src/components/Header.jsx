import React from 'react';
import { NavLink } from "react-router-dom";
import logo from '../assets/img/logo.png';

function Header() {
  return (
    <header>

		<div className="top-stripe">
			<div className="container-fluid">
				<div className="row align-items-center">
					<div className="col-md-2 ">
						<div className="logo">
						<NavLink to="/" ><img src={logo} /></NavLink>
						
						</div>
					</div>
					<div className="col-md-3 d-flex align-items-center justify-content-start col-4">

					</div>
					<div className="col-md-6 col-8">
						<div className="adm-block d-flex align-items-center justify-content-end">
							
							<NavLink to="/account" className="register">Личный кабинет</NavLink>
							<NavLink to="/trade" className="register">Биржа</NavLink>
							

						</div>
					</div>
				</div>
			</div>
		</div>

		
	</header>
  )
}

export default Header