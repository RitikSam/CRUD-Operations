"use client";
import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi';
import {
  // collection,
  // addDoc,
  // getDoc,
  // where,
  // query,
  deleteDoc,
  // updateDoc,
  doc,
} from "firebase/firestore";
import {db} from "../firebase/firebase";
import { useRouter } from "next/navigation";



export default function RemoveBtn({id}) {
  const router = useRouter();
  const deleteBtn = async () => {
    const confirmed = confirm("Are you sure?");
        if (confirmed) {
        try {
          await deleteDoc(doc(db, "Form", id))
          router.refresh();
        } catch (error) {
          console.error("Error writing document: ", error);
        }
      }
  }

  return (
    <button className='text-red-500' onClick={deleteBtn}>
        <HiOutlineTrash size = {24} />
    </button>
  )
}
