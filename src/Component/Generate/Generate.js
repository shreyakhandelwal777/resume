import React,{ PureComponent } from 'react';
import jsPDF from 'jspdf';
import './Generate1.css';
export default class pdfGenerator extends PureComponent
{
	constructor(props){
		super(props)
		this.state={

		}
	}
	jsPdfGenerator=()=>{
		var doc=new jsPDF('p','pt');
		doc.text(20,20,'hello prank')
		doc.setFont('courier');
		
		doc.save("generated.pdf");
	}
render(){
	return(
		<div>
		<div className="middle">
		<button onClick={this.jsPdfGenerator}>Resume</button>
		<button >Project</button>
		</div>
		<div className="middle1">
		
		</div>
		</div>
		)
}
}