import React, { Component } from 'react'
import cup1 from '../assets/img/c-1.png'
import cup2 from '../assets/img/c-2.png'
import cup3 from '../assets/img/c-3.png'
import cup4 from '../assets/img/c-4.png'
import cup5 from '../assets/img/c-5.png'
import cup6 from '../assets/img/c-6.png'




class Cup extends Component {
    render() {
        return (

            <div className="col-md-2 col-sm-12 mt-5" >
                <div className="card  cup-background  text-white">
                    <img src={this.props.image} className="card-img" alt="..." />
                    <h5 className="card-title text-center text-dark">{this.props.title}</h5>
                </div>
            </div>
        )
    }
}




class Coffeecup extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">

                    <Cup image={cup1} title='Cappucino'/>
                    <Cup image={cup2} title='Latte'/>
                    <Cup image={cup3} title='Arabica'/>
                    <Cup image={cup4} title='Espresso'/>
                    <Cup image={cup5} title='Black'/>
                    <Cup image={cup6} title='Cortado'/>




                </div>


            </div>
        )
    }
}

export default Coffeecup