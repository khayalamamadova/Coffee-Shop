import React, { Component } from 'react'
import Button from '../Button'
import image7 from '../../assets/img/p7.png'
import image8 from '../../assets/img/p8.png'


export class Card3 extends Component {
    constructor(props){
        super(props);
        this.nextCoffee = this.nextCoffee.bind(this);
        this.previousCoffee = this.previousCoffee.bind(this)

        this.state={
            image:image7,
            productName: 'Black'

        }
        
    }
    nextCoffee (){
        this.setState({
            image:image8,
            productName: 'Black'

        })
    }

    previousCoffee(){
        this.setState({
            image:image7,
            productName: 'Black'
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

export default Card3