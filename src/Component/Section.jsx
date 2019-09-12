import React , {Component} from 'react';
import './Section.css';

class Section extends Component {
  render(){
    return (
          <div className="section-main container">
            <div className="container section"><label>Section One</label>
                <p className="para">
           Lorem ipsurm dolor sit arnet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et colore magna aliqua. 
                </p>
                <button className="btn btn-primary btn1">Button One</button>
            </div>
            <div className="container section"><label>Section Two</label>
                <p className="para">
                Lorem ipsurm dolor sit arnet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et colore magna aliqua.
                </p>
                <button className="btn btn-primary btn1">Button Two</button>
            </div>
            <div className="container section"><label>Section Three</label>
                <p className="para">
                Lorem ipsurm dolor sit arnet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et colore magna aliqua.
                </p>
                <button className="btn btn-primary btn1">Button Three</button>
            </div>
            <div className="container section"><label>Section Four</label>
                <p className="para">
                Lorem ipsurm dolor sit arnet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et colore magna aliqua.
                </p>
                <button className="btn btn-primary btn1">Button Four</button>
            </div>
          </div>
    );
  }
}

export default Section;
