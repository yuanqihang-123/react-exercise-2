import React, { Component } from 'react';
import './App_Phone.scss';
import noPhoto from '../assets/product_image_placeholder.png';
import PropTypes from 'prop-types';

class App_Phone extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <div className="phone_name">{this.props.product.price}</div>
        <img src={noPhoto} alt="no photo" />
        <div className="product_bottom">
          <h2>{this.props.product.price}</h2>
          <button className="add_to_cart" onClick={this.props.onClick}>
            add to cart
          </button>
        </div>
      </div>
    );
  }
}

App_Phone.propTypes = {
  product: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default App_Phone;
