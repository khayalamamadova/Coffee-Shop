import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './assets/style/style.css'
import Nav from  './components/Nav'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Second from './components/Second'
import Third from './components/Third'
import Coffeecup from './components/Coffeecup'
import Banner from './components/Banner'
import Footer from './components/Footer'




class App extends Component{
    render(){
        return(
            <Fragment>
            <Nav />
            <Navbar/>
            <Hero />
            <Second />
            <Third />
            <Coffeecup />
            <Banner />
            <Footer />
            </Fragment>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));
