import React, { useEffect, useState } from 'react';
import Table3x3 from "../components/Table3x3.jsx";
const Home = () => {
	const [stringData, setString] = useState('');

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('http://localhost:9001/api/saymyname');
				const data = await response.text();
				setString(data);
			} catch (error) {
				setString('');
				console.error('Error fetching data:', error);
			}
		};

		fetchData();
	}, []);

	return (
		<div className="personal-container">
			<div className="personal-info">
				
				<Table3x3/>
			</div>
			
			<div className="info-section">
				<h3>Skills</h3>
			</div>
		</div>
	);
};

export default Home;