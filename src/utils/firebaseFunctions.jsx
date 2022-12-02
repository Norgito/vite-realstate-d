import { setDoc, doc } from "firebase/firestore";
import { firestore } from "./firebaseConfig";

// Saving new Item
export const saveItem = async (data) => {
  await setDoc(doc(firestore, "items", `${Date.now()}`), data, { merge: true });
};
