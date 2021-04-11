import React from 'react'
import { Product } from '../Product/Product'
import './Home.css'

export const Home = () => {
    return (
        <div className="home">
            <div className="home_container">
                <img 
                className="home_image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" alt=""/>
                <div className="home_row">
                    <Product 
                    id="1232321"
                    title='The Lean Startup'
                        price={39.99}
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
                        rating={5}
                    />
                    <Product
                    id="4632489"
                    title='Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode, A515-43-R19L, Silver'
                    image="https://images-na.ssl-images-amazon.com/images/I/41vMYgD92xL.jpg"
                    price={364.99}
                    rating={4}
                    />
                </div>
                <div className="home_row">
                <Product
                    id="4635889"
                    title='Acer SB220Q bi 21.5 Inches Full HD (1920 x 1080) IPS Ultra-Thin Zero Frame Monitor (HDMI & VGA Port), Black'
                    image="https://images-na.ssl-images-amazon.com/images/I/51I3UjD-Q1L.jpg"
                    price={93.99}
                    rating={5}
                    />
                   <Product
                    id="4678963"
                    title='Samsung Electronics EVO Select 256GB MicroSDXC UHS-I U3 100MB/s Full HD & 4K UHD Memory Card with Adapter (MB-ME256HA)'
                    image="https://images-na.ssl-images-amazon.com/images/I/41uSHYOKXSL.jpg"
                    price={29.99}
                    rating={4}
                    />
                    <Product
                    id="4642395"
                    title='Brother Inkjet Printer, MFC-J5845DW, INKvestment Color Inkjet All-in-One Printer with Wireless, Duplex Printing and Up to 1-Year of Ink In-box,'
                    image="https://m.media-amazon.com/images/I/71F3XKS52iL._AC_UL320_.jpg"
                    price={249.99}
                    rating={5}
                    />
                </div>
                <div className="home_row">
                <Product
                    id="4642753"
                    title='iBUYPOWER Gaming PC Computer Desktop Element Mini 9300 (AMD Ryzen 3 3100 3.6GHz, AMD Radeon RX 550 2GB, 8GB DDR4 RAM, 240GB SSD, Wi-Fi Ready, Windows 10 Home)'
                    image="https://images-na.ssl-images-amazon.com/images/I/71CXtWQZ5iL._AC_UL160_SR160,160_.jpg"
                    price={779.99}
                    rating={5}
                    />
                </div>
            </div>
        </div>
    )
}
