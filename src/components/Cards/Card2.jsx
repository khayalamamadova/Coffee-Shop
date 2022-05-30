import React, { Component } from 'react'
import Button from '../Button'
import image5 from '../../assets/img/p5.png'
import image6 from '../../assets/img/p6.png'


export class Card2 extends Component {
    constructor(props){
        super(props);
        this.nextCoffee = this.nextCoffee.bind(this);
        this.previousCoffee = this.previousCoffee.bind(this)

        this.state={
            image:image5,
            productName: 'Cappuchino'

        }
        
    }
    nextCoffee (){
        this.setState({
            image:image6,
            productName: 'Cappuchino'

        })
    }
    previousCoffee(){
        this.setState({
            image:image5,
            productName: 'Cappuchino'
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

export default Card2