import React, { Component } from 'react'
import Newcard from './newcard';

export default class ProductScreen extends Component {

    constructor() {
        console.log("Hello")
        const data1 = [
            {
                "productName": "Laptop 1",
                "price": 2236,
                "rating": 4.7,
                "discount": 63,
                "availability": "yes"
            },
            {
                "productName": "Laptop 13",
                "price": 1244,
                "rating": 4.5,
                "discount": 45,
                "availability": "out-of-stock"
            },
            {
                "productName": "Laptop 3",
                "price": 9102,
                "rating": 4.44,
                "discount": 98,
                "availability": "out-of-stock"
            },
            {
                "productName": "Laptop 11",
                "price": 2652,
                "rating": 4.12,
                "discount": 70,
                "availability": "yes"
            }
        ]


        super();
        this.state = {
            products: data1

        }

    }

    render() {
        return (
            <div>
                <div className='Container'>
                    <div className='grid grid-cols-3 ml-24 mr-24'>
                        {
                            this.state.products.map((element) => {
                                return <div key={element.productName} className='px-2 py-2'>
                                    <Newcard name={element.productName} price={element.price} availability={element.availability} discount={element.discount} rating={element.rating}/>

                                </div>


                            })
                        }

                    </div>
                </div>
            </div>
        )
    }
}
