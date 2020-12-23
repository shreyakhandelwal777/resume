import React from 'react';
import download from './download.jpg'
import "./Photo1.css"
import { Link } from "react-router-dom";

function Photo()
{
	return(
		<div>
		<div className='Back'>
			<Link to ="/next" >
			<img className="Back1" src={download} alt="hello" height={300} width={300} />
			</Link>
		</div>
		<div className='Back2'>
			<h2 >Description :</h2>
			</div>
			</div>
		)
}
export default Photo;  