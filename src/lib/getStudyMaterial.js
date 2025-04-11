import { db } from '@/lib/firebase'; 
import { collection, getDocs } from 'firebase/firestore';

export const getStudyMaterial = async () => {
  const projectsRef = collection(db, 'studyMaterial');
  const snapshot = await getDocs(projectsRef);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};
