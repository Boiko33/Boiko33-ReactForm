import React from "react";
import Greetings from './Greetings';
import style from "./SimpleForm.module.css";
import TextField from "./TextField";


class SimpleForm extends React.Component {
    state = {
        firstName: "",
        firstNameError: "",
    };

    validateName = (name) => {
        const regex = /[A-Z a-z]{3,}/;

        return (
            !regex.test(name)
                ? "The name must contain at least three letters. Numbers and special characters are not allowed"
                : ""
        );
    };

    //First name
    onFirstNameBlur = () => {
        const { firstName } = this.state;
        const firstNameError = this.validateName(firstName);

        return this.setState({ firstNameError });
    };

    onFirstNameChange = (event) => {
        this.setState({
            firstName: event.target.value
        });
    };

    //Last name
    onLastNameBlur = () => {
        const { lastName } = this.state;
        const lastNameError = this.validateName(lastName);

        return this.setState({ lastNameError })
    }

    onLastNameChange = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    render() {

        const { firstNameError, firstName, lastNameError, lastName } = this.state;

        return (
            <div className={style.labelBody}>
                <TextField name="firstName"
                    label="First name:"
                    onChange={this.onFirstNameChange}
                    onBlur={this.onFirstNameBlur}
                    error={firstNameError} />

                <TextField name="lastName"
                    label="Last name:"
                    onChange={this.onLastNameChange}
                    onBlur={this.onLastNameBlur}
                    error={lastNameError} />
                <Greetings firstName={firstName} lastName={lastName} />
            </div>
        );
    }
}

export default SimpleForm;