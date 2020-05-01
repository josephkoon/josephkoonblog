import React from "react"
import { Link } from "gatsby"


export default () => (
	<div style={{backgroundColor:'#fff7f7', paddingTop:'10px', paddingBottom:'20px', paddingLeft:'20%', paddingRight:'20%', textAlign:'center'}}>
		
		<h1>Joseph Koon Blog</h1>

		<p>something I'm listening to : </p>

<iframe width="100%" height="150" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/76034666&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>

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
