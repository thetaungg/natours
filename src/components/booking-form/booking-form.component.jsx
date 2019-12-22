import React from "react";
import './booking-form.styles.scss';
import SecondaryHeading from "../heading-secondary/heading-secondary.component";
import InputField from "../input-field/input-field.component";
import RadioButton from "../radio-button/radio-button.component";
import Button from "../button/button.component";

class BookingForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    handleSubmit = event => event.preventDefault(); //without this every time we submit the form, the page got reloaded

    render() {
        return(
            <form className="form" onSubmit={this.handleSubmit}>
                <SecondaryHeading marginDir='bottom' spacing='medium' alignment='left' text='Start booking now' />
                <div className="form-group">
                    <InputField type='text' placeHolder='Full Name' label='Full name'/>
                </div>
                <div className="form-group">
                    <InputField type='email' placeHolder='Email address' label='Email'/>
                </div>
                <div className="form-group margin-bottom-medium">
                    <div className='form__radio-group'>
                        <RadioButton label='Small Tour Group'/>
                    </div>
                    <div className="form__radio-group">
                        <RadioButton label='Large Tour Group'/>
                    </div>
                </div>
                <div className="form-group">
                    <Button content='Next Step &rarr;' color='green' type='btn-primary'/>
                </div>
            </form>
        )
    }
}

export default BookingForm;