// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export const retrieveIdToken = async () => {
  const user = auth.currentUser;
  console.log("this is user");
  console.log(user);
  console.log(user);
  console.log(user);
  console.log(user);
  const token = await user.getIdToken();
  return token;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  const result = await createUserWithEmailAndPassword(auth, email, password);
  return result;
};

export const signInWithGoogle = async () => {
  const result = await signInWithPopup(auth, provider);
  console.log(await result.user.getIdToken());
  console.log(await result.user.getIdToken());
  console.log(await result.user.getIdToken());
  console.log(await result.user.getIdToken());
  return result;
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  const result = await signInWithEmailAndPassword(auth, email, password);
  return result;
};

export const signOutAuthUser = async () => {
  const result = await signOut(auth);
  return "sign out successfully";
};

export const addEntryToShoppingCartTest = async () => {
  // Reference to the parent document
  const userId = "8SLS63Ic2bgsGm54cBv8bHg1M5l2";
  const parentDocumentRef = doc(db, "UserProfiles", userId);

  // Reference to the subcollection
  const subcollectionRef = collection(parentDocumentRef, "shoppingCart");

  // Add documents to the subcollection
  try {
    const newDocRef = await addDoc(subcollectionRef, {
      model_brand: "XtremeDrive CanyonTracker",
      price: "$35.99",
      image_url:
        "https://toycars-img.s3.eu-central-1.amazonaws.com/off_road_cars/off_road_vehicle__other_colors_S3743581216_St25_G7.5.jpeg",
      description:
        "The XtremeDrive CanyonTracker Off-Road toy is ready to navigate steep canyons and rugged terrain in your playtime world. Embark on thrilling off-road adventures with this toy.",
      quantity: 20,
    });
    console.log("Document written with ID: ", newDocRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const existsUserProfile = async (uid) => {
  const profileDocRef = doc(db, "UserProfiles", uid);
  const profileDocSnap = await getDoc(profileDocRef);
  if (profileDocSnap.exists()) {
    return true;
  } else {
    return false;
  }
};

export const createUserProfile = async (uid) => {
  try {
    await setDoc(doc(db, "UserProfiles", uid), {
      isInitialized: true,
    });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export const createIfNotExistUserProfile = async (uid) => {
  try {
    const profileExists = await existsUserProfile(uid);
    if (profileExists) {
      console.log("profile already there");
      return true;
    } else {
      console.log("creating user profile...");
      await createUserProfile(uid);
      return true;
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};

export { app, db };
