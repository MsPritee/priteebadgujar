import { getFirestore, collection, writeBatch, doc } from "firebase/firestore";
import { app } from "./firebase"; 

const db = getFirestore(app);

export async function addMultipleDocuments(collectionName, dataArray) {
  const batch = writeBatch(db);
  const colRef = collection(db, collectionName);

  dataArray.forEach((item) => {
    const newDocRef = doc(colRef); // auto-generated ID
    batch.set(newDocRef, item);
  });

  try {
    await batch.commit();
    console.log("Batch write succeeded!");
  } catch (error) {
    console.error("Batch write failed: ", error);
  }
}
