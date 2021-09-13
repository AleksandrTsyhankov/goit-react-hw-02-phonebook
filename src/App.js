import React, { Component } from 'react';
import ContactForm from './phonebook/Contacts/ContactForm';
import ContactList from './phonebook/Contacts/ContactList';
import Filter from './phonebook/Filter/Filter';
import { v4 as uuidv4 } from 'uuid';
import s from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  };
  
  handleSubmit = (name, number) => {
    const { contacts } = this.state;
    const availableContact = contacts.find(contact =>  contact.name === name)
    const newContact = { id: uuidv4(), name: name, number: number }

    if (availableContact) {
      return alert(`${name} is already in contacts.`);
    }

    return this.setState({
      contacts: [newContact, ...contacts]
    })
  }


  handleFilterChange = e => {
    const { name, value } = e.currentTarget;

      this.setState({
      [name]: value
      })
  }

  filterContactsList = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(( contact ) => contact.name.toLowerCase().includes(filter.toLowerCase()));
  }

  deleteNameFromList = (id) => {
    const { contacts } = this.state;
    
    const newContacts = contacts.filter((contact) => contact.id !== id);
        
    return this.setState({
      contacts: newContacts
    })
    
  }

  render() {
    const { filter } = this.state;

    return (
      <>
        <h1 className={s.title}>Phonebook</h1>

        <ContactForm
          onSubmit={this.handleSubmit} />
        
        <h2 className={s.title}>Contacts</h2>

        <Filter
          onChange={this.handleFilterChange}
          value={filter}
        />
        
        <ContactList
          deleteContact={this.deleteNameFromList}
          contacts={this.filterContactsList()}
        />
      </>
    )
  };
}

export default App;
