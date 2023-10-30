FROM node:18-alpine as BUILD_IMAGE
WORKDIR /app

COPY package*.json ./

RUN npm install 

ENV VITE_GOOGLE_CLIENT_ID=777926761995-gkejbcrh3jc00k7gk9phdqrbkqlc0pj9.apps.googleusercontent.com \
    VITE_FIRESTORE_USER_PROFILES_BASE_URL=https://firestore.googleapis.com/v1beta1/projects/toycars-1269f/databases/(default)/documents/UserProfiles/ \
    VITE_FIRESTORE_REQ_BODY_NAME=projects/toycars-1269f/databases/(default)/documents/UserProfiles/ \
    VITE_RECAPTCHA_V3_SITE_KEY=6LeREi4oAAAAALqWl9yta4x0sBGO5RWfRUwn_qGZ \
    VITE_FIREBASE_API_KEY=AIzaSyC0ATpddk7TvsAqR5XNONt7bM5uJhnXAbQ \
    VITE_FIREBASE_AUTH_DOMAIN=toycars-1269f.firebaseapp.com \
    VITE_FIREBASE_PROJECT_ID=toycars-1269f \
    VITE_FIREBASE_STORAGE_BUCKET=toycars-1269f.appspot.com \
    VITE_FIREBASE_MESSAGING_SENDER_ID=476861539027 \
    VITE_FIREBASE_APP_ID=1:476861539027:web:933874f793ec3d1c132a26 \
    VITE_FIREBASE_MEASUREMENT_ID=G-DC5H2R2YDX \
    VITE_BACKEND_ENDPOINT=http://18.194.12.173/api \
    VITE_FRONTEND_ENDPOINT=http://18.194.12.173

COPY . . 

RUN npm run build

FROM node:18-alpine as PRODUCTION_IMAGE
EXPOSE 8080

WORKDIR /app
COPY --from=BUILD_IMAGE /app/dist/ /app/dist/
COPY package*.json ./
COPY vite.config.js ./
RUN apk update && apk add --no-cache curl
RUN npm install vite
CMD ["npm", "run", "preview"]


