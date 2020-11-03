import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchExpenses, fetchIncomes } from '../../actions';

import M from "materialize-css";

// var instance = M.Tabs.init(el, options);

class Activity extends Component {
  
    componentDidMount() {
        let tabs = document.querySelectorAll('.tabs');
    
        let options = {
      
        };
        
        M.Tabs.init(tabs, options);

        this.props.fetchExpenses();
        this.props.fetchIncomes();
    }
    
    renderExpenses(){
        //console.log(this.props);
        return this.props.expenses.map(expense => {
            return (
                <div className="container">
                    <div className='card darken-1' key={expense.expenseId}>
                        <div className="card-content">
                            <span className="card-title">Expense Type: {expense.expenseType}</span>
                            <p>Amount: {expense.realAmount}</p>
                            <p>Description: {expense.description}</p>
                            <p>Created At: {expense.createdAt}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }
    renderIncomes(){
        //console.log(this.props);
        return this.props.incomes.map(income => {
            return (
                <div className="container">
                    <div className='card darken-1' key={income.incomeId}>
                        <div className="card-content">
                            <span className="card-title">Income Type: {income.incomeType}</span>
                            <p>Amount: {income.realAmount}</p>
                            <p>Description: {income.description}</p>
                            <p>Created At: {income.createdAt}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }
    render() {

        return (
            <section class="container section" id="services">
                <div class="row">
                  {/* <div class="col s12 14">
                      <h2 class="indigo-text text-darken-4">What I do...</h2>
                      <p>my content</p>
                      </div> */}
                      <nav>
                    <div className="nav-wrapper white">
                        <p className="brand-logo center teal-text" style={{margin: "0px"}}>Activity</p>
                    </div>
                </nav>

                      <div class="col s12 16 offset-12">
                          <ul class="tabs">
                              <li class="tab col s6">
                                  <a href="#expense" class="teal-text">Expense</a>
                                  

                              </li>
                              <li class="tab col s6">
                                  <a href="#income" class="teal-text">Income</a>

                              </li>

                            </ul>
                            <div class="col s12" id="expense">
                                <p class="flow-text teal-text teal lighten-5">My expenses:</p>
                                {/* <p>my content</p> */}
                                {this.renderExpenses()}
                            </div>
                            <div class="col s12" id="income">
                                <p class="flow-text teal-text teal lighten-5">My income:</p>
                                {/* <p>my content</p> */}
                                {this.renderIncomes()}
                            </div>
                            
                    </div>
                    </div>
                    
                </section>
            
        );
    }
}


function mapStateToProps(state) {
    return { expenses: state.expenses, incomes: state.incomes };
}

export default connect(mapStateToProps, { fetchExpenses, fetchIncomes })(Activity);
