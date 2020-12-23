import React,{Component} from 'react';
import { Route } from "react-router-dom";
import Button from './Component/Button/Button';
import Bar from './Component/Bar/Bar';
import Photo from './Component/Photo/Photo';
import Des from './Component/Des/Des';
import Resume from './Component/Resume/Resume';
import Generate from './Component/Generate/Generate';
import "./App.css"
class App extends Component {
render(){
  return (
    <div>
    <Route path="/" exact
       render={(props)=>(
        <div>
         <Bar/>
        
        <Photo/>
        
        <Des/>
        </div>
        )} />
       
        
      <Route path="/next" exact
       render={(props)=>(
        <div>
        <Generate/>
        

        </div>
        )} />
       <Route path="/Res1" exact
       render={(props)=>(
        <div>
        <Resume/>
        
        </div>
        )} />
       
        
 
    </div>
    
);
}
}

export default App;
