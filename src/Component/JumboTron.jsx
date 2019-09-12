import React , {Component} from 'react';
import './JumboTron.css';
class JumboTron extends Component {
  render(){
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container site">
            <h1 className="site-title">Site Title</h1>
            <p className="ipsum-text">Loreum ipsum dolor sit amet</p>
        </div>

        <div className="container ipsum">
            <h4 className="loreum-title">LOREM IPSUM DOLOR SIT AMET</h4>
            <p className="loreum-text">Snd ut perspicitutis unde amnis iste natus emer sit voluptatem accustmtum</p>
        </div>
      </div>

        
         
       
      
        
    );
  }
}

export default JumboTron;
