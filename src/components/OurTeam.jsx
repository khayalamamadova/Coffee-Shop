import React, { Component } from 'react'
import tm1 from '../assets/img/t1.png'
import tm2 from '../assets/img/t2.png'



export class OurTeam extends Component {
    constructor(props) {
        super(props);
        this.nextMember = this.nextMember.bind(this);
        this.previousMember = this.previousMember.bind(this);
        this.state = {
            memberImg: tm2,
            memberName: 'Alex D.',
            memberAbout: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At error officia, corrupti voluptate praesentium dicta.'
        }

    }
    previousMember(){
        this.setState({
            memberImg: tm2,
            memberName: 'Alex D.',
            memberAbout: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At error officia, corrupti voluptate praesentium dicta.'
        })
    }

    nextMember(){
        this.setState({
            memberImg: tm1,
            memberName: 'Riya Patel',
            memberAbout: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At error officia, corrupti voluptate praesentium dicta.'
        })
    }
    render() {
        return (
            <div className="container">
                <div className="card" >
                    <img src={this.state.memberImg} className="card-img-top mt-5" alt="..." />
                    <div className="card-body">
                        <h1>{this.state.memberName}</h1>
                        <p className="card-text mb-5">{this.state.memberAbout}</p>
                    </div>
                </div>

                <div className="btn_container mt-5 text-center">
                    <button className='btn btn-success' onClick={this.nextMember}></button>
                    <button className='btn btn-success ms-2' onClick={this.previousMember}></button>
                </div>
            </div>



        )
    }
}

export default OurTeam