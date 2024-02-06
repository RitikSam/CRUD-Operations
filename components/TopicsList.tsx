// "use client"
// import { useEffect, useState } from 'react';
import Link from 'next/link';
import RemoveBtn from './RemoveBtn';
import { HiPencilAlt } from 'react-icons/hi';
import { collection, getDocs , doc} from 'firebase/firestore';
import { db } from '../firebase/firebase';
// import { useRouter } from 'next/router';
const getForms = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "Form"));
    const formsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return { forms: formsData }; 
  } catch (error) {
    console.error('Error fetching documents: ', error);
    return { forms: [] };
  }
};

export default async function TopicsList() {
  const {forms } = await  getForms();
 

  // console.log('forms:', forms); // Log the entire forms array
  // console.log('forms.map(form => form.id):', forms.map(form => form.id)); // Log only the form ids

  return (
    <>
      {forms.map((form) => (
        <div key={form.id} className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
          <div>
            <h2 className="font-bold text-l">ID: {form.ID}</h2>
            <h2 className="font-bold text-l">Name: {form.Name}</h2>
            <h2 className="font-bold text-l">Contact: {form.Contact}</h2>
            <h2 className="font-bold text-l">Address: {form.Address}</h2>
          </div>
          
          <div className="flex gap-2">
            <RemoveBtn id = {form.id}/>
            <Link href={`/editTopic/${form.id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
        
      ))}
    </>
  );
}
