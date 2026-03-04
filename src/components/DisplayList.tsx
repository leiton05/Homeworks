import type { Contact } from "./Contacts";

interface Props {
    contacts: Contact[]
    deleteContact: (id: number) => void
}

function ContactList({ contacts, deleteContact }: Props) {
    return (
        <ol>
            {contacts.map(contact => (
                <li key={contact.id}>
                    {contact.name} - {contact.number}
                    <button onClick={()=> deleteContact(contact.id)}>Eliminar</button>
                </li>
            ))}
        </ol>
    )
}

export default ContactList