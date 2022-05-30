import React, { Component } from 'react'
import Button from '../Button'
import image1 from '../../assets/img/p1.png'
import image2 from '../../assets/img/p2.png'


export class Card extends Component {
    constructor(props){
        super(props);
        this.nextCoffee = this.nextCoffee.bind(this);
        this.previousCoffee = this.previousCoffee.bind(this);

        this.state={
            image:image1,
            productName: 'Arabica'

        }

    }
    nextCoffee (){
        this.setState({
            image:image2,
            productName: 'Arabica'

        })
    }
    previousCoffee(){
        this.setState({
            image:image1,
            productName: 'Arabica'
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

export default Card