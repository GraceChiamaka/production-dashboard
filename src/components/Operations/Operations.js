import React, { useState } from 'react';

import { Row, Col, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, TabContent, TabPane, Nav, NavItem, NavLink, } from 'reactstrap';
import ProductIcon from '../../assets/images/icons/product.svg';
import Product from '../../assets/images/shirt.png';
import Clock from '../../assets/images/icons/clock.svg';
import classnames from 'classnames';

import './Operations.scss';

const Operations = () => {
    const [dropdownOpen, setOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('1');

    const toggleTab = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }
    const toggle = () => setOpen(!dropdownOpen);


    return (
        <div className="container-fluid Operations">
            <Row className="mt-5 justify-content-between">
                <Col md={7} lg={6}>
                    <h3>
                        <img src={ProductIcon} className="mr-3" alt="Product" />
                        <strong>Operations</strong>

                    </h3>

                </Col>
                <Col md={5} lg={6} className="text-right">
                    <Row>
                        <Col lg={6}>
                            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                                <DropdownToggle caret color="primary">
                                    Categories
                                    </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem >Header</DropdownItem>
                                    <DropdownItem >Action</DropdownItem>
                                    <DropdownItem>Another Action</DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>Another Action</DropdownItem>
                                </DropdownMenu>
                            </ButtonDropdown>
                        </Col>
                        <Col lg={6}>
                            <div className="input-group mt-2">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">
                                        <i className="fa fa-search"></i>
                                    </span>
                                </div>
                                <input type="text" className="form-control grey-bg" aria-label="search" aria-describedby="basic-addon1" />
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="justify-content-between mt-5">
                <Col lg={6}>
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '1' })}
                                onClick={() => { toggleTab('1'); }}
                            >
                                All Productions
                                    <span className="ml-2 p">192</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '2' })}
                                onClick={() => { toggleTab('2'); }}
                            >
                                Awaiting Production
                                    <span className=" red-badge-round ml-2">19</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: activeTab === '3' })}
                                onClick={() => { toggleTab('3'); }}
                            >
                                Completed
                                </NavLink>
                        </NavItem>
                    </Nav>

                </Col>
                <Col lg={5}>
                    <button className="btn btn-white btn-md rounded font-weight-bold">Print Worksheet</button>
                    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                        <DropdownToggle caret color="primary" className="rounded btn-md">
                            Categories
                                    </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem >Mark as Complete</DropdownItem>
                            <DropdownItem >Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
                    <button className="btn btn-md grey-bg-2 white-text rounded">Save</button>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col lg={12}>
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead className="grey-bg">
                                        <tr>
                                            <th>
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" name="itemSelect" id="itemSelect1" />
                                                    <label class="custom-control-label" for="itemSelect"></label>
                                                </div>
                                            </th>
                                            <th>Order #</th>
                                            <th>Item #</th>
                                            <th>Details </th>
                                            <th>Colors</th>
                                            <th>Qty</th>
                                            <th>Print Type</th>
                                            <th>Delivery Method</th>
                                            <th>Delivery Time</th>
                                            <th>Production Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" name="itemSelect" id="itemSelect2" />
                                                    <label class="custom-control-label" for="itemSelect"></label>
                                                </div>
                                            </td>
                                            <td>#232JODJSDKN2</td>
                                            <td>#232JODJSDKN2</td>
                                            <td>
                                                <Row>
                                                    <Col lg={3}><img src={Product} className alt="item" /></Col>
                                                    <Col lg={8}>No Minimum - More Color Available - Gildan unisex ultra cotton T- shirt (NY1)</Col>
                                                </Row>

                                            </td>
                                            <td>
                                                <button className="btn btn-md btn-primary rounded">Royal</button>
                                            </td>
                                            <td> L x 4</td>
                                            <td>DTG Print</td>
                                            <td width="100">
                                                <Row>
                                                    <Col lg={3}> <img src={Clock} className="delivery" alt="" /></Col>
                                                    <Col lg={8}><p className="text-danger ml-2">Rush Shipping</p></Col>
                                                </Row>
                                            </td>
                                            <td width="150">
                                                <p className="mb-0">23 - June - 2019</p>
                                                <p className="light-text">Time Left <span className="text-green">10:00:00</span></p>
                                            </td>
                                            <td>
                                                <p className="text-green text-center">
                                                    Running <br /> 2 of 5
                                                    </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" name="itemSelect" id="itemSelect2" />
                                                    <label class="custom-control-label" for="itemSelect"></label>
                                                </div>
                                            </td>
                                            <td>#232JODJSDKN2</td>
                                            <td>#232JODJSDKN2</td>
                                            <td>
                                                <Row>
                                                    <Col lg={3}><img src={Product} className alt="item" /></Col>
                                                    <Col lg={8}>No Minimum - More Color Available - Gildan unisex ultra cotton T- shirt (NY1)</Col>
                                                </Row>

                                            </td>
                                            <td>
                                                <button className="btn btn-md btn-primary rounded">Royal</button>
                                            </td>
                                            <td> L x 4</td>
                                            <td>DTG Print</td>
                                            <td>
                                                <p className="text-primary ml-2 font-weight-bold"> <strong>Pickup Order</strong> </p>
                                            </td>
                                            <td width="150">
                                                <p className="mb-0">23 - June - 2019</p>
                                                <p className="light-text">Time Left <span className="text-green">10:00:00</span></p>
                                            </td>
                                            <td>
                                                <p className="text-green text-center">
                                                    Running <br /> 2 of 5
                                                    </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </TabPane>
                        <TabPane tabId="2">
                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead className="grey-bg">
                                        <tr>
                                            <th>
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" name="itemSelect" id="itemSelect1" />
                                                    <label class="custom-control-label" for="itemSelect"></label>
                                                </div>
                                            </th>
                                            <th>Order #</th>
                                            <th>Item #</th>
                                            <th>Details </th>
                                            <th>Colors</th>
                                            <th>Qty</th>
                                            <th>Print Type</th>
                                            <th>Delivery Method</th>
                                            <th>Delivery Time</th>
                                            <th>Production Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" name="itemSelect" id="itemSelect2" />
                                                    <label class="custom-control-label" for="itemSelect"></label>
                                                </div>
                                            </td>
                                            <td>#232JODJSDKN2</td>
                                            <td>#232JODJSDKN2</td>
                                            <td>
                                                <Row>
                                                    <Col lg={3}><img src={Product} className alt="item" /></Col>
                                                    <Col lg={8}>No Minimum - More Color Available - Gildan unisex ultra cotton T- shirt (NY1)</Col>
                                                </Row>

                                            </td>
                                            <td>
                                                <button className="btn btn-md btn-primary rounded">Royal</button>
                                            </td>
                                            <td> L x 4</td>
                                            <td>DTG Print</td>
                                            <td width="100">
                                                <Row>
                                                    <Col lg={3}> <img src={Clock} className="delivery" alt="" /></Col>
                                                    <Col lg={8}><p className="text-danger ml-2">Rush Shipping</p></Col>
                                                </Row>
                                            </td>
                                            <td width="150">
                                                <p className="mb-0">23 - June - 2019</p>
                                                <p className="light-text">Time Left <span className="text-green">10:00:00</span></p>
                                            </td>
                                            <td>
                                                <p className="text-green text-center">
                                                    Running <br /> 2 of 5
                                                    </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" name="itemSelect" id="itemSelect2" />
                                                    <label class="custom-control-label" for="itemSelect"></label>
                                                </div>
                                            </td>
                                            <td>#232JODJSDKN2</td>
                                            <td>#232JODJSDKN2</td>
                                            <td>
                                                <Row>
                                                    <Col lg={3}><img src={Product} className alt="item" /></Col>
                                                    <Col lg={8}>No Minimum - More Color Available - Gildan unisex ultra cotton T- shirt (NY1)</Col>
                                                </Row>

                                            </td>
                                            <td>
                                                <button className="btn btn-md btn-primary rounded">Royal</button>
                                            </td>
                                            <td> L x 4</td>
                                            <td>DTG Print</td>
                                            <td>
                                                <p className="text-primary ml-2 font-weight-bold"> <strong>Pickup Order</strong> </p>
                                            </td>
                                            <td width="150">
                                                <p className="mb-0">23 - June - 2019</p>
                                                <p className="light-text">Time Left <span className="text-green">10:00:00</span></p>
                                            </td>
                                            <td>
                                                <p className="text-green text-center">
                                                    Running <br /> 2 of 5
                                                    </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </TabPane>
                        <TabPane tabId="3">
                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead className="grey-bg">
                                        <tr>
                                            <th>
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" name="itemSelect" id="itemSelect1" />
                                                    <label class="custom-control-label" for="itemSelect"></label>
                                                </div>
                                            </th>
                                            <th>Order #</th>
                                            <th>Item #</th>
                                            <th>Details </th>
                                            <th>Colors</th>
                                            <th>Qty</th>
                                            <th>Print Type</th>
                                            <th>Delivery Method</th>
                                            <th>Delivery Time</th>
                                            <th>Production Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" name="itemSelect" id="itemSelect2" />
                                                    <label class="custom-control-label" for="itemSelect"></label>
                                                </div>
                                            </td>
                                            <td>#232JODJSDKN2</td>
                                            <td>#232JODJSDKN2</td>
                                            <td>
                                                <Row>
                                                    <Col lg={3}><img src={Product} className alt="item" /></Col>
                                                    <Col lg={8}>No Minimum - More Color Available - Gildan unisex ultra cotton T- shirt (NY1)</Col>
                                                </Row>

                                            </td>
                                            <td>
                                                <button className="btn btn-md btn-primary rounded">Royal</button>
                                            </td>
                                            <td> L x 4</td>
                                            <td>DTG Print</td>
                                            <td width="100">
                                                <Row>
                                                    <Col lg={3}> <img src={Clock} className="delivery" alt="" /></Col>
                                                    <Col lg={8}><p className="text-danger ml-2">Rush Shipping</p></Col>
                                                </Row>
                                            </td>
                                            <td width="150">
                                                <p className="mb-0">23 - June - 2019</p>
                                                <p className="light-text">Time Left <span className="text-green">10:00:00</span></p>
                                            </td>
                                            <td>
                                                <p className="text-green text-center">
                                                    Running <br /> 2 of 5
                                                    </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="custom-control custom-checkbox">
                                                    <input type="checkbox" class="custom-control-input" name="itemSelect" id="itemSelect2" />
                                                    <label class="custom-control-label" for="itemSelect"></label>
                                                </div>
                                            </td>
                                            <td>#232JODJSDKN2</td>
                                            <td>#232JODJSDKN2</td>
                                            <td>
                                                <Row>
                                                    <Col lg={3}><img src={Product} className alt="item" /></Col>
                                                    <Col lg={8}>No Minimum - More Color Available - Gildan unisex ultra cotton T- shirt (NY1)</Col>
                                                </Row>

                                            </td>
                                            <td>
                                                <button className="btn btn-md btn-primary rounded">Royal</button>
                                            </td>
                                            <td> L x 4</td>
                                            <td>DTG Print</td>
                                            <td>
                                                <p className="text-primary ml-2 font-weight-bold"> <strong>Pickup Order</strong> </p>
                                            </td>
                                            <td width="150">
                                                <p className="mb-0">23 - June - 2019</p>
                                                <p className="light-text">Time Left <span className="text-green">10:00:00</span></p>
                                            </td>
                                            <td>
                                                <p className="text-green text-center">
                                                    Running <br /> 2 of 5
                                                    </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </TabPane>
                    </TabContent>
                </Col>
            </Row>
        </div>
    )
}

export default Operations;