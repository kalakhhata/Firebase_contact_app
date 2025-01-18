import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { FiSearch } from "react-icons/fi";
import { CiCirclePlus } from "react-icons/ci";
import { collection, getDocs } from "firebase/firestore"
import ContactCard from "./components/ContactCard"
import {db} from "./config/firebase"
import AddUpdateContact from './components/AddUpdateContact';

const App = () => {

  const [contacts,setContacts] = useState([]);
  const [isOpen,setIsOpen] =useState(false);

  const onOpen = ()=>{
    setIsOpen(true);
  }

  const onClose = ()=>{
    setIsOpen(false);
  }

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contact");
        const contactsSnapshot = await getDocs(contactsRef);
  
        // Log snapshot size
        console.log("Snapshot size:", contactsSnapshot.size);
  
        if (!contactsSnapshot.empty) {
          const contactLists = contactsSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          console.log("Fetched contacts:", contactLists); // Log fetched data
          setContacts(contactLists); // Update state
        } else {
          console.log("No documents found in 'contacts' collection.");
        }
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };
  
    getContacts();
  }, []);
  
  return (
    <>
    <div className='mx-auto max-w-[370px] px-4'>
      <Navbar />
      <div className='flex gap-2'>
          <div className='flex relative items-center ml-1 flex-grow'>
            <FiSearch className='text-white text-3xl absolute ml-1' />
            <input type="text" className='bg-transparent border border-white rounded-md h-10 flex-grow pl-9 text-white' />
          </div>
          <div>
            <CiCirclePlus onClick={onOpen} className='text-5xl text-white cursor-pointer' />
          </div>
      </div>
      <div className='mt-4 flex gap-2 flex-col'>
        {contacts.length > 0 ? (
          contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))
        ) : (
          <p className="text-white">No contacts found.</p>
        )}
      </div>

     
    </div>
    <AddUpdateContact onClose={onClose} isOpen={onOpen} />
   
    </>
    
  );
};

export default App