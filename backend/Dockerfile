FROM node:18-alpine

WORKDIR /app/back

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3333

CMD ['npm', 'start']
