import React, { Component } from 'react';
import Screen from "./Screen"
import Gallery from "./Gallery"
import Subscribe from "./Subscribe"

export default class Home extends Component {
  render() {
    return (
      <div>
        <Screen></Screen>
        <Gallery></Gallery>
        <Subscribe></Subscribe>
      </div>
      
    );
  }
}
