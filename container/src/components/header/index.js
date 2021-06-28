import React, { useState, useEffect } from "react";
import { Row, Col, Avatar } from 'antd'
import { MenuOutlined, BankOutlined } from '@ant-design/icons'
// import axios from 'axios'

const Header = (props) => {
    const [username] = useState('Roberto Lima')
    const [openSubmenuArea, setOpenSubmenuArea] = useState(false)

  useEffect(() => {
        async function getMenu() {
            getMenuByUser()
        }
        getMenu()
    // eslint-disable-next-line
    }, [])

    const getMenuByUser = async () => {
        
    }

    const goToSettings = (path) => {
        window.location.href = path
    }
    const logout = () => {

    }
    const openSubmenu = () => {
        setOpenSubmenuArea(true)
    }
    const closeSubmenu = () => {
        setOpenSubmenuArea(false)
    }
    const handleOnClickDogs = () => {
        window.location.href = '/dogs'
    };
    const handleOnClickCats = () => {
        window.location.href = '/cats'
    };
    const handleOnClickBoth = () => {
        window.location.href = '/'
    };
    return (
        <div className="menu-area">
            <Row>
                <Col lg={3} md={3} sm={5} xs={5} style={{ textAlign: 'center' }}>
                    <BankOutlined style={{ fontSize: '1.5rem', color: 'white', marginTop: '15px' }} />
                </Col>
                <Col lg={0} md={0} sm={14} xs={14} />
                <Col lg={0} md={0} sm={5} xs={5} style={{ textAlign: 'center' }}>
                    <div className="list-menu-area">
                        <MenuOutlined style={{ cursor: 'pointer', fontSize: '1.3rem' }} />
                    </div>
                </Col>
                <Col lg={17} md={17} sm={0} xs={0} style={{ textAlign: 'center' }}>
                <div className={'' === 'Home' ? 'link-area-active' : 'link-area'}>
                    <span onClick={handleOnClickBoth} className="link">CAT and DOG</span>
                </div>
                <div className={'' === 'Dog' ? 'link-area-active' : 'link-area'}>
                    <span onClick={handleOnClickDogs} className="link">DOG</span>
                </div>
                <div className={'' === 'Cat' ? 'link-area-active' : 'link-area'}>
                    <span onClick={handleOnClickCats} className="link">CAT</span>
                </div>
                </Col>
                <Col lg={3} md={3} sm={5} xs={5} style={{ textAlign: 'center' }}>
                <div onMouseLeave={closeSubmenu}>
                    <div onMouseOver={openSubmenu} className="link-area">
                        <Avatar style={{ marginTop: '-5px', marginRight: '8px' }} />
                        <span className="link">{username}</span>
                    </div>
                    {!openSubmenuArea ? null :
                        <div className="submenu-area">
                            <div className='link-area-submenu'>
                                <span onClick={() => goToSettings('path aqui')} className="link">Configurações</span>
                            </div>
                            <div className='link-area-submenu'>
                                <span onClick={logout} className="link">Logout</span>
                            </div>
                        </div>
                    }
                </div>  
                </Col>
            </Row>
        </div>
    );
}

export default Header;