"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    // collection,
    // addDoc,
    // getDoc,
    // where,
    // query,
    // deleteDoc,
    updateDoc,
    doc,
} from "firebase/firestore";
import {db} from "../firebase/firebase";


export default function EditToipcForm({id, iid, name, contact, address}) {
    const router = useRouter();
    const [newId, setNewId] = useState(iid);
    const [newName, setNewName] = useState(name);
    const [newContact, setNewContact] = useState(contact);
    const [newAddress, setNewAddress] = useState(address);

    const handleSubmit = async (e) => {
        
        e.preventDefault();
        try {
            const formDocRef = doc(db, "Form", id);
                await updateDoc(formDocRef, {
                ID: newId,
                Name: newName,
                Contact:newContact,
                Address:newAddress,

            });
            console.log("Document written with ID: ", id);
            router.push("/");
            router.refresh();
        } catch (error) {
            console.error("Error writing document: ", error);

        }
    }


  return (

    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <input
            onChange={(e) => setNewId(e.target.value)}
            value={newId}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="ID"
            required
        />
        <input
            onChange={(e) => setNewName(e.target.value)}
            value={newName}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Name"
            required
        />
        <input
            onChange={(e) => setNewContact(e.target.value)}
            value={newContact}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Contact"
            required
        />
        <input
            onChange={(e) => setNewAddress(e.target.value)}
            value={newAddress}
            className="border border-slate-500 px-8 py-2"
            type="text"
            placeholder="Address"
            required
        />
    <button type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit" >
         Update 
    </button>
</form>
)
}
