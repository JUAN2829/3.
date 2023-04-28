import React, { useState, useEffect } from 'react';
import clsContact from '../../models/clsContact'
import { STATES } from '../../models/states';
import ContactComponent from '../../components/pure/contact'
import AddContactForm from '../forms/addContactForm';

const ContactListComponent = (contact) => {
    
    const defCont1 = new clsContact('Juan', 'juan@gmail.com', true)
    const defCont2 = new clsContact('Mario', 'mario@gmail.com', false)
    const defCont3 = new clsContact('Ana', 'ana@gmail.com', false)
    
    const [contacts, setContacts] = useState([defCont1, defCont2, defCont3]);

    useEffect(() => {
        console.log("Se hah modificado contactos")
        return () => {
            console.log('Listo para salir')
        };
    }, [contacts]);

    //function for change the state of contact
    function changeState(contact) {
        const index = contacts.indexOf(contact)
        const tmpContacts = [...contacts]
        tmpContacts[index].conected = !tmpContacts[index].conected
        setContacts(tmpContacts)
        console.log("cambio de estado en conexion realiado en: ", tmpContacts[index].name, "a", tmpContacts[index].state) // TODO: quitar clg
    }

    // function for add a new contact
    function addContact(contact) {
        const tempContact = [...contacts]
        tempContact.push(contact)
        setContacts(tempContact)
    }

    //function for delete a contact of the list 
    function deleteContact(contact) {
        const index = contacts.indexOf(contact)
        const tmpContacts= [...contacts] // temp variable to use when i need to remove a element of the original list and then update the list with the tempList
        tmpContacts.splice(index,1)
        setContacts(tmpContacts)
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header  p-3'>
                        <h5>Your Contact List:</h5>
                    </div>
                    <div className='card-body ' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', heigth: '600px'} } > 
                        <table>
                            <thead className='bg-primary'>
                                <tr>
                                    <th scope='col'>Name </th>
                                    <th scope='col'>Email </th>
                                    <th scope='col'>State </th>
                                </tr>
                            </thead>
                            <tbody>
                                {contacts.map((contact, index) => {
                                    return(
                                        <ContactComponent 
                                            key = {index} 
                                            contact = { contact }  
                                            conected = {changeState}   
                                            remove = {deleteContact}
                                        />
                                    )
                                })}
                                
                            </tbody>
                        </table>
                    </div>
                    
                </div>
                <div className='pt-4'>
                <AddContactForm add={addContact}/>
                </div>
            </div>
        </div>
    );
}

export default ContactListComponent;
