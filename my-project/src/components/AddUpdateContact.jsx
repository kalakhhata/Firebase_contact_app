import React from 'react';
import Modal from './Modal';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { collection, addDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import * as Yup from 'yup';

const contactSchemaValidation = Yup.object().shape({
    name :Yup.string().required("Name is Required"),
    email :Yup.string().email("Invalid Email").required("Email is Required"),

})

const AddUpdateContact = ({ isOpen, onClose, isUpdate, contact }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, 'contact');
      await addDoc(contactRef, contact);
      onClose();
      toast.success("Contact Added Successfully");
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };

  const updateContact = async (contact, id) => {
    try {
      const contactRef = doc(db, 'contact', id); // Use `doc` to reference a specific document
      await updateDoc(contactRef, contact);
      onClose();
      toast.success("Contact Updated Successfully");
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          validationSchema={contactSchemaValidation}
          initialValues={
            isUpdate
              ? {
                  name: contact?.name || '', // Provide safe defaults
                  email: contact?.email || '',
                }
              : {
                  name: '',
                  email: '',
                }
          }
          onSubmit={(values) => {
            if (isUpdate) {
              updateContact(values, contact.id);
            } else {
              addContact(values);
            }
          }}
        >
          <Form className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Name:</label>
              <Field
                name="name"
                className="border rounded-md h-10 p-2"
                placeholder="Enter name"
              />
              <div className='text-red-400 text-xs'>
                <ErrorMessage name='name' />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="email">Email:</label>
              <Field
                name="email"
                className="border rounded-md h-10 p-2"
                placeholder="Enter email"
              />
              <div className='text-red-400 text-xs'>
              <ErrorMessage name='email' />
              </div>
            </div>
            <button
              type="submit"
              className="bg-red-500 text-white px-3 py-1.5 border rounded-md self-end"
            >
              {isUpdate ? 'Update' : 'Add'} Contact
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddUpdateContact;
