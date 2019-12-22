import React from "react";
import './input-field.styles.scss';

class InputField extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }
    handleChange = event => this.setState({text: event.target.value});

    render(){
        const {label, type, placeHolder } =this.props;
        return(
            <div>
                <label htmlFor={`${type}-input-id`} className={`input-label ${this.state.text ? '': 'hidden'}`}> {/*with htmlFor specified to input id, now the input and label are connected // if we click on label the input is focused */}
                    {label}
                </label>
                <input type={type} className="input-box" placeholder={placeHolder} id={`${type}-input-id`} required onChange={this.handleChange}/>
            </div>
        )
    }
};

export default InputField;