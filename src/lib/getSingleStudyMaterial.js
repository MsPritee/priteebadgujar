
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export const getSingleStudyMaterial = async (id) => {
  try {
    const docRef = doc(db, "studyMaterial", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      throw new Error("No such document!");
    }
  } catch (error) {
    console.error("Error fetching single study material:", error.message);
    return null;
  }
};
