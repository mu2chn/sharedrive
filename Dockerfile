FROM node:12
USER root
WORKDIR /share_drive
ADD ./package.json ./
ADD ./package-lock.json ./
RUN npm install
CMD ["npm", "run", "start"]
