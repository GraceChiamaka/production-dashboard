import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button, Popover, PopoverBody, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import History from '../../History/History';
import User from '../../../assets/images/user_photo.png';
import Logo from '../../../assets/images/logo_1.svg';
import Search from '../../../assets/images/icons/magnifying-glass-sm.svg';
import Mail from '../../../assets/images/icons/mail.svg';
import Cart from '../../../assets/images/icons/cart.svg';
import Profile from '../../../assets/images/profile.png';

import './Header.scss';

class DashboardHeader extends Component {
    state = {
        isPopoverOpen: false,
    }
    togglePopover = () => {
        this.setState({ isPopoverOpen: !this.state.isPopoverOpen });
    }

    render() {
        return (
            <header className="DashboardHeader">
                <nav class="navbar navbar-expand-lg bg-white">
                    <div className="container-fluid">
                        <a class="navbar-brand" href="#">
                            <img src={Logo} alt="sameday logo" className="logo" />
                        </a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                            aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                            <img src="" alt="" />
                        </button>
                        <div class="collapse navbar-collapse" id="basicExampleNav">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item  active">
                                    <a class="nav-link" href="#">
                                        <img src={Search} alt="Search icon" />
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" >
                                        <span className="HeaderIcon mr-3">
                                            <img src={Mail} alt="mail icon" />
                                            <span className="counter">3</span>
                                        </span>
                                        Message
                                    </Link>
                                </li>

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                        <span className="HeaderIcon mr-3">
                                            <img src={Cart} alt="cart icon" />
                                            <span className="counter">2</span>
                                        </span>
                                        Market Place
                                        </a>
                                    <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" >
                                        <span className="HeaderIcon mr-3">
                                            <i className="fa fa-bars "></i>
                                            <span className="counter">1</span>
                                        </span>
                                        Notifications
                                    </Link>
                                </li>

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle blue-caret" id="navbarDropdownMenuLink" data-toggle="dropdown"
                                        aria-haspopup="true" aria-expanded="false">
                                        <span className="HeaderIcon mr-3">
                                            <img src={Profile} alt="cart icon" className="profile" />
                                        </span>
                                        <br />
                                        Me
                                        </a>
                                    <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}
export default DashboardHeader;
