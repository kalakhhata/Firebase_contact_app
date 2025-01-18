import react from "react"
import { HiOutlineUserCircle } from "react-icons/hi"
import { IoMdTrash } from "react-icons/io"
import { MdEdit } from "react-icons/md"

export default function ContactCard({contact}) {
    return(
        <div
              className="flex gap-4 items-center border-b border-gray-500 py-2 bg-red-500 justify-between rounded-md"
            >
              <HiOutlineUserCircle className="text-3xl text-white " />
              <div className="text-white flex-grow">
                <h2 className="font-bold">{contact.name}</h2>
                <p className="text-sm">{contact.email}</p>
              </div>
              <div className="flex gap-2">
                <MdEdit className="text-yellow-400 cursor-pointer" />
                <IoMdTrash className="text-red-400 cursor-pointer" />
              </div>
            </div>
    )
}