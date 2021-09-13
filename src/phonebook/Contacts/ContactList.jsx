import React, { Component } from 'react';
import s from './ContactStyles.module.css';

class ContactList extends Component {
    render() {
        const { contacts, deleteContact } = this.props;


        return (
            <>
                <ul className={s.contactsList}>
                    {contacts.map(contact => (
                        <li
                            key={contact.id}
                            className={s.contactsListItem}
                        > {contact.name}: {contact.number}

                            <span
                                onClick={() => deleteContact(contact.id)}
                                className={s.delBtn}
                            >-</span>
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}

export default ContactList;