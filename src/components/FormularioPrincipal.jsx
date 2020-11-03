import React, { useState } from 'react';
import DatePicker, { registerLocale } from "react-datepicker";
import es from 'date-fns/locale/es';
import "react-datepicker/dist/react-datepicker.css";
registerLocale('es', es);

const initialFilter = {
    price_from: '',
    price_to: '',
    type: '',
    guest_from: '',
    date_from: new Date(),
    date_to: new Date(),
}

function Search(props) {

    const [filter, setFilter] = useState(initialFilter);
    console.log(props);

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
            <div className='filter'>
                <input type='number' placeholder='price from' name='price_from' value={filter.price_from}
                    onChange={handleChange} />
                <input type='number' placeholder='price to' name='price_to' value={filter.price_to}
                    onChange={handleChange} />
                <input type='number' placeholder='guest_from' name='guest_from' value={filter.guest_from}
                    onChange={handleChange} />
                <input type='text' placeholder='type' name='type' value={filter.type} onChange={handleChange} />
                <DatePicker 
                    name='date_from' 
                    dateFormat="dd/MM/yyyy"
                    value={filter.date_from==='' ? new Date() : filter.date_from} 
                    onChange={handleChangeDateIn} 
                    selected={filter.date_from}
                    minDate={new Date()}
                    locale="es"
                />
                <DatePicker 
                    name='date_to' 
                    dateFormat="dd/MM/yyyy"
                    value={filter.date_to} 
                    onChange={handleChangeDateOut} 
                    selected={filter.date_to<filter.date_from?filter.date_from:filter.date_to}
                    minDate={filter.date_from}
                    locale="es"
                />
            </div>
        </div>
  );
}

export default Search;
