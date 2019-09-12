import React , {Component} from 'react';
import './App.css';
import NavBar from './Component/NavBar.jsx';
import JumboTron from './Component/JumboTron.jsx';
import { ReactComponent as Logo } from './Images/logo.svg';
import { ReactComponent as SearchLogo } from './Images/search.svg';
import Section from './Component/Section'
class App extends Component {
  render(){
    return (
          <div className="image-height">
          <div className="header">
          <div>
          <Logo className="logo" /><label className="item-color header-site">Site Title</label>
          </div>
          <div className="search-box">
          <SearchLogo className="search"/><label className="item-color">Search</label>
          </div>
            </div>
            <NavBar/>
            <JumboTron/>
            <Section/>
          </div>
    );
  }
}

export default App;
