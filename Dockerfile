FROM node:18-alpine as BUILD_IMAGE
WORKDIR /app

COPY package*.json ./

RUN npm install 

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


