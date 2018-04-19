import * as React from 'react';

import { ViewRow } from './ViewRow';
import { EditRow } from './EditRow';

export class CarTable extends React.Component {
    render() {
        const tableStyle = {
            border: "1px solid",
            borderCollapse: "collapse",
            width: "100%",
        };

        return <table style={tableStyle}>
            <thead className='requi'>
                <tr>
                    <th className='trStyle'>Make</th>
                    <th className='trStyle'>Model</th>
                    <th className='trStyle'>Year</th>
                    <th className='trStyle'>Color</th>
                    <th className='trStyle'>Price</th>
                    <th className='trStyle'>Action</th>
                </tr>
            </thead>
            <tbody>
                {this.props.cars.map(car => {
                    if (car === this.props.carToEdit) {
                        return <EditRow
                            car={car}
                            saveCar={this.props.saveCar}
                            cancelCar={this.props.cancelCar}>
                        </EditRow>
                    }
                    else {
                        return <ViewRow
                            car={car}
                            deleteCar={this.props.deleteCar}
                            editCar={this.props.editCar}>
                        </ViewRow>
                    }
                })
                }
            </tbody>
        </table>;
    }
}