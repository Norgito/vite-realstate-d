import {
    collection,
    doc,
    getDoc,
    orderBy,
    getDocs,
    getFirestore,
    query,
    where,
  } from "firebase/firestore";
  
  export const firestoreFetch = async (idCategory) => {
    let q;
    const db = getFirestore();
  
    if (idCategory) {
      q = query(collection(db, "items"), where("category", "==", idCategory));
    } else {
      q = query(collection(db, "items"), orderBy("list"));
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map((document) => ({
      id: document.id,
      ...document.data(),
    }));
    return dataFromFirestore;
  };
  
  export const firestoreFetchOne = async (idItem) => {
    const db = getFirestore();
    const docRef = doc(db, "items", idItem);
    const docSnap = await getDoc(docRef);
  
    if (docSnap.exists()) {
      let result = {
        id: idItem,
        ...docSnap.data(),
      };
      return result;
    } else {
      console.log("No such document!");
    }
  };