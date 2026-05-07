import React from 'react'
import logo from "../assets/logo.png"
import analyticsIcon from "../assets/analytics-icon.png"
import chatsIcon from "../assets/chats-icon.png"
import customersIcon from "../assets/customers-icon.png"
import dashboardIcon from "../assets/dashboard-icon.png"
import logoutIcon from "../assets/logout-icon.png"
import ordersIcon from "../assets/orders-icon.png"
import reviewsIcon from "../assets/reviews-icon.png"
import walletIcon from "../assets/wallet-icon.png"
import './css/SideBar.css'


const SideBar = () => {
    return (
        <div>
            <div className="logo">
                <img src={logo} alt="" />
                <div>
                    <h2>SaaSify</h2>
                    <p>Admin Dashboard</p>
                </div>
            </div>
            <hr />

            <div className="links-container">
                <div className='first'>
                    <img src={dashboardIcon} alt="" />
                    <p>Dashboard</p>
                </div>
                <div>
                    <img src={analyticsIcon} alt="" />
                    <p>Analytics</p>
                </div>
                <div>
                    <img src={ordersIcon} alt="" />
                    <p>Orders</p>
                </div>
                <div>
                    <img src={customersIcon} alt="" />
                    <p>Customers</p>
                </div>
                <div>
                    <img src={reviewsIcon} alt="" />
                    <p>Reviews</p>
                </div>
                <div>
                    <img src={chatsIcon} alt="" />
                    <p>Chats</p>
                </div>
                <div>
                    <img src={walletIcon} alt="" />
                    <p>Wallet</p>
                </div>
                <div>
                    <img src={logoutIcon} alt="" />
                    <p>Logout</p>
                </div>
            </div>

        </div>
    )
}

export default SideBar