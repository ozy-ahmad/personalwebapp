import React, { Component } from 'react'
import '../components/assets/styles/header.css'
import Bg from './assets/img/bg.jpg'

 class Header extends Component {
    render() {
        return (
            <div>
                <img className="bgImage" src={Bg} alt='bg' />
                <h1 className="greetingHeader">Hello,</h1>
                <h3 className="textHeader">
I am a full stack developer <br></br>
you can see some of my works on Portfolio <br></br>
I write blog and podcasting as a hobby</h3>

            </div>
            
        )
    }
}
export default Header