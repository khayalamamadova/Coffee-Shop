import React, { Component } from 'react'
import Card from './Cards/Card'
import Card1 from './Cards/Card1'
import Card2 from './Cards/Card2'
import Card3 from './Cards/Card3'
import border from '../assets/img/border.png'



class Second extends Component {

    render() {

        return (
            
            <section id="second__section ">
                <div className="title">


                    <h1 className='text-center mt-5'>Latest Product</h1>
                    <div className='text-center'>
                        <img src={border} alt="" className='my-3' />
                    </div>
                    <div className="btn_box text-center">
                        <button className='btn btn-success active'>All</button>
                        <button className='btn btn-light'>Latest</button>
                        <button className='btn btn-light'>Featured</button>
                    </div>
                </div>

                <div className="container card__container mt-5">
                    <div className="row">
                        <div className="col-md-3 col-sm-12">
                        <Card />
                        </div>

                        <div className="col-md-3 col-sm-12">
                        <Card1 />
                        </div>


                        <div className="col-md-3 col-sm-12">
                        <Card2 />
                        </div>


                        <div className="col-md-3 col-sm-12">
                        <Card3 />
                        </div>
                       


                      
                    </div>
                   
                </div>
            </section>
        )
    }
}

export default Second