
# CRUD Operations

# Next.js Firestore CRUD Application

This is a simple CRUD (Create, Read, Update, Delete) application built using Next.js and Firestore. It allows users to manage topics, performing operations such as adding new topics, editing existing ones, removing topics, and displaying a list of topics with their details.

## Features

- **Create:** Add new topics to the Firestore database.
- **Read:** View a list of topics with their details fetched from Firestore.
- **Update:** Modify existing topics' information, including ID, name, contact, and address.
- **Delete:** Remove topics from the database.

## Technologies Used

- **Next.js:** A React framework for building server-side rendered and statically generated web applications.
- **Firestore:** A flexible, scalable database for mobile, web, and server development from Firebase and Google Cloud Platform.
- **React:** A JavaScript library for building user interfaces.
- **Firebase:** A platform developed by Google for creating mobile and web applications.

## Getting Started

### Prerequisites

Before running the application, ensure you have the following installed:

- Node.js
- npm or yarn
- Firebase project set up with Firestore database

# Project Description:

This project appears to be a web application built with Next.js, a popular React framework for building server-side rendered and statically generated applications. The application interacts with Firestore, a flexible, scalable database provided by Firebase.

# Topics List Component (TopicsList.tsx):

This component fetches data from the Firestore collection named "Form" using the getForms function.
It displays a list of topics retrieved from the Firestore collection.
Each topic is displayed with its ID, name, contact, and address.
It provides buttons for editing topics and removing them.
#Edit Topic Component (EditTopic.tsx):

This component is likely responsible for editing individual topics.
It receives the ID of the topic to be edited as a prop.
It fetches the data of the specific topic from Firestore using the getTopicById function.
It allows users to edit the properties of the topic, such as ID, name, contact, and address.
It provides a form for users to submit the edited topic data to Firestore for updating.
Remove Button Component (RemoveBtn.tsx):

This component renders a button for removing a topic.
It receives the ID of the topic to be removed as a prop.
When clicked, it triggers the removal of the corresponding topic from Firestore.
Firebase Integration (firebase/firebase.ts):

This file likely contains the Firebase configuration settings required to connect your Next.js application to Firestore.
It initializes the Firebase app and exports the Firestore database instance (db) for use in other parts of the application.
Deployment:

The project can be deployed using Vercel, a platform that provides hosting and deployment services for Next.js applications. Once deployed, the application will be accessible online, allowing users to interact with it through their web browsers.