import { Dialog } from '@headlessui/react'
import React from 'react'
import { FaCarAlt } from 'react-icons/fa'
import { modalConditions } from '../../../../models/modal'

export default function AddDepartments({setIsOpen, isOpen}:modalConditions) {
  return (
    <Dialog
    open={isOpen}
    onClose={() => setIsOpen(false)}
    className="w-full h-[100vh] absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center 
    bg-[rgba(0,0,0,0.5)] z-[999]"
  >
    <Dialog.Panel className="bg-white border flex justify-center flex-col items-center w-[30%] rounded-md">
      <Dialog.Title className="p-4 text-blue-500 font-extrabold flex items-center text-2xl">
        Add New Products Deparments
      </Dialog.Title>
      <hr className="w-full" />
      <Dialog.Panel className="flex justify-center items-center w-[100%]">
          man
      </Dialog.Panel>
    </Dialog.Panel>
  </Dialog>
  )
}