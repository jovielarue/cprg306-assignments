import { db } from "../_utils/firebase";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";

export const getItems = async (userId) => {
  const q = query(
    collection(db, "users", userId, "items"),
    where("quantity", ">", 0),
  );

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.id, " => ", doc.data());
  });
};

export const addItem = async (userId, item) => {
  const docRef = await addDoc(collection(db, "users", userId, "items"), {
    ...item,
  });
  console.log("Item is created with ID: ", docRef.id);
};
