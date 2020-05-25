FROM node:12
USER root
RUN chmod -R 777 /usr/local
WORKDIR /share_drive
RUN npm install
ADD . .
CMD ["npm", "run", "start"]
