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
  updateDoc,
  increment,
  writeBatch,
} from "firebase/firestore";

const db = getFirestore(app);
const batch = writeBatch(db);
export const addItemToCartOnFS = async (uid, productInfo) => {
  const userDocumentId = uid;
  const userDocumentRef = doc(db, "UserProfiles", userDocumentId);
  const customShoppingCartDocumentId = stringNormalizer(
    productInfo.model_brand
  );

  const userDocSnapshot = await getDoc(userDocumentRef);
  if (userDocSnapshot.exists()) {
    const shoppingCartRef = collection(userDocumentRef, "shoppingCart");
    // here to check if the key already exist, if yes then modify the quantity

    const productDocumentRef = doc(
      shoppingCartRef,
      customShoppingCartDocumentId
    );
    const productDocumentSnapshot = await getDoc(productDocumentRef);
    if (productDocumentSnapshot.exists()) {
      await updateDoc(productDocumentRef, {
        quantity: increment(1),
      });
    } else {
      await setDoc(productDocumentRef, {
        ...productInfo,
        quantity: 1,
      });
    }
  } else {
    await setDoc(userDocumentRef, {});

    const shoppingCartRef = collection(userDocumentRef, "shoppingCart");
    await setDoc(doc(shoppingCartRef, customShoppingCartDocumentId), {
      ...productInfo,
      quantity: 1,
    });
  }
};

export const removeItemFromCartOnFS = async (uid, productInfo) => {
  const userDocumentId = uid;
  const userDocumentRef = doc(db, "UserProfiles", userDocumentId);
  const customShoppingCartDocumentId = stringNormalizer(
    productInfo.model_brand
  );
  const userDocSnapshot = await getDoc(userDocumentRef);
  if (userDocSnapshot.exists()) {
    const shoppingCartRef = collection(userDocumentRef, "shoppingCart");
    // here to check if the key already exist, if yes then modify the quantity

    const productDocumentRef = doc(
      shoppingCartRef,
      customShoppingCartDocumentId
    );
    const productDocumentSnapshot = await getDoc(productDocumentRef);
    if (productDocumentSnapshot.exists()) {
      const data = productDocumentSnapshot.data();
      const cartQuantity = data.quantity;
      if (cartQuantity == 1) {
        await deleteDoc(productDocumentRef);
      } else {
        await updateDoc(productDocumentRef, {
          ...productInfo,
          quantity: increment(-1),
        });
      }
    }
  } else {
    throw new Error(
      "invalid operation, user's data doesn't exist on database and you try to remove an item from cart"
    );
  }
};

export const clearProductFromCartOnFS = async (uid, productInfo) => {
  const userDocumentId = uid;
  const userDocumentRef = doc(db, "UserProfiles", userDocumentId);
  const customShoppingCartDocumentId = stringNormalizer(
    productInfo.model_brand
  );
  const userDocSnapshot = await getDoc(userDocumentRef);
  if (userDocSnapshot.exists()) {
    const shoppingCartRef = collection(userDocumentRef, "shoppingCart");
    // here to check if the key already exist, if yes then modify the quantity

    const productDocumentRef = doc(
      shoppingCartRef,
      customShoppingCartDocumentId
    );
    await deleteDoc(productDocumentRef);
  } else {
    throw new Error(
      "invalid operation, user's data doesn't exist on database and you try to remove a product from cart"
    );
  }
};

export const clearCartOnFS = async (uid) => {
  const userDocumentId = uid;
  const userDocumentRef = doc(db, "UserProfiles", userDocumentId);
  const userDocSnapshot = await getDoc(userDocumentRef);
  if (userDocSnapshot.exists()) {
    const shoppingCartRef = collection(userDocumentRef, "shoppingCart");
    const allCartItemsSnapshot = await getDocs(shoppingCartRef);
    allCartItemsSnapshot.forEach((doc) => {
      batch.delete(doc.ref);
    });
  } else {
    throw new Error(
      "invalid operation, user's data doesn't exist on database and you try to clear cart"
    );
  }
};

export const updateProductQuantityOnFS = async (
  uid,
  productInfoWithQuantity
) => {
  const { quantity, model_brand } = productInfoWithQuantity;
  const customShoppingCartDocumentId = stringNormalizer(model_brand);
  const userDocumentId = uid;
  const userDocumentRef = doc(db, "UserProfiles", userDocumentId);
  const userDocSnapshot = await getDoc(userDocumentRef);
  if (userDocSnapshot.exists()) {
    const shoppingCartRef = collection(userDocumentRef, "shoppingCart");
    const productDocumentRef = doc(
      shoppingCartRef,
      customShoppingCartDocumentId
    );
    const productDocumentSnapshot = await getDoc(productDocumentRef);
    if (productDocumentSnapshot.exists()) {
      await updateDoc(productDocumentRef, {
        quantity: quantity,
      });
    } else {
      await setDoc(productDocumentRef, {
        ...productInfo,
        quantity: quantity,
      });
    }
  } else {
    throw new Error(
      "invalid operation, user's data doesn't exist on database and you try update quantity of a product"
    );
  }
};

export const fetchShoppingCartFromFS = async (uid) => {
  const userDocumentId = uid;
  const userDocumentRef = doc(db, "UserProfiles", userDocumentId);
  const userDocSnapshot = await getDoc(userDocumentRef);
  if (userDocSnapshot.exists()) {
    const shoppingCartRef = collection(userDocumentRef, "shoppingCart");
    const shoppingCartSnapshot = await getDocs(shoppingCartRef);
    if (shoppingCartSnapshot.empty) {
      return [];
    } else {
      const allCartItems = [];
      shoppingCartSnapshot.forEach((itemDoc) => {
        const itemData = itemDoc.data();
        const itemInfoObject = {
          [itemDoc.id]: {
            ...itemData,
          },
        };
        allCartItems.push(itemInfoObject);
      });
      return allCartItems;
    }
  } else {
    return [];
  }
};
