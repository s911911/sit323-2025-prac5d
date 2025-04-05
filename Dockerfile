FROM node:14

WORKDIR /web_app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 2000

CMD ["npm", "start"]
