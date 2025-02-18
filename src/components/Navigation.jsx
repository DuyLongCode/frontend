import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
export function DuyLongNavigation(){
		return (
			<nav className='DuyLongNavigation' style={{
				// padding: '1rem',
				backgroundColor: '#333',
				color: 'white',
				paddingBottom:'2vh',
			
			}}>
				<ul>
					<li><Link to="/" style={{color: 'white', textDecoration: 'none'}}>Home</Link></li>
					<li><Link to="/personal" style={{color: 'white', textDecoration: 'none'}}>Personal</Link></li>
					<li><Link to="/contact" style={{color: 'white', textDecoration: 'none'}}>Contact</Link></li>
				</ul>
			</nav>
		);
}
