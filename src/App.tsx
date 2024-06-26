import { Routes, Route, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import { Navbar, CurrencyRef, Homepage, CryptoCurrencies, CryptoDetails, News } from './components'
import './App.css'

const App = () => {
  return (
    <div className="app">
        <div className="navbar">
            <Navbar />
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
             <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/currencies-reference" element={<CurrencyRef />} />
                <Route path="/cryptocurrencies" element={<CryptoCurrencies />} />
                <Route path="/crypto/:coinId" element={<CryptoDetails />} />
                <Route path="/news" element={<News />} />
              </Routes>
            </div>
          </Layout>
          <div className="footer">
            <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>
              Cryptoverse <br/>
              All right reserved
            </Typography.Title>
            <Space>
              <Link to="/">Home</Link>
              <Link to="/exchange">Exchange</Link>
              <Link to="/news">News</Link>
            </Space>
          </div>  
        </div>
    </div>
  )
}

export default App