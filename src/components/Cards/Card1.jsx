import React, { Component } from 'react'
import Button from '../Button'
import image3 from '../../assets/img/p3.png'
import image4 from '../../assets/img/p4.png'


export class Card1 extends Component {
    constructor(props){
        super(props);
        this.nextCoffee = this.nextCoffee.bind(this);
        this.previousCoffee = this.previousCoffee.bind(this);

        this.state={
            image:image3,
            productName: 'Espresso'

        }
        
    }
    nextCoffee (){
        this.setState({
            image:image4,
            productName: 'Espresso'

        })
    }
    previousCoffee(){
        this.setState({
            image:image3,
            productName: 'Espresso'
        })
    }
    render() {
        return (

                <div className="card  shadow p-3 mb-5 bg-body rounded" >
                <img src={this.state.image}  className="card-img-top" onMouseEnter={this.nextCoffee} onMouseLeave={this.previousCoffee} alt="coffee" />
                <div className="card-body">
                    <h1 className="card-title text-center fs-3">{this.state.productName}</h1>
                    <h6 className="card-text text-center fs-6"><span className='text-muted text-decoration-line-through'>$3</span>$2</h6>
                </div>
               
                <Button />
               
            </div>


        )
    }
}

export default Card1