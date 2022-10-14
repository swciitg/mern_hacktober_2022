import React from 'react'
import "./home.css"
import Header from '../Header/Header'
import Sidebar from '../sidebar/Sidebar'
const Home = () => {
    return (
        <div className='home'>
            <Sidebar />
            <Header />
        </div>
    )
}

export default Home