import * as React from 'react';


export class EditRow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            carMakeInput: this.props.car.make,
            carModelInput:  this.props.car.model,
            carYearInput:  this.props.car.year,
            carColorInput:  this.props.car.color,
            carPriceInput:  this.props.car.price,
        };
    }

    saveCar = () => {
        this.props.saveCar(this.props.car, {
            make: this.state.carMakeInput,
            model: this.state.carModelInput,
            year: this.state.carYearInput,
            color: this.state.carColorInput,
            price: this.state.carPriceInput,
        })
    }

    cancelCar = () => {
        this.props.cancelCar();
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    render() {
        const tdStyle = {
            textalign: "center",
            valign: "middle",
        };

        return <tr>
            <td> <input type='text' name='carMakeInput' value={this.state.carMakeInput} onChange={this.onChange}/></td>
            <td> <input type='text' name='carModelInput' value={this.state.carModelInput} onChange={this.onChange}/></td>
            <td> <input type='text' name='carYearInput' value={this.state.carYearInput} onChange={this.onChange}/></td>
            <td> <input type='text' name='carColorInput' value={this.state.carColorInput} onChange={this.onChange}/></td>
            <td> <input type='text' name='carPriceInput' value={this.state.carPriceInput} onChange={this.onChange}/></td>
            <td style={tdStyle}>
                <button type="button" onClick={this.saveCar}>Save Car</button>
                <button type="button" onClick={this.cancelCar}>Cancel Edit</button>
            </td>
        </tr>
    }
}