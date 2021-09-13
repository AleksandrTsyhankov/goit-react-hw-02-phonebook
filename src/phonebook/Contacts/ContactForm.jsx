import React, { Component } from 'react';
import s from './ContactStyles.module.css';
import { v4 as uuidv4 } from 'uuid';

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }

    handleChange = e => {
        const { name, value } = e.currentTarget;

        this.setState({
            [name]: value
        })
    }

    clearState = () => {
        return this.setState({
            name: '',
            number: ''
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const { name, number } = this.state;

        

        this.props.onSubmit(name, number);
        this.clearState();
    }

    render() {
        
        const {name, number} = this.state;

        const idF1 = uuidv4();
        const idF2 = uuidv4();

        return (
<>
            <form className={s.form} onSubmit={this.handleSubmit}>
                <label className={s.label} htmlFor={idF1}>Name</label>
                    <input
                    id={idF1}
                    className={s.inputName}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    onChange={this.handleChange}
                    value={name}
                    />

                    <label className={s.label} htmlFor={idF2}>Number</label>
                    <input
                    id={idF2}
                    className={s.inputTel}
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    onChange={this.handleChange}
                    value={number}
                />

                <button
                    className={s.btn}
                    type="submit"
                >
                    Add contact
                </button>
                </form>
</>
        );
    }
}

export default ContactForm;