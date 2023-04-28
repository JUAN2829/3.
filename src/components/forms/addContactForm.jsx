import React, {useRef} from 'react';
import PropTypes from 'prop-types'
import clsContact from '../../models/clsContact'
import { STATES } from '../../models/states';

const AddContactForm = ({add}) => {
    const nameRef = useRef('')
    const emailRef = useRef('')
    

    // function to add a new contact in the list +
    function addContact(e) {
        e.preventDefault()
        const newContact = new clsContact(
            nameRef.current.value,
            emailRef.current.value,
            true
        )
        add(newContact)
    }

    return (
        <form onSubmit={addContact} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input ref={nameRef} id='txtName' className='form-control' placeholder='Insert name' />
                <input ref={emailRef} id='txtEmail' className='form-control' placeholder='Insert email' />
                <button type='submit' className='btn btn-primary'> Add Contact </button>
            </div>
        </form>
    );
}

AddContactForm.propTypes = {
    add: PropTypes.func.isRequired
}

export default AddContactForm;
