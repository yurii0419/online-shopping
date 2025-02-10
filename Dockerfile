FROM node:21.1-bookworm-slim
RUN apt-get update
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]