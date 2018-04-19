import * as React from 'react';


export class ViewRow extends React.Component {
    render() {
        const tdStyle = {
            textalign: "center",
            valign: "middle",
        };

        return <tr>
            <td>
                {this.props.car.make}
            </td>
            <td>
                {this.props.car.model}
            </td>
            <td>
                {this.props.car.year}
            </td>
            <td>
                {this.props.car.color}
            </td>
            <td>
                {this.props.car.price}
            </td>
            <td style={tdStyle}>
                <button type="button" onClick={() => this.props.editCar(this.props.car)}>Edit Car</button>
                <button type="button" onClick={() => this.props.deleteCar(this.props.car)}>Delete Car</button>
            </td>
        </tr>
    }
}