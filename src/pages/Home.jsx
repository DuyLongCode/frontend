import React, { useEffect, useState } from 'react';

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
				<h1>{stringData}</h1>
				<h2>Software Developer</h2>
			</div>
			
			<div className="info-section">
				<h3>Skills</h3>
			</div>
		</div>
	);
};

export default Home;