
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export const getSingleBlogPost = async (id) => {
  try {
    const docRef = doc(db, "blogPosts", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      throw new Error("No such document!");
    }
  } catch (error) {
    console.error("Error fetching single blog post:", error.message);
    return null;
  }
};
