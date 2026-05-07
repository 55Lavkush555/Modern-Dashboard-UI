import { useState } from 'react'
import LineChart from './components/LineChart.jsx'
import DonutChart from "./components/DonutChart.jsx";
import SideBar from './components/SideBar.jsx';
import cartIcon from "./assets/cart-icon.png";
import contactIcon from "./assets/contact-icon.png";
import dollarIcon from "./assets/dollar-icon.png";
import menuIcon from "./assets/menu-icon.png";
import './App.css'
import ProgressRing from './components/ProgressRing.jsx';
import CustomerDistribution from './components/CustomerDistribution.jsx';
import MobileNav from './components/MobileNav.jsx';

function App() {
  const [count, setCount] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const navigatorStyle = { display: `${isOpen ? "block" : "none"}`, transform: `translateX(${isOpen ? "0" : "-100%"})` }
  const mainStyle = { display: `${isOpen ? "none" : "block"}`}

  return (
    <>
      <div className="section-container">

        <div className="sidebar">
          <SideBar/>
        </div>

        <div className="navigator" style={navigatorStyle}><MobileNav setIsOpen={setIsOpen} /></div>

        <div className="main" style={mainStyle}>
          <nav>
            <button onClick={()=>(setIsOpen(true))}>☰</button>
          </nav>

          <div className="main-header">
            <h1>Dashboard Overview</h1>
            <p>Welcome Back! Here what's happening today.</p>
          </div>

          <div className='status-container'>
            <div className="status-card">
              <img src={cartIcon} alt="" />
              <p>Total orders</p>
              <h2>2,847</h2>
            </div>
            <div className="status-card">
              <img src={contactIcon} alt="" />
              <p>Total customers</p>
              <h2>1,429</h2>
            </div>
            <div className="status-card">
              <img src={dollarIcon} alt="" />
              <p>Total revenue</p>
              <h2>$48,839</h2>
            </div>
            <div className="status-card">
              <img src={menuIcon} alt="" />
              <p>Menu items</p>
              <h2>156</h2>
            </div>
          </div>

          <div className="analytics-overview">
            <h3>Analytics Overview</h3>

            <div className="analytics-container">
              <div className="analytics-card">
                <p>Order Status</p>
                <DonutChart />
                <ul>
                  <li>Completed <span>65%</span></li>
                  <li>Processing <span>25%</span></li>
                  <li>Cancelled <span>10%</span></li>
                </ul>
              </div>

              <div className="analytics-card">
                <p>Order Status</p>
                <ProgressRing />
                <ul>
                  <li>Completed <span>65%</span></li>
                  <li>Processing <span>25%</span></li>
                  <li>Cancelled <span>10%</span></li>
                </ul>
              </div>

              <CustomerDistribution />
            </div>
          </div>

          <div className='linechart-container'>
            <div>
              <p>Total Revenue</p>
              <button>2025</button>
            </div>

            <LineChart />
          </div>

        </div>
      </div>
    </>
  )
}

export default App
