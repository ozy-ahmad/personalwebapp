import React, { Component } from 'react';


import Content from '../components/Content';
import Header from '../components/Header'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
class Home extends Component {;
    render() {
        return (
            <div>
                <Navbar/>
                <Header/>
                <Content/>
                <Footer/>
            </div>
        )
    }
}
export default Home