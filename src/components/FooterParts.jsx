import React, { Component } from 'react'



class Shadow extends Component {
    render() {
        return (
            <div className="shadow p-1 mb-2 bg-body rounded">
                <i class="fa-solid fa-angle-right me-2"></i>{this.props.menuName}
            </div>
        )
    }
}



class FooterParts extends Component {
    render() {
        return (
            <div className="col-md-3 col-sm-12">
                <h5 className='text-success lh-lg'>Information</h5>
                <Shadow menuName='Privacy Policy' />
                <Shadow menuName='Term Condition' />
                <Shadow menuName='Contact' />
                <Shadow menuName='About Us' />
            </div>
            
            
        )
    }
}

export default FooterParts