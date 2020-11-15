FROM node:12.18.1

WORKDIR '/app'

COPY . .

RUN npm install

EXPOSE 4200

CMD ["npm", "run", "start:prod"]
