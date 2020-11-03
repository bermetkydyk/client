// IncomeForm shows a form for a user to add input

import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import GoalField from './GoalField';


class GoalForm extends Component {

    renderFields(){
        return (
            <div>
                <Field label="Income Type" type="text" name="title" component={GoalField} />
                <Field label="Amount" type="text" name="title" component={GoalField} />
                <Field label="Tag" type="text" name="title" component={GoalField} />
                <Field label="Notes" type="text" name="title" component={GoalField} />
                <Field label="Income Type" type="text" name="title" component={GoalField} />
            </div>
        );
    }

    render() {
        return (
            <div>
                <form
                    onSubmit={this.props.handleSubmit(values=> console.log(values))}
                >
                    {this.renderFields()}
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'GoalForm'
})(GoalForm);
