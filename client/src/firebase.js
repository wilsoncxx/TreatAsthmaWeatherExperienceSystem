import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJEBS_KSaMtfvE80t-4D-dvBA909LfHVA",
  authDomain: "tawes-development.firebaseapp.com",
  projectId: "tawes-development",
  storageBucket: "tawes-development.appspot.com",
  messagingSenderId: "917190025600",
  appId: "1:917190025600:web:62cb928b49f47e97346165",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export const getDocuments = async (collectionName, userId) => {
  console.log("asdfs");
  const docs = await getDocs(query(collection(db, collectionName), where("userId", "==", userId)));
  console.log("asdfs1");
  const docslists = docs.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return docslists;
};

export default app;
