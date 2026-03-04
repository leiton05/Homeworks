import type { Contact } from "./Contacts";
import { useState } from "react";

interface Props {
    addContact: (contact: Omit<Contact, "id">) => void
}

function AddContacts({ addContact }: Props) {
    const [name, setName] = useState("")
    const [number, setNumber] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!name || !number) return undefined
        addContact({ name, number })
        setName("")
        setNumber("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Numero" value={number} onChange={(e) => setNumber(e.target.value)} />
            <button type="submit">Agregar contacto</button>
        </form>
    )
}

export default AddContacts