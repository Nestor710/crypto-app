import { Button, Menu, Typography, Avatar, MenuProps } from "antd";
import { Link } from 'react-router-dom'
import { HomeOutlined, BulbOutlined, FundOutlined, MenuOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(0);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {

    if (screenSize < 768) {
      setActiveMenu(false)
    } else {
      setActiveMenu(true)
    }

  }, [screenSize]);

  const items: MenuProps['items'] = [
    {
      label: <Link to="/">Home</Link>,
      icon: <HomeOutlined/>,
      key: 'home'
    },
    {
      label: <Link to="/cryptocurrencies">Cryptocurrencies</Link>,
      icon: <FundOutlined/>,
      key: 'cryptocurrencies'
    },
/*     {
      label: <Link to="/currencies-reference">Currencies Reference</Link>,
      icon: <MoneyCollectOutlined/>,
      key: 'currencies-reference'
    }, */
    {
      label: <Link to="/news">News</Link>,
      icon: <BulbOutlined/>,
      key: 'news'
    }
  ]
  return (
    <div className="nav-container">
        <div className="logo-container">
            <Avatar src="/images/cryptocurrency.png" size="large" />
            <Typography.Title level={2} className="logo">
                <Link to="/" >CryptoVerse</Link>
            </Typography.Title>
            <Button 
              className="menu-control-container" 
              onClick={() => setActiveMenu(!activeMenu)}
            >
              <MenuOutlined />
            </Button>
        </div>
        { activeMenu &&
          <div style={{ padding: '10px' }}>
            <Menu mode="vertical" theme="dark" items={items} />
          </div>
        }
    </div>
  )
}

export default Navbar