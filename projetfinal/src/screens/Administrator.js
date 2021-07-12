import React, { useState, useEffect, memo  } from 'react';
import firebase  from 'firebase/app' ;
import Button from "../components/Button";
import "firebase/auth";

 const db = () => firebase.database();

 function Admin() {
	
    
	const [input, handleInput] = useState('');
	const [data, handleData] = useState('');
	const [userID, handleuserID] = useState('');

	useEffect(() => {
		db().ref('/');
		
	})
	
	useEffect(() => {
		db().ref('/').on('value', handleReservas);
		db().ref('/').on('value', handleData)
	}, [userID]);
	
	const deleteColletion = () => {
		firebase
		.database()
		.ref(userID)
		.remove();
	};
	
	const deleteDB = () => {
		firebase
		.database()
		.ref('/')
		.remove();
	};
	
	const logOut = () =>{
		firebase.auth().signOut().then(function() {
		}, function(error) {
			console.log(error)
		});		
		
	}
	
	const tabla = JSON.stringify(reservas);
	const mytabla = tabla.split(',').map((item, k) => (
		
		<div key={k}>
		<p style={myItem} >
		{item
			.slice(25)
			.replace(RegExp(/([.*+?^=!$(){}|[\]/\\""])/g), ' ')
			.replace('userInfo', '')
			.replace(':', '->')
			.replace(':', ' ')}
			</p>
			
			<Button 
			onClick={() => writeAdminData(item)}
			 >
			
			</Button>
			</div>
			));
			
			const myData = JSON.stringify(data);
			const myDashboard = myData.split(',').map((item, k) => (
				
				<div key={k}>
				
                <p >
				{item
					.replace(RegExp(/([.*+?^=!$(){}|[\]/\\""])/g), ' ')
					.replace('userInfo', '')
					.replace(':', '->')
					.replace(':', ' ')}
					</p>
					
					</div>
					));
					
					const writeAdminData = (userInfo) => {
						firebase
						.database()
						.ref('/'+userID)
						.push({
							userInfo
						})
						.catch((error) => {
							console.log('error ', error);
						});
					};
					
					return (
						<div style={myStyle}>
						
						
						
						
                        
						<ul 
						className='myList'> 
						{myDashboard.reverse()}
						</ul>
						
						<Button 
						type="submit"
						variant="contained"
						color="primary"
						onClick={()=>{if (window.confirm('Êtes-vous sûr de vouloir supprimer la totalité de la boîte de réception ?')) deleteDB() }}>
						
						</Button>
						<hr style={mySeparator}></hr>
						

						
						
						
						<input 
						value={input} 
						onChange={(e) => handleInput(e.target.value)}>
						</input>
						<br></br><br></br>

						<Button 
						onClick={() => writeAdminData(input)}
						type="submit"
						
						variant="contained"
						color="primary"
						> 
						
						</Button>				
						<br></br><br></br>
						
						<input 
						placeholder='ID Usuario' 
						value={userID} 
						onChange={(e) => handleuserID(e.target.value)}>
						</input>
						
						<ul 
						className="myList"> 
						{mytabla.reverse()}
						</ul>
						
						<Button 
						type="submit"
						variant="contained"
						color="primary"
						onClick={()=>{if (window.confirm('¿Seguro que desea borrar la reservación?')) deleteColletion() }}>
						
						</Button>
						<hr style={mySeparator}></hr>
						

						
						<Button 
						type="submit"
						variant="contained"
						color="primary"
						onClick={() => logOut()}>
						
						</Button>
						
				
						
						</div>
						);
					}
					
                    const myStyle = {
						flex: 1,
						textAlign: 'center',
						alignContent: 'center',
						alignItems: 'center'
					}
					
					const myItem ={
						float: 'left', 
						display: 'inline' 
					}

					const mySeparator ={
						backgroundColor:'pink',
						color:'white' 
					}
					
					
                    
                    
                    
                    
                    export default Admin ;