import React, {Component} from 'react'
import '../components/assets/styles/navbar.css'
class Navbar extends Component {
    render() {
        return (
            <div className='bg-color'>
                <ul>
                    <li>Home</li>
                    <li>Portfolio</li>
                    <li>Blog</li>
                    <li>Podcast</li>
                </ul>
            </div>
        )
    }
}
export default Navbar