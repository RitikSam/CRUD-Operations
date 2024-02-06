"use client"
import { useEffect, useState } from 'react';
import EditToipcForm from "../../../../components/EditToipcForm";
import { collection, getDoc, doc } from 'firebase/firestore';
// import TopicsList from '../../../../components/TopicsList';
import { db } from '../../../../firebase/firebase';
// import { useRouter } from 'next/router';

const getTopicById = async (tarId) => {
  try {
    const formDocRef = doc(db, 'Form', tarId);
    const docSnap = await getDoc(formDocRef);

    if (docSnap.exists()) {
      const formData = { id: docSnap.id, ...docSnap.data() };
      return [formData]; // Return an array to maintain consistency with the previous code
    } else {
      console.error('Document not found');
      return [];
    }
  } catch (error) {
    console.error('Error fetching documents: ', error);
    console.log('Error fetching documents: ', tarId);
    return [];
  }
};

export default function EditTopic({params}) {
  const { id } = params;
  const [forms, setForms] = useState([]);

  useEffect(() => {
    console.log('Fetching data for id:', id);
    const fetchData = async () => {
      const formsDataId = await getTopicById(id);
      setForms(formsDataId);
    };

    fetchData();
  },[]);
  return (
  <>
  {forms.map((form) => (
    <EditToipcForm key= {form.id} id={form.id} iid={form.ID} name={form.Name} contact={form.Contact} address={form.Address}/>))}
  
  </>
  )
}
