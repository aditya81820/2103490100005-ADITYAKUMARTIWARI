import React, { Component } from 'react'
import Navbarupper from './Navbarupper'
import ProductScreen from './ProductScreen'

export default class Secondscreen extends Component {
  render() {
    return (
      <div>
        <Navbarupper/>
        <ProductScreen/>
      </div>
    )
  }
}
