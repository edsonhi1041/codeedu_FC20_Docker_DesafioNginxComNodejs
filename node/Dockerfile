FROM node:15

WORKDIR /usr/src/app

RUN apt-get update

RUN npm init -y
RUN npm install -g express-generator
RUN npx express --view=ejs my-app

WORKDIR /usr/src/app/my-app

RUN npm install

RUN npm install express-flash --save
RUN npm install express-session --save
RUN npm install body-parser --save
RUN npm install mysql --save

RUN apt-get install vim -y

COPY . . 

 RUN apt-get update && apt-get install -y wget

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
   && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
   && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz

EXPOSE 3000

#CMD ["node", "index.js"]

#CMD ["history"]

ENTRYPOINT ["npm", "start"]