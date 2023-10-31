import { app } from "./firebase.utils";
import { stringNormalizer } from "../string-normalizer";
import {
  collection,
  doc,
  setDoc,
  getDocs,
  query,
  getDoc,
  getFirestore,
  deleteDoc,
} from "firebase/firestore";

const db = getFirestore(app);

export const toggleProductInWishlistFB = async (uid, productInfo) => {
  const userDocumentId = uid;
  const userDocumentRef = doc(db, "UserProfiles", userDocumentId);
  const customWishlistDocumentId = stringNormalizer(productInfo.model_brand);
  const userDocSnapshot = await getDoc(userDocumentRef);
  if (userDocSnapshot.exists()) {
    const wishlistRef = collection(userDocumentRef, "wishlist");
    await setDoc(doc(wishlistRef, customWishlistDocumentId), productInfo);
  } else {
    await setDoc(userDocumentRef, {});
    const wishlistRef = collection(userDocumentRef, "wishlist");

    await setDoc(doc(wishlistRef, customWishlistDocumentId), productInfo);
  }
};

export const fetchWishlistFromFirestore = async (uid) => {
  const userDocumentId = uid;
  const userDocumentRef = doc(db, "UserProfiles", userDocumentId);

  const userDocSnapshot = await getDoc(userDocumentRef);
  if (userDocSnapshot.exists()) {
    const wishlistRef = collection(userDocumentRef, "wishlist");
    const querySnapshot = await getDocs(wishlistRef);

    const allItemsInWishlist = querySnapshot.docs.map((doc) => ({
      [doc.id]: { ...doc.data() },
    }));
    return allItemsInWishlist;
  } else {
    return [];
  }
};

export const toggleWishlistOnFirestore = async ({
  uid,
  model_brand,
  image_url,
  description,
  price,
}) => {
  const userDocumentId = uid;
  const userDocumentRef = doc(db, "UserProfiles", userDocumentId);

  const userDocSnapshot = await getDoc(userDocumentRef);
  if (userDocSnapshot.exists()) {
    const wishlistRef = collection(userDocumentRef, "wishlist");
    const customWishlistDocumentId = stringNormalizer(model_brand);
    const modelRef = doc(wishlistRef, customWishlistDocumentId);
    const modelSnapshot = await getDoc(modelRef);
    if (modelSnapshot.exists()) {
      deleteDoc(modelRef);
    } else {
      await setDoc(doc(wishlistRef, customWishlistDocumentId), {
        model_brand,
        image_url,
        description,
        price,
      });
    }
  } else {
    await setDoc(userDocumentRef, {});
    const wishlistRef = collection(userDocumentRef, "wishlist");
    const customWishlistDocumentId = stringNormalizer(model_brand);

    await setDoc(doc(wishlistRef, customWishlistDocumentId), {
      model_brand,
      image_url,
      description,
      price,
    });
  }
};
