import React from 'react'
import Modal from './Modal'
import {Field, Form , Formik} from "formik";

const AddUpdateContact = ({isOpen,onClose}) => {
  return (
    <div>
        <Modal isOpen={isOpen} onClose={onClose} >
            <Formik>
                <Form>
                    <div className='flex flex-col gap-1'>
                    <label htmlFor='name'>Name : </label>
                    <Field name="name" />
                    </div>
                </Form>
            </Formik>
        </Modal>
    </div>
  )
}

export default AddUpdateContact