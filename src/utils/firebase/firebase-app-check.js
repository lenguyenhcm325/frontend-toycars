// const { initializeApp } = require("firebase-admin/app");
// const {
//   initializeAppCheck,
//   getAppCheck,
//   ReCaptchaV3Provider,
// } = require("firebase/app-check");
import { initializeAppCheck, getToken } from "firebase/app-check";
import { ReCaptchaV3Provider } from "firebase/app-check";
import { app } from "./firebase.utils";
const recaptchaV3SiteKey = import.meta.env.VITE_RECAPTCHA_V3_SITE_KEY;
const backendEndpoint = import.meta.env.VITE_BACKEND_ENDPOINT;

const appCheck = initializeAppCheck(
  app,
  {
    provider: new ReCaptchaV3Provider(recaptchaV3SiteKey),
    isTokenAutoRefreshEnabled: true,
  } // ReCaptchaV3Provider or CustomProvider
);

export const callApiWithAppCheckExample = async () => {
  let appCheckTokenResponse;
  try {
    appCheckTokenResponse = await getToken(appCheck, false);
    const response = await fetch(`${backendEndpoint}/api/secured`, {
      headers: {
        "X-Firebase-AppCheck": appCheckTokenResponse.token,
      },
    });
    if (!response.ok) {
      throw new Error("network error");
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    // Handle any errors if the token was not retrieved.
    console.error(JSON.stringify(err));
    return;
  }
};
