import React, { Component } from 'react';
import api from '../../services/api.js';

export default class Main extends Component {
 componentDidMount () {
     this.loadProducts();
 }


 loadProducts =  async () => {
  const response = await api.get('/products');
 //test
  console.log(response);
 };

    render() {
        return <h2>Hello Rocketseat</h2>;
    }
}