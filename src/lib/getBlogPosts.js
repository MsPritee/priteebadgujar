
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export const getBlogPosts = async () => {
  const blogCollectionRef = collection(db, 'blogPosts');
  const snapshot = await getDocs(blogCollectionRef);
  const posts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return posts;
};
