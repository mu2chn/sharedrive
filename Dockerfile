FROM node:12
USER root
WORKDIR /share_drive
CMD ["npm", "run", "start"]
