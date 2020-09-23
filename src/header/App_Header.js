import React, { Component } from 'react';
import './App_Header.scss';

class App_Header extends Component {
  // constructor() {
  //     super();
  //     this.state = {cartNum: 0};
  // }

  render() {
    return (
      <header className="header">
        <div className="header_div">
          <span className="header_span">Store</span>
          <section className="header_cart">
            <i className="fa fa-shopping-cart" />
            <span className="header_cart_num">{this.props.num}</span>
          </section>
        </div>
      </header>
    );
  }
}

export default App_Header;
