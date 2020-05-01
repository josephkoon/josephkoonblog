import React from "react"
import { Link } from "gatsby"


export default () => (
	<div style={{backgroundColor:'#fff7f7', paddingTop:'10px', paddingBottom:'20px', paddingLeft:'20%', paddingRight:'20%', textAlign:'center'}}>
		
		<h1>Joseph Koon Blog</h1>

		<p>something I'm listening to : </p>
		<iframe width="280" height="160" src="https://www.youtube.com/embed/ZIU0RMV_II8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>
		<br/>
		<br/>

		<Link to='9'>
			<div className='card'>Things People Love</div>
		</Link>

		<Link to='8'>
			<div className='card'>Donation Economics</div>
		</Link>

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
