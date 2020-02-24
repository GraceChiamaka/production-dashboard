import React, { Component } from 'react';


import Logo from '../../assets/images/logo.png';
import FileIcon from '../../assets/images/icons/file.svg';
import CartIcon from '../../assets/images/icons/cart-white.svg';
import DashIcon from '../../assets/images/icons/dashboard.svg';
import Market from '../../assets/images/icons/supply.svg';
import ChatIcon from '../../assets/images/icons/chat.svg';
import SettingsIcon from '../../assets/images/icons/settings.svg';


import './SideNav.scss';

import Timer from '../../assets/images/icons/time-left.svg';

class sideNav extends Component {
    state = {
        activeMenu: 'events',
        showFullOptions: false
    }
    componentDidMount() {
    }
    checkActiveSideNav = () => {
        console.log('from inside side nav')
    }
    showFullSidebar = () => {
        const Nav = document.querySelector('.SideNav');
        if (Nav.classList.contains('SideNav-expand')) {
            Nav.classList.remove('SideNav-expand');
        } else {
            Nav.classList.add('SideNav-expand');
        }
        this.isNavOpen()
    }
    isNavOpen = () => {
        const Nav = document.querySelector('.SideNav');
        if (Nav.classList.contains('SideNav-expand')) {
            console.log('navbar is open')
            this.setState({ showFullOptions: true })
        } else {
            console.log('sidenav is closed');
            this.setState({ showFullOptions: false })
        }
    }

    render() {
        console.log(this.state.showFullOptions, 'render')
        return (
            <div className="SideNav ">
                <div className="text-center logo">
                    <button className="btn bg-transparent no-shadow" onClick={this.showFullSidebar}>
                        <i className="fa fa-bars fa-2x white-text"></i>
                    </button>
                </div>
                <div className="side-nav-container">
                    <ul className="mt-auto">
                        <li className={'sidenav-item ' + (this.props.activeMenu === 'dashboard' ? 'active' : '')}
                            onClick={() => this.props.selectedSidemenu('dashboard')}
                            title="Dashboard">
                            {
                                this.state.showFullOptions ?
                                    <span className="menu__item-desktop">
                                        <span className="icon mr-3">
                                            <img src={DashIcon} alt="side nav icon timer" />
                                        </span>
                                        Dashboard
                                    </span> :
                                    <span className="menu__item-mobile" >
                                        <img src={DashIcon} alt="" />
                                    </span>
                            }
                        </li>

                        <li className={'sidenav-item ' + (this.props.activeSideNav === 'operations' ? 'active' : '')}
                            onClick={() => this.props.selectedSidemenu('operations')}
                            title="Operations">
                            {
                                this.state.showFullOptions ?
                                    <span className="menu__item-desktop">
                                        <span className="icon mr-3">
                                            <span className="timer">
                                                <img src={Timer} alt="side nav icon operations" />
                                            </span>
                                            <span className="counter">1</span>
                                        </span>
                                        Operations
                                    </span> :
                                    <span className="menu__item-mobile" title="Operations">
                                        <span className="icon mr-3">
                                            <span className="timer">
                                                <img src={Timer} alt="side nav icon operations" />
                                            </span>
                                            <span className="counter">1</span>
                                        </span>
                                    </span>
                            }
                        </li>
                        <li className={"sidenav-item " + (this.props.activeSideNav === 'permissions' ? 'active' : '')}
                            onClick={() => this.props.selectedSidemenu('records')}
                            title="Records">
                            {
                                this.state.showFullOptions ?
                                    <span className="menu__item-desktop">
                                        <span className="icon mr-3">
                                            <img src={FileIcon} alt="side nav file icon" />
                                            <span className="counter">1</span>
                                        </span>
                                        Records
                                    </span> :
                                    <span className="menu__item-mobile" title="Records">
                                        <img src={FileIcon} alt="event menu icon" />
                                        <span className="counter">1</span>
                                    </span>
                            }
                        </li>
                        <li className={"sidenav-item " + (this.props.activeSideNav === 'store' ? 'active' : '')}
                            onClick={() => this.props.selectedSidemenu('store')}
                            title="supply store">
                            {
                                this.state.showFullOptions ?
                                    <span className="menu__item-desktop">
                                        <span className="icon mr-3"></span>
                                        <img src={CartIcon} alt="side nav cart icon" />
                                    </span> :
                                    <span className="menu__item-mobile" title="store">
                                        <img src={CartIcon} alt="event menu icon" />
                                    </span>
                            }
                        </li>
                        <li className="sidenav-item" onClick={() => this.props.selectedSidemenu('market')}
                            title="Market Place">
                            {
                                this.state.showFullOptions ?
                                    <span className="menu__item-desktop">
                                        <span className="icon mr-3">
                                            <img src={Market} alt="" />
                                        </span>
                                        Market Place
                                    </span> :
                                    <span className="menu__item-mobile" title="Market Place">
                                        <img src={Market} alt="Market place Icon " />
                                    </span>
                            }
                        </li>
                        <li className="sidenav-item" onClick={() => this.props.selectedSidemenu('forum')}
                            title="Forum">
                            {
                                this.state.showFullOptions ?
                                    <span className="menu__item-desktop">
                                        <span className="icon mr-3">
                                            <img src={ChatIcon} alt="chat icon " />
                                        </span>
                                        Forum
                                    </span> :
                                    <span className="menu__item-mobile" title="Forum">
                                        <img src={ChatIcon} alt="chat  icon" />
                                    </span>
                            }
                        </li>
                    </ul>
                    <ul className="sidenav-footer mb-auto">
                        <li className="sidenav-item mb-0 " onClick={this.logOutUser} title="Logout">
                            <p className="sidenav-link white-text">
                                {
                                    this.state.showFullOptions ?
                                        <span className="menu__item-desktop"> <img src={SettingsIcon} alt="" /> Settings</span>
                                        :
                                        <span className="menu__item-mobile" >
                                            <img src={SettingsIcon} className="" alt="event menu icon" />
                                        </span>
                                }
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }

}
export default sideNav;
