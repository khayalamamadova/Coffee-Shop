import React, { Component } from 'react'
import bg1 from '../assets/img/banner-1.png'
import bg2 from '../assets/img/banner-2.png'
import bg3 from '../assets/img/banner-3.png'


class Hero extends Component {
  render() {
    return (
      <section id="hero__one">
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
          </div>
          <div className="carousel-inner placeholder-wave">
            <div className="carousel-item active" data-bs-interval={1000}>
              <img src={bg1} className="d-block w-100" alt="banner1" />
              <div className=" carousel-caption d-none d-md-block">
                <h1>Cold Brew Coffee</h1>
                <p className='my-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae accusamus numquam dicta delectus tenetur a quas, esse illum vero dolore.</p>
                <button className='btn btn-success'>Shop Now</button>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval={2000}>
              <img src={bg2} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h1>New Collection</h1>
                <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam excepturi enim est ex harum voluptates doloremque voluptas fuga velit et.</p>
                <button className='btn btn-success'>Shop Now</button>
              </div>
            </div>
            <div className="carousel-item">
              <img src={bg3} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h1>Percolator Coffee</h1>
                <p className='my-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint, mollitia quo. Unde, dicta delectus! Minus nulla quis ea ex quod.</p>
                <button className='btn btn-success'>Shop Now</button>

              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      </section>
    )
  }
}

export default Hero