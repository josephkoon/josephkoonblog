import React from "react"
import { Link } from "gatsby"


export default () => (
	<div style={{paddingTop:'10px', paddingBottom:'20px', paddingLeft:'25%', paddingRight:'25%', textAlign:'center'}}>
		
		<h1>Joseph Koon Blog</h1>
		<img style={{width:'100%'}} src="https://juddfoundation.org/wp-content/uploads/2019/03/IS.26_4F5A8669-1024x682.jpg" alt="" />
		<br/>

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
