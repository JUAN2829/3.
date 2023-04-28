import React, { useEffect }from 'react';
import PropTypes from 'prop-types'
import clsContact from '../../models/clsContact'

const ContactComponent = ({ contact, conected, remove }) => {

    useEffect(() => {
        console.log("Contacto se ha modificado")
        return () => {
            
        };
    }, []);

    // function to change the state of the contact
    function changeIcon(){
        if(contact.conected){
            console.log("contacto: " )
            console.log('conectado')
            return (<i onClick={() => conected(contact) } className='bi-toggle-on' style={{color: 'green', fontWeight:' bold'}}> </i>)
        } else {
            console.log('out of line')
            return (<i onClick={() => conected(contact) } className='bi-toggle-off' style={{color: 'grey', fontWeight:' bold'}}> </i>)
        }
    }

    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'> {contact.name}  </span>
            </th>
            <th>
                <span className='aling-middle'> {contact.email}  </span>
            </th>
            <th>
                <span className='aling-middle'> {changeIcon()}  </span>
            </th>

            <i className='bi-trash'  style={{ color: 'tomato' }} onClick={() => remove(contact)}></i>

        </tr>
    );
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(clsContact).isRequired,
    conected: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
}

export default ContactComponent;
