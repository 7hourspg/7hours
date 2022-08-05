import React from 'react'
import Landingpage from './Landingpage'
import Carousel from './Carousel'
import Ourteamcard from './Ourteamcard'
import Orderpage from './Orderpage'
import Footer from './Footer'
import Sidebar from './Sidebar'
import '../Components/Responsive.css'
import '../Components/App.css'
import '../Components/Sidebar.css'

function Home() {
    return (
        <>
            {/* <Sidebar /> */}
            <Landingpage />
            <Carousel />
            <Ourteamcard />
            <Orderpage />
            

        </>

    )
}

export default Home