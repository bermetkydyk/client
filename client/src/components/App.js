import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing/Landing';
import Bottombar from './Bottombar';
import Footer from './Footer';
import Summary from './Summary/Summary';
import Activity from './Activity/Activity';
import Goal from './Goal/Goal';
import Goals from './Goals/Goals';
import GoalNew from './AddGoal/GoalNew';
import 'bootstrap/dist/css/bootstrap.min.css';
import IncomeNew from './AddIncome/IncomeNew';
import ExpenseNew from './AddExpense/ExpenseNew';
import { GlobalStyle } from './Styles/GlobalStyle';

class App extends Component {
    
    componentDidMount(){
        this.props.fetchUser();
    }

    render (){
        return (
            <div>
                <GlobalStyle />
                <Header />
                <Router>
                    <div>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/summary" component={Summary} />
                        <Route exact path="/activity" component={Activity} />
                        <Route exact path="/goal" component={Goal} />
                        <Route exact path="/goals" component={Goals} />
                        <Route exact path="/add/income/new" component={IncomeNew} />
                        <Route exact path="/add/expense/new" component={ExpenseNew} />
                        <Route exact path="/add/goal/new" component={GoalNew} />
                    </div>
                </Router>
                <Bottombar />
                <Footer />
            </div>
        );
    }

};

export default connect(null, actions)(App);