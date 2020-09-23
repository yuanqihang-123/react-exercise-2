import React, { Component } from 'react';
import './App_Body.scss';
import Phone from '../phone/App_Phone';
import PropTypes from 'prop-types';

class App_Body extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await fetch('http://localhost:3000/products');
    const json = await response.json();
    this.setState({
      products: json,
    });
  }

  render() {
    return (
      <div className="phone_display">
        <div className="photo_title">
          iPhone
          {this.state.products.map((product, index) => (
            <Phone
              product={product}
              onClick={this.props.onClick}
              key={index}
            ></Phone>
          ))}
          &rbrace;
        </div>
        <div className="photo_title">HUWEI</div>
      </div>
    );
  }
}

App_Body.propTypes = {
  product: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default App_Body;
