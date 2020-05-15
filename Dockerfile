FROM node:10.15.3

RUN mkdir -p /src/reviews

WORKDIR /src/reviews

COPY ${pwd} /src/reviews

RUN apt-get update
RUN apt-get install -y vim
RUN apt-get install -y default-mysql-client
RUN npm install

EXPOSE 8080

CMD [ "npm", "run", "reset_db" ]
CMD [ "npm", "run", "import_db" ]
CMD [ "npm", "run", "server" ]
