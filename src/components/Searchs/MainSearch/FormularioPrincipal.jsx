import React, { useState } from 'react';
import {
    Container,
    Row,
    Col
} from "reactstrap";
import DatePicker, { registerLocale } from "react-datepicker";
import es from 'date-fns/locale/es';
import "react-datepicker/dist/react-datepicker.css";
import { now } from '../../../services/date.service';
registerLocale('es', es);

const initialFilter = {
    price_from: '',
    price_to: '',
    type: '',
    date_from: now,
    date_to: now,
}

function Search(props) {

    const [filter, setFilter] = useState(initialFilter);

    function handleChange(event) {
        setFilter({
            ...filter,
            [event.target.name]: event.target.value,
        });
        props.onFilterChange({
            ...filter,
            [event.target.name]: event.target.value,
        })
    }

    const handleChangeDateIn = (date) => {
        setFilter({
            ...filter,
            date_from: date,
        });
        props.onFilterChange({
            ...filter,
            date_from: date,
        })
    }

    const handleChangeDateOut = (date) => {
        setFilter({
            ...filter,
            date_to: date,
        });
        props.onFilterChange({
            ...filter,
            date_to: date,
        })
    }

    return (
        <div className='search'>
            <Container className='filter'>
                <Row>
                    <Col lg={6}>
                        <input type='number' placeholder='Desde... ' name='price_from' value={filter.price_from}
                        onChange={handleChange} />
                    </Col>
                    <Col lg={6}>
                        <input type='number' placeholder='Hasta...' name='price_to' value={filter.price_to}
                        onChange={handleChange} />
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        <input type='text' placeholder='Simple, Doble, Enorme...' name='type' value={filter.type} onChange={handleChange} />
                    </Col>
                </Row>
                <Row className="datepickers">
                    <Col lg={6}>
                        <DatePicker
                            className='datepicker_from' 
                            name='date_from' 
                            dateFormat="dd/MM/yyyy"
                            value={filter.date_to} 
                            onChange={handleChangeDateIn} 
                            selected={filter.date_from}
                            minDate={now}
                            locale="es"
                        />
                    </Col>
                    <Col lg={6}>
                        <DatePicker 
                            className='datepicker_to' 
                            name='date_to' 
                            dateFormat="dd/MM/yyyy"
                            value={filter.date_to} 
                            onChange={handleChangeDateOut} 
                            selected={filter.date_to<filter.date_from?filter.date_from:filter.date_to}
                            minDate={filter.date_from}
                            locale="es"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
  );
}

export default Search;
