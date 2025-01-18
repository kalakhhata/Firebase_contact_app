import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { db } from "../config/firebase";
import AddUpdateContact from "./AddUpdateContact";
import useDisclosure from "../hooks/useDisclouse";
import { toast } from "react-toastify";

export default function ContactCard({ contact }) {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contact", id));
      toast.success("Contact Deleted Successfully");
      console.log(`Contact with ID ${id} deleted`);
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  return (
    <>
      <div
        className="flex gap-4 items-center border-b border-gray-500 py-2 bg-red-500 justify-between rounded-md"
      >
        <HiOutlineUserCircle className="text-3xl text-white " />
        <div className="text-white flex-grow">
          <h2 className="font-bold">{contact.name}</h2>
          <p className="text-sm">{contact.email}</p>
        </div>
        <div className="flex gap-2">
          <MdEdit
            onClick={onOpen}
            className="text-yellow-400 cursor-pointer"
          />
          <IoMdTrash
            onClick={() => deleteContact(contact.id)}
            className="text-red-400 cursor-pointer"
          />
        </div>
      </div>
      {isOpen && (
        <AddUpdateContact
          isUpdate={true}
          isOpen={isOpen}
          onClose={onClose}
          contact={contact} // Pass the contact to edit
        />
      )}
    </>
  );
}
