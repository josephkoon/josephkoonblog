import React from "react"
import { Link } from "gatsby"


export default () => (
	<div style={{paddingTop:'10px', paddingBottom:'20px', paddingLeft:'20%', paddingRight:'20%', textAlign:'center'}}>
		
		<h1>Joseph Koon Blog</h1>
		<img style={{width:'100%'}} src="https://images.squarespace-cdn.com/content/v1/5b0efe358ab722c2102aea27/1537021775335-BYTERJP8LESL65VNSVQ1/ke17ZwdGBToddI8pDm48kD4V-B7oD723U9vrKklU7tcUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYy7Mythp_T-mtop-vrsUOmeInPi9iDjx9w8K4ZfjXt2dj5KYrFoTb0WzFCSCL8o1xGmhcMtt62SMpLZ0E5f3Z9OoRwB-dUGsSquCnVTFQcaRg/lombardi.jpg?format=2500w" alt="" />
		<br/>


		<Link to='7'>
			<div className='card'>Extreme Personalization</div>
		</Link>

		<Link to='6'>
			<div className='card'>Software vs Physical Products</div>
		</Link>
	
		<Link to='5'>
			<div className='card'>Philosophy : Incremental "Life Upgrading"</div>
		</Link>
	
		<Link to='4'>
			<div className='card'>Business Concept: Remote Mastermind Meetings</div>
		</Link>
	
		<Link to='3'>
			<div className='card'>Vector R8 [Badass Super Car]</div>
		</Link>
	
		<Link to='2'>
			<div className='card'>Creativity During COVID19</div>
		</Link>

		<Link to='1'>
			<div className='card'>Business Concept : Mobile Bike Shed</div>
		</Link>



	</div>
)
