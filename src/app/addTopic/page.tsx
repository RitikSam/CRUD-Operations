"use client";
import { useState} from "react";
import { useRouter } from "next/navigation";
import {
    collection,
    addDoc,
    // getDoc,
    // where,
    // query,
    // deleteDoc,
    // updateDoc,
    // doc,
} from "firebase/firestore";
import {db} from "../../../firebase/firebase";

export default function AddTopic() {
    const router = useRouter();
    const [iid, setId] = useState("");
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!iid || !name || !contact || !address) {
            alert("All Fileds are required.");
            return;
        }   
        try {
            const docRef = await addDoc(collection(db, "Form"),{
                // Owner: docRef.id,
                ID: iid,
                Name: name,
                Contact:contact,
                Address:address,
            }); 
            console.log("Document written with ID: ", docRef.id)
            router.push('/');
        } catch (error) {
            console.error("Error writing document: ", error);
        }
    
    }



  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
         <input
        onChange={(e) => setId(e.target.value)}
        value={iid}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="ID"
        required
      />
       <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Name"
        required
      />
      <input
        onChange={(e) => setContact(e.target.value)}
        value={contact}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Contact"
        required
      />
      <input
        onChange={(e) => setAddress(e.target.value)}
        value={address}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Address"
        required 
      />
      <button type="submit"
        className="bg-green-600 font-bold text-white py-3 px-6 w-fit" >
      Submit 
      </button>
    </form>
  )
}
