import React, {Component} from 'react';

import DashboardHeader from '../../common/Navigation/Header/Header';
import ProductionDashboard from './ProductionDashboard/ProductionDashboard';
import Operations from '../Operations/Operations';
import Records from '../Records/Records';
import SideNav from '../../common/SideNav/SideNav';

import './Dashboard.scss';

class Dashboard extends Component {
    state={
       selectedSidemenu: 'dashboard',
       isLoading: true,
       showEventDetails: false
    }
    componentDidMount(){
        this.setState({ isLoading: false });
    }
    onSelectMenu = (data) => {
       this.setState({ selectedSidemenu: data })
    }
    displayProfile = () => {
        this.setState({ selectedSidemenu: 'profile'})
    }
   displaySelectedContent = (selection) => {
        switch(selection){
            case 'dashboard':
                return <ProductionDashboard />;
            case 'operations':
                return <Operations />;
            case 'records':
                return <Records />;
            // case 'store':
            //     return <Store />
            // case 'market':
            //     return <Market />;
            // case 'forum':
            //     return <Forum />
            default:
                return <ProductionDashboard />;
        }
    }
    checkDisplay = (data) => {
        console.log( data, 'side state');
    }
    render(){
        return (
            <div className="wrapper">
                <div className="Dashboard">
                    <SideNav 
                        selectedSidemenu={this.onSelectMenu} 
                        showActiveNav={this.state.selectedSidemenu}
                        isSidebarExpanded={this.checkDisplay}
                         />
                    <div className="dashboard-content">
                        <DashboardHeader displayProfile={this.displayProfile} />
                        <main className="main">
                            {
                                this.displaySelectedContent(this.state.selectedSidemenu)
                            }
                        </main>
                    </div>
                </div>
            </div> 
        )
    }
};
export default Dashboard;
