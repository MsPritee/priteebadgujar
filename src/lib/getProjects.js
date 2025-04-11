import { db } from '@/lib/firebase'; 
import { collection, getDocs } from 'firebase/firestore';

export const getProjects = async () => {
  const projectsRef = collection(db, 'projects');
  const snapshot = await getDocs(projectsRef);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};
