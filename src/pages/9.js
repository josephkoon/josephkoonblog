import React from "react"
import { Link } from "gatsby"


export default () => (
	<div style={{paddingTop:'10px', paddingBottom:'20px', paddingLeft:'20%', paddingRight:'20%'}}>
		<Link to='/'> /Back</Link>
		
			<h1>Things People Love</h1>
			<p style={{color:'lightgray'}}>April 30, 2020</p>
			<br/>
		
			<p>What do people love?</p>
			<p><strong>Cats</strong> - cat videos, cat photos, petting cats</p>
			<img style={{width:'200px'}} src='https://www.rd.com/wp-content/uploads/2019/09/Cute-cat-lying-on-his-back-on-the-carpet.-Breed-British-mackerel-with-yellow-eyes-and-a-bushy-mustache.-Close-up-e1573490045672.jpg' />
			
			<p><strong>Art</strong> - paintings, sculpture, auctions, galleries</p>
			<p><strong>Design</strong> - furniture, product design, 3d printing</p>
			<img style={{width:'200px'}} src='https://images.squarespace-cdn.com/content/v1/5645f8b4e4b0e040aef9c75d/1449602978504-V86VXIWKJAPG2K64FGID/ke17ZwdGBToddI8pDm48kMnHRrpWSlSCB9XabjgyantZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpz4FkPJA585QYBg9EjPvRpkIxxB_SdP_xzqtxyFDizV5aadH9FfX0OATazAJGndjd8/MINIMAL+SCULPTURE+CHAIR+21.5%2522x31%2522x21%2522+%282x%29.jpg'/>

			<p><strong>Architecture</strong> - shapes, spaces, interiors, photography and video, drawings</p>
			<img style={{width:'200px'}} src='https://i.pinimg.com/originals/24/ed/72/24ed72535b9e2f62e436e6c0a8d0d2f9.gif'/>
			
			<p><strong>Music</strong> - making music, playing guitar, learning music </p>
			<p><strong>Film</strong> - making film, discussing film, critiquing film, watching film, discovering films </p>
			<img style={{width:'200px'}} src='https://www.maxim.com/.image/t_share/MTUwMTg5MDkwMjkyMTE1Mzkx/coffee-pulp-fiction-1.jpg'/>



	</div>
)
