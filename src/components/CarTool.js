import * as React from 'react';

import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';
import Car from './Car'

export class CarTool extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cars: this.props.cars.concat(),
            carToEdit: new Car(null, null, null, null, null),
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }


    addCar = (newCar) => {
        this.setState({
            cars: this.state.cars.concat(newCar),
        });
    }

    deleteCar = (carDelete) => {
        const index = this.state.cars.indexOf(carDelete);
        this.setState({
            cars: this.state.cars.slice(0, index).concat(this.state.cars.slice(index + 1)),
        });
    }

    saveCar = (carBeforeEdit, carAfterEdit) => {
        const index = this.state.cars.indexOf(carBeforeEdit);
        this.setState({
            cars: this.state.cars.slice(0, index).concat(carAfterEdit).concat(this.state.cars.slice(index + 1)),
        });
    }

    editCar = (car) => {
        this.setState({
            carToEdit: car,
        });
    }

    cancelCar = () => {
        this.setState({
            cars: this.state.cars.concat(),
            carToEdit: new Car(),
        });
    }

    render() {
        return <div>
            <ToolHeader headerText="Oukan's User Car Lot"></ToolHeader>

            <CarTable
                cars={this.state.cars}
                carToEdit={this.state.carToEdit}
                deleteCar={this.deleteCar}
                saveCar={this.saveCar}
                cancelCar={this.cancelCar}
                editCar={this.editCar}>
            </CarTable>

            <CarForm onSubmitCar={this.addCar} />
        </div>;
    }
}