FROM node:18.16.0

WORKDIR /test

COPY package.json package-lock.json tsconfig.json .env ./

RUN npm install

COPY next.config.js ./next.config.js

COPY src ./src
COPY public ./public

CMD ["npm","run","dev"]