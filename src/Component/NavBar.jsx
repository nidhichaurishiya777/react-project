import React, {Component}from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';

class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = { showMenu: false };
    }
    operation1(){
        this.setState({
            showMenu: true
        })
    }
    operation2(){
        this.setState({
            showMenu: false
        })
    }
      
  render(){
      let persons = null;
    if(this.state.showMenu){
        persons = <div>
            <ul className="sub-menu navbar-nav">
              <li className="nav-item submenulink">
                  <a className="item-color" href="#">Sub Menu One</a>
              </li>
        
          
              <li className="nav-item submenulink">
                  <a className="item-color" href="#">Sub Menu Two</a>
              </li>
         
         
              <li className="nav-item submenulink">
                  <a className="item-color" href="#">Sub Menu Three</a>
              </li>

              <li className="nav-item submenulink">
                  <a className="item-color" href="#">RFT Pulse</a>
              </li>
          </ul>
        </div>
    }
    return (
        
<div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
       
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

            <li className="nav-item" onMouseOver={()=>this.operation1()} onMouseLeave={()=>this.operation2()}>
              <a className="item-color" href="#">Menu One </a>
            </li>
            {persons}
            <li className="nav-item menulink">
              <a className="item-color" href="#">Menu Two</a>
            </li>
            <li className="nav-item  menulink">
              <a className="item-color" href="#">Menu Three</a>
            </li>
            <li className="nav-item menulink">
              <a className="item-color" href="#">Menu Four</a>
            </li>
          </ul>
          
        </div>
      </nav>
      </div>
    );
}
}
export default NavBar;