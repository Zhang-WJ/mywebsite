import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      navBar: [
          {name: 'Dashboard', isActive: true},
          {name: 'Milestones', isActive: false},
          {name: 'Experiments', isActive: false},
          {name: 'Previews', isActive: false},
          {name: 'Assets', isActive: false},
          {name: 'Settings', isActive: false},
          {name: 'Logout', isActive: false},
      ]
    }
  }

  clickSiderbar(e) {
    console.log(e);
    const updatedNav = this.state.navBar.map(item => {
      if(item.name === e.name) {
        return {...item, isActive: true}
      } else {
        return {...item, isActive: false}
      }
    });
   this.setState({
       navBar: updatedNav
   })
  }

  toggleOpen(e){
    e.target.parentElement.classList.toggle('isOpen');
  }

  render() {
    return (
      <div className='wrapper'>
        <div className='sidebar'>
          <div className='title'>
              Sidebar
          </div>
            <ul className='nav'>
                {this.state.navBar.map(item => {
                  return (
                      <li key={item.name}>
                        <a className={item.isActive ? 'active' : ''} onClick={this.clickSiderbar.bind(this, item)}>{item.name}</a>
                      </li>
                  )
                })
                }
            </ul>

        </div>
        <div className='content isOpen'>
            <a className='button' onClick={this.toggleOpen}></a>
          <h1 className='line-1 anim-typewriter'>Flexbox Off Canvas Menu</h1>
          <h2>Lightweight, simple, easy to use</h2>


            <div className="graph__wrapper">
                <svg width="315px" height="107px" viewBox="0 0 315 107" version="1.1">
                    <defs>
                        <linearGradient x1="0%" y1="100%" x2="100%" y2="100%" id="linearGradient-1">
                            <stop stopColor="#2090F8" offset="0%"></stop>
                            <stop stopColor="#01FCE4" offset="41.7610013%"></stop>
                            <stop stopColor="#0BFF8C" offset="78.6870217%"></stop>
                            <stop stopColor="#51FF00" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <path
                            d="M2.10546875,95.75 L40.5546875,68.3476562 L55.2109375,81.1796875 L65.2148437,76.3945312 L96.1835937,86.8320312 L131.023438,19.9414062 L142.15625,23.7226562 L183.605469,2.1953125 L211.007812,22.3320312 L234.320312,71.5664062 L234.667969,83.0039062 L244.019531,83.0039062 L247.105469,88.8320312 L312.695312,104.839844"
                            id="Path-1" stroke="url(#linearGradient-1)" strokeWidth="4"
                            className="path"></path>
                    </g>
                </svg>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
