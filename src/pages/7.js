import React from "react"
import { Link } from "gatsby"


export default () => (
	<div style={{paddingTop:'10px', paddingBottom:'20px', paddingLeft:'20%', paddingRight:'20%'}}>
		<Link to='/'> /Back</Link>
		
		<h1>Extreme Personalization</h1>
		<p style={{color:'lightgray'}}>April 22, 2020</p>
		<br/>

		<p>As it opens, the website adjusts and tunes itself exactly to our needs / desires.  Each person will have a completely different experience.</p>
		<p>Rather than scrolling through content and selecting it ourself, the content will be created on-demand.</p>
		<p>The interface will adjust to our use of it - adding and removing features over time. The colors will tune to the time of day and our perception of it. The data displayed will be selected from a through understanding of our psychology and behavior / needs.</p>
		<p>The headlines, images and content will be generated - for each individual.</p>

		<img src='https://www.phaidon.com/resource/bacon-self-portrait-1.jpg'/>
		<p>Two Studies for a Self-Portrait (1970) by Francis Bacon</p>

	</div>
)
