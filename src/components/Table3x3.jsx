import React from 'react';
const Table3x3 = () => {
	const tableStyle = {
		borderCollapse: 'collapse',
		width: '100%',
		maxWidth: '600px',
		margin: '20px auto'
	};

	const cellStyle = {
		border: '1px solid #ddd',
		padding: '12px',
		textAlign: 'center'
	};

	const headerStyle = {
		backgroundColor: '#f4f4f4',
		fontWeight: 'bold',
		...cellStyle
	};

	return (
		<>
			<table style={tableStyle}>
				<thead>
					<tr>
						<th style={headerStyle}>Header 1</th>
						<th style={headerStyle}>Header 2</th>
						<th style={headerStyle}>Header 3</th>
						<th style={headerStyle}>Header 3</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td style={cellStyle}>Option</td>
						<td style={cellStyle}>
						<select>
								<option value="option1">Option 1</option>
								<option value="option2">Option 2</option>
								<option value="option3">Option 3</option>
							</select>
						</td>
						<td style={cellStyle}>
							<select>
								<option value="option1">Option</option>
								<option value="option2">Option</option>
								<option value="option3">Option</option>
							</select>
						</td>
						<td style={cellStyle}>	<select>
								<option value="option1">Option</option>
								<option value="option2">Option</option>
								<option value="option3">Option</option>
							</select></td>
					</tr>
					<tr>
						<td style={cellStyle}>	Option</td>
						<td style={cellStyle}>	<select>
								<option value="option1">Option</option>
								<option value="option2">Option</option>
								<option value="option3">Option</option>
							</select></td>
						<td style={cellStyle}>	<select>
								<option value="option1">Option</option>
								<option value="option2">Option</option>
								<option value="option3">Option</option>
							</select></td>
						<td style={cellStyle}>	<select>
								<option value="option1">Option</option>
								<option value="option2">Option</option>
								<option value="option3">Option</option>
							</select></td>
					</tr>
					<tr>
						<td style={cellStyle}>	Option</td>
						<td style={cellStyle}>	<select>
								<option value="option1">Option</option>
								<option value="option2">Option</option>
								<option value="option3">Option</option>
							</select></td>
						<td style={cellStyle}>	<select>
								<option value="option1">Option</option>
								<option value="option2">Option</option>
								<option value="option3">Option</option>
							</select></td>
						<td style={cellStyle}>	<select>
								<option value="option1">Option</option>
								<option value="option2">Option</option>
								<option value="option3">Option</option>
							</select></td>
					</tr>
					
				</tbody>
			</table>
		</>
	);
  };
  
export default Table3x3;