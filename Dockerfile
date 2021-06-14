FROM node:16.3-alpine
WORKDIR /react
COPY . .
RUN npm install
RUN npm run build
