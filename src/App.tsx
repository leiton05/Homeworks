import { useEffect, useState } from 'react'
import contactsLogo from './assets/contacts.svg'
import Loader from './components/Loader'
import type { Contact } from './components/Contacts'
import './App.css'
import ContactList from './components/DisplayList'
import AddContacts from './components/AddContact'

function App() {
  const [loading, setLoading] = useState(true);
  const [contacts, setContacts] = useState<Contact[]>([])
  const addContact = (newContact: Omit<Contact, "id">) => {
  const contactWithId: Contact = {
    id: Date.now(), // generamos id único
    ...newContact
  };

  setContacts([...contacts, contactWithId]);
};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)

      setContacts([
        { id: 1, name: 'Roberto Carlos', number: '3001234567' },
        { id: 2, name: 'Samuel De Luque', number: '3117654321' },
        { id: 3, name: 'Magali Chavez', number: '3003434587'}
      ])
    }, 1000)
  }, [])

  const deleteContact = (id: number) => {
    setContacts(contacts.filter(contact => contact.id !== id))
  }

  if (loading) {
    return <Loader/>
  }
  return (
    <>
      <div>
          <img src={contactsLogo} className="logo" alt="Contacts logo" />
      </div>
      <h1>Contacts App</h1>
      <h2>Bienvenido a su aplicación de contactos confiable</h2>
      <AddContacts addContact={addContact}/>
      <h3>Estos son sus contactos:</h3>
      <ContactList contacts={contacts} deleteContact={deleteContact}/>
    </>
  )
}

export default App
