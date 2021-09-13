import React, { Component } from 'react';
import s from './Filter.module.css';
import { v4 as uuidv4 } from 'uuid';

class Filter extends Component {
    render() {
        const { onChange, value } = this.props;
        const idF = uuidv4();

        return (
            <>
                <label
                    htmlFor={idF}
                    className={s.filter}
                >Find contacts by name
                </label>
                <input
                    id={idF}
                    className={s.filterInput}
                    type='text'
                    name='filter'
                    value={value}
                    onChange={onChange}
                />
             </>
        );
    }
}

export default Filter;