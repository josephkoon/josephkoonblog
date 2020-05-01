import React from "react"
import { Link } from "gatsby"
import { FaHeart, FaLevelUpAlt, FaBlog } from 'react-icons/fa';


export default () => (
	<div style={{backgroundColor:'#fff7f7', paddingTop:'10px', paddingBottom:'20px', paddingLeft:'20%', paddingRight:'20%', textAlign:'center'}}>
		
		<h1>Joseph Koon  Blog<FaBlog/></h1>
		 

		<img src='https://creators-images.vice.com/blog_article_images/images/000/024/697/Screen_shot_2012-02-20_at_3_08_25_PM_detail_em.jpg?1329738926'/>
		<br/>
		<br/>

		<Link to='9'>
			<div className='card'>Things People Love <FaHeart/></div>
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
			<div className='card'>Philosophy : Incremental "Life Upgrading" <FaLevelUpAlt/></div>
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
