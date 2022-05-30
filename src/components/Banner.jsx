import React, { Component } from 'react'
import OurTeam from './OurTeam'
import effect from '../assets/img/effect.png'
import fullBanner from '../assets/img/full-with-banner-1.png'
import border from '../assets/img/border.png'
import dor from '../assets/img/dor.png'





 class Banner extends Component {
  render() {
    return (
      <section id="banner">
          <div className="upper_effect">
          <h1 className='text-center mt-5'>Testimonial</h1>
                    <div className='text-center'>
                        <img src={border} alt="" className='my-3' />
                    </div>
                    <div className="main__box">
                    <img src={dor} alt="" className='border__img' />

                        <OurTeam />

                    


                    </div>

          </div>
          <div>
              <img src={effect} alt="" />
          </div>
          <div className=''>
              <img src={fullBanner} style={{backgroundRepeat:"no-repeat",backgroundSize:"cover", backgroundPosition:'center'}} alt="" />
          </div>

      </section>
    )
  }
}

export default Banner