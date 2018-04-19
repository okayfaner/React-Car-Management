import * as React from 'react';

export class CarForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            carMakeInput: '',
            carModelInput: '',
            carYearInput: '',
            carColorInput: '',
            carPriceInput: '',
        };
    }

    submitCar = () => {
        this.props.onSubmitCar({
            make:this.state.carMakeInput, 
            model: this.state.carModelInput, 
            year: this.state.carYearInput, 
            color: this.state.carColorInput, 
            price: this.state.carPriceInput,
        });
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }


    render() {
        return <form>
            <div>
                <label htmlFor="car-make-input">New Car Make:</label>
                <input type="text" id="car-make-input" name="carMakeInput"
                    value={this.state.carMakeInput}
                    onChange={this.onChange} />

                <label htmlFor="car-model-input">New Car Model:</label>
                <input type="text" id="car-model-input" name="carModelInput"
                    value={this.state.carModelInput}
                    onChange={this.onChange} />

                <label htmlFor="car-year-input">New Car Year:</label>
                <input type="text" id="car-year-input" name="carYearInput"
                    value={this.state.carYearInput}
                    onChange={this.onChange} />

                <label htmlFor="car-color-input">New Car Color:</label>
                <input type="text" id="car-color-input" name="carColorInput"
                    value={this.state.carColorInput}
                    onChange={this.onChange} />

                <label htmlFor="car-price-input">New Car Price:</label>
                <input type="text" id="car-price-input" name="carPriceInput"
                    value={this.state.carPriceInput}
                    onChange={this.onChange} />
            </div>
            <button type="button" onClick={this.submitCar}>Add Car</button>
        </form>
    }
}
