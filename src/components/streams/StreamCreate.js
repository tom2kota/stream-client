import React, {Component} from "react";
import {Field, reduxForm} from "redux-form";

class StreamCreate extends Component {

    renderError({error, touched}) {
        if (error && touched) {
            return <div className="ui error message">
                <div className="header">
                    {error}
                </div>
            </div>
        }

    }

    renderInput = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`

        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off"/>
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit(valueInput) {
        console.log('onSubmit(valueInput):   ...  ', valueInput)
    }

    render() {
        return (
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <h1>{this.props.form}</h1>
                <Field name="title" component={this.renderInput} label="Enter Title"/>
                <Field name="description" component={this.renderInput} label="Enter Description"/>
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

const validate = (valueInput) => {
    const errors = {}

    if (!valueInput.title) {
        errors.title = 'You must enter a title'
    }

    if (!valueInput.description) {
        errors.description = 'You must enter a description'
    }

    return errors
}

export default reduxForm({
    form: 'streamCreate', validate
})(StreamCreate)
