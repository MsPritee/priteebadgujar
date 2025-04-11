import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export const getBlogPosts = async () => {
  // const docRef = doc(db, "blogposts", "docID");
  // const docSnap = await getDoc(docRef);

  // if (docSnap.exists()) {
  //   console.log("Document data:", docSnap.data());
  // } else {
  //   console.log("No such document!");
  // }

  try {
    const querySnapshot = await getDocs(collection(db, "blogPosts"));

    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    throw error;
  }
};
