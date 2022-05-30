import React, { Component } from 'react'
import poster1 from '../assets/img/poster-1-2.png'
import poster2 from '../assets/img/poster-2-1.png'



 class Elements extends Component {
    render() {
        return (
            <div className="col-6 col-md-6 col-sm-12 placeholder-wave">
                <div className="card  text-white">
                    <img src={this.props.poster} className="card-img" alt="..." />
                    <div className="card-img-overlay d-flex flex-column align-items-end  justify-content-center text-dark">
                        <h5 className="card-title fs-3 me-5">{this.props.discount}</h5>
                        <h1 className="card-text fs-1 my-3 me-4">{this.props.mainTitle}</h1>
                        <button className="btn btn-secondary me-5">Buy Now</button>
                    </div>
                </div>
            </div>
        )
    }
}


class Third extends Component {
    render() {
        return (
            <section id="third__section ">
                <div className="container-fluid ">
                    <div className="row">
                        <Elements  poster={poster1} discount='20% Off' mainTitle='Americano Coffee'/>
                        <Elements  poster={poster2} discount='20% Off' mainTitle='Iced Coffee'/>

                    </div>
                </div>
            </section>
        )
    }
}

export default Third